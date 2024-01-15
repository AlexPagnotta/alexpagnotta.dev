const FACES = ["front", "back", "left", "right", "top", "bottom"] as const;

const cubeTransforms: Record<(typeof FACES)[number], string> = {
  front: "rotateY(90deg) translateX(50%) rotateY(-90deg)",
  back: "rotateY(90deg) translateX(-50%) rotateY(90deg)",
  left: "translateX(-50%) rotateY(-90deg)",
  right: "translateX(50%) rotateY(90deg)",
  top: "translateY(-50%) rotateX(90deg)",
  bottom: "translateY(50%) rotateX(-90deg)",
};

export const Lab3DLoading = () => {
  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: "400px",
      }}
    >
      <div
        className="w-full h-full animate-lab-3d-loading-cube"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(-100px)",
        }}
      >
        {FACES.map((face) => (
          <div
            key={face}
            className="absolute inset-0 w-full h-full border-2 border-gray-20"
            style={{
              transform: cubeTransforms[face],
            }}
          />
        ))}
      </div>
    </div>
  );
};
