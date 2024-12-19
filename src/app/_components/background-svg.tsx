"use client";

import { FC, useRef, useEffect } from "react";

interface BackgroundSVGProps {}

const BackgroundSVG: FC<BackgroundSVGProps> = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `${pathLength}`;
    pathRef.current.style.strokeDashoffset = `${pathLength}`;
  }, []);

  return (
    <div className="w-screen h-screen absolute top-0 left-0">
      <svg
        viewBox="0 0 1500 900"
        className="w-full h-full sticky top-0 left-0"
        style={{ background: "white" }}
      >
        {/* Main horizontal lines */}
        {[200, 400, 600, 800].map((y) => (
          <path
            key={`h-line-${y}`}
            d={`M 100,${y} L 1400,${y}`}
            className="stroke-[#E5E7EB] stroke-[1px] fill-none"
          />
        ))}

        {/* Vertical lines */}
        {[200, 500, 800, 1100, 1400].map((x) => (
          <path
            key={`v-line-${x}`}
            d={`M ${x},50 L ${x},850`}
            className="stroke-[#E5E7EB] stroke-[1px] fill-none"
          />
        ))}

        {/* Rounded paths */}
        {[
          "M 200,50 L 350,50 Q 400,50 400,100 L 400,200",
          "M 500,50 L 650,50 Q 700,50 700,100 L 700,200",
          "M 800,50 L 950,50 Q 1000,50 1000,100 L 1000,200",
          "M 200,400 L 350,400 L 350,600 Q 350,650 400,650 L 600,650",
          "M 800,400 L 950,400 Q 1000,400 1000,450 L 1000,600",
          "M 1100,400 L 1250,400 Q 1300,400 1300,450 L 1300,600",
          "M 500,850 L 650,850 Q 700,850 700,800 L 700,600",
          "M 800,850 L 950,850 Q 1000,850 1000,800 L 1000,600",
        ].map((d, i) => (
          <path
            key={`curve-${i}`}
            d={d}
            className="stroke-[#E5E7EB] stroke-[1px] fill-none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}

        {/* Static dots with varying radii */}
        {[
          ...[200, 400, 600, 800].flatMap((y) =>
            [200, 500, 800, 1100, 1400].map((x) => [x, y])
          ),
          ...[200, 500, 800, 1100, 1400].flatMap((x) => [
            [x, 50],
            [x, 850],
          ]),
        ].map(([cx, cy], i) => {
          const radius = 3 + (i % 3); // Vary radius between 3, 4, and 5
          return (
            <circle
              key={`dot-${i}`}
              cx={cx}
              cy={cy}
              r={radius}
              className="fill-[#E5E7EB] opacity-75"
            />
          );
        })}

        {/* Moving dots with varying radii */}
        {[
          { path: "M 100,200 L 1400,200", duration: "15s" },
          { path: "M 100,400 L 1400,400", duration: "18s" },
          { path: "M 100,600 L 1400,600", duration: "20s" },
          { path: "M 200,50 L 200,850", duration: "12s" },
          { path: "M 500,50 L 500,850", duration: "14s" },
          { path: "M 800,50 L 800,850", duration: "16s" },
          { path: "M 1100,50 L 1100,850", duration: "14s" },
          { path: "M 1400,50 L 1400,850", duration: "15s" },
        ].map((animPath, i) => {
          const radius = 3 + (i % 4); // Vary radius between 3, 4, 5, and 6
          return (
            <circle key={`anim-dot-${i}`} className="fill-[#E5E7EB]" r={radius}>
              <animateMotion
                dur={animPath.duration}
                repeatCount="indefinite"
                path={animPath.path}
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
};

export default BackgroundSVG;
