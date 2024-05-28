import { Bodies, Body, Composite, Engine, Mouse, MouseConstraint, Render, Runner, World } from "matter-js";
import { useCallback, useEffect, useRef } from "react";

import { getRandomNumber } from "~/features/utils/random";

type Props = {
  className?: string;
};

const WALL_THICKNESS = 10;
const BALL_RADIUS = 25;
const BALLS_COUNT = 15;

export const BallpitContentCardScene = ({ className }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const render = useRef<Render>();
  const engine = useRef<Engine>();

  // eslint-disable-next-line no-undef
  const startTimeout = useRef<NodeJS.Timeout>();

  const init = useCallback(() => {
    if (!wrapperRef.current || !canvasRef.current) return;

    const { width, height } = wrapperRef.current.getBoundingClientRect();

    engine.current = Engine.create({});
    render.current = Render.create({
      canvas: canvasRef.current,
      engine: engine.current,
      options: {
        width: width,
        height: height,
        background: "transparent",
        wireframes: false,
      },
    });

    // Create column of basll right above the canvas
    const balls = [...Array(BALLS_COUNT)].map((_, index) => {
      return Bodies.circle(
        getRandomNumber(0 + BALL_RADIUS, width - BALL_RADIUS),
        -BALL_RADIUS * 2 * (index + 1),
        BALL_RADIUS,
        {
          isSleeping: true,
          restitution: 0.5,
          render: { fillStyle: "#EAEAEA" },
        }
      );
    });

    // Create walls to contain the balls
    const wallsOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };
    const ground = Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width, WALL_THICKNESS, wallsOptions);
    const leftWall = Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height * 4, wallsOptions);
    const rightWall = Bodies.rectangle(
      width + WALL_THICKNESS / 2,
      height / 2,
      WALL_THICKNESS,
      height * 4,
      wallsOptions
    );

    // Create mouse controls to move the balls around
    const mouse = Mouse.create(render.current.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    render.current.mouse = mouse;

    // Workaround to fix the canvas blocking scroll page
    const mouseWheelEvent = (mouse as any).mousewheel;
    mouse.element.removeEventListener("mousewheel", mouseWheelEvent);
    mouse.element.removeEventListener("DOMMouseScroll", mouseWheelEvent);

    Composite.add(engine.current.world, [ground, leftWall, rightWall, ...balls, mouseConstraint]);

    Render.run(render.current);

    const runner = Runner.create();
    Runner.run(runner, engine.current);
  }, []);

  const destroy = useCallback(() => {
    if (render.current) {
      Render.stop(render.current);
      render.current.canvas.remove();
    }
    if (engine.current) {
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
    }
  }, []);

  const start = useCallback(() => {
    const balls = engine.current?.world.bodies.slice(3) || [];

    balls.forEach((ball) => {
      ball.isSleeping = false;
    });
  }, []);

  useEffect(() => {
    init();

    startTimeout.current = setTimeout(() => {
      start();
    }, 1000);

    return () => {
      if (startTimeout.current) clearTimeout(startTimeout.current);
      destroy();
    };
  }, [destroy, init, start]);

  const onResize = useCallback(() => {
    if (!wrapperRef.current || !canvasRef.current || !engine.current) return;
    const { width, height } = wrapperRef.current.getBoundingClientRect();

    const [_ground, leftWall, rightWall] = engine.current.world.bodies;

    // Adjust canvas size and walls position based on the card size
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    if (leftWall) Body.setPosition(leftWall, { x: -WALL_THICKNESS / 2, y: leftWall.position.y });
    if (rightWall) Body.setPosition(rightWall, { x: width + WALL_THICKNESS / 2, y: rightWall.position.y });
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(wrapperRef.current);

    return () => resizeObserver.disconnect();
  }, [onResize]);

  return (
    <div ref={wrapperRef} className={className}>
      <canvas ref={canvasRef} />
    </div>
  );
};
