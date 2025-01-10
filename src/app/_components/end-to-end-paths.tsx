"use client";

import { FC } from "react";

interface EndToEndPathsProps {}

const EndToEndPaths: FC<EndToEndPathsProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1462.5 403.5"
      className="w-full h-full"
    >
      {/* Circle 1 */}
      <circle
        cx="89.5"
        cy="89.5"
        r="89.5"
        transform="translate(11.5 208)"
        fill="none"
        stroke="#322a5e"
        strokeWidth="1"
        className="animated-path"
      />
      {/* Circle 2 */}
      <circle
        cx="89.5"
        cy="89.5"
        r="89.5"
        transform="translate(515.5 208)"
        fill="none"
        stroke="#322a5e"
        strokeWidth="1"
        className="animated-path"
      />
      {/* Circle 3 */}
      <circle
        cx="89.5"
        cy="89.5"
        r="89.5"
        transform="translate(767.5 208)"
        fill="none"
        stroke="#322a5e"
        strokeWidth="1"
        className="animated-path"
      />
      {/* Circle 4 */}
      <circle
        cx="89.5"
        cy="89.5"
        r="89.5"
        transform="translate(1271.5 208)"
        fill="none"
        stroke="#322a5e"
        strokeWidth="1"
        className="animated-path"
      />
      {/* Circle 5 */}
      <circle
        cx="89.5"
        cy="89.5"
        r="89.5"
        transform="translate(1019.5 208)"
        fill="none"
        stroke="#322a5e"
        strokeWidth="1"
        className="animated-path"
      />
      {/* Circle 6 */}
      <circle
        cx="89.5"
        cy="89.5"
        r="89.5"
        transform="translate(263.5 208)"
        fill="none"
        stroke="#322a5e"
        strokeWidth="1"
        className="animated-path"
      />

      <style jsx>{`
        .animated-path {
          stroke-dasharray: 565; /* Total length of the circle path */
          stroke-dashoffset: 565;
          animation: dash 2s linear infinite;
        }

        @keyframes dash {
          from {
            stroke-dashoffset: 565;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
};

export default EndToEndPaths;
