import React from "react";

type Props = {
  route: string;
};

const Lab3DIFrame = React.forwardRef<HTMLIFrameElement, Props>(({ route, ...rest }, ref) => {
  const src = `${process.env.NEXT_PUBLIC_LAB_3D_BASE_URL}/${route}`;

  return <iframe ref={ref} src={src} className="w-full h-full" {...rest} />;
});

Lab3DIFrame.displayName = "Lab3DIFrame";

export { Lab3DIFrame };
