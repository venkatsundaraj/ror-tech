"use client";

import { FC } from "react";

interface BackgroundSVGProps {}

const BackgroundSVG: FC<BackgroundSVGProps> = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full"
        style={{ background: "white" }}
      >
        {/* Main horizontal line in center */}
        <path
          d="M 50,300 L 950,300"
          className="stroke-[#E5E7EB] stroke-[1px] fill-none"
        />

        {/* Curved paths accumulating to the right */}
        {[
          "M 200,300 L 200,100 Q 200,80 250,80 L 400,80", // Top path with curve
          "M 250,300 L 250,200 Q 300,200 400,200", // Slight curve to right
          "M 300,300 L 300,400 L 400,400", // Sharp turn to bottom right
          "M 350,300 L 350,500 Q 400,500 400,500", // Smooth bottom path
        ].map((d, i) => (
          <path
            key={`path-${i}`}
            d={d}
            className="stroke-[#E5E7EB] stroke-[1px] fill-none"
          />
        ))}

        {/* Rectangles on the right side */}
        {[
          { x: 400, y: 60, width: 120, height: 60, rounded: true },
          { x: 400, y: 180, width: 100, height: 80, rounded: false },
          { x: 400, y: 380, width: 120, height: 80, rounded: true },
          { x: 400, y: 480, width: 100, height: 60, rounded: false },
        ].map((rect, i) => (
          <rect
            key={`rect-${i}`}
            x={rect.x}
            y={rect.y}
            width={rect.width}
            height={rect.height}
            rx={rect.rounded ? 10 : 0}
            ry={rect.rounded ? 10 : 0}
            className="stroke-[#D1D5DB] fill-none stroke-[1px]"
          />
        ))}

        {/* Static dots */}
        {[
          [200, 300],
          [250, 300],
          [300, 300],
          [350, 300],
          [400, 80],
          [400, 200],
          [400, 400],
          [400, 500],
        ].map(([cx, cy], i) => (
          <circle
            key={`circle-${i}`}
            cx={cx}
            cy={cy}
            r="6"
            className="fill-[#E5E7EB] opacity-50"
          />
        ))}

        {/* Moving dots for data flow */}
        {[
          { path: "M 200,300 L 200,100", duration: "10s" },
          { path: "M 250,300 L 250,200", duration: "8s" },
          { path: "M 300,300 L 300,400", duration: "12s" },
          { path: "M 350,300 L 350,500", duration: "14s" },
        ].map((animPath, i) => (
          <circle key={`dot-${i}`} className="fill-[#E5E7EB]" r="4">
            <animateMotion
              dur={animPath.duration}
              repeatCount="indefinite"
              path={animPath.path}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default BackgroundSVG;
