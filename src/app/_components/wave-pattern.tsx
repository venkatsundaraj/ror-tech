"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface pageProps {
  className?: string;
}
const WavePattern: React.FC<pageProps> = ({ className }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const width = svg.clientWidth;
    const height = svg.clientHeight;
    const particleCount = 50;
    const connectionDistance = width / 5;

    // Create particles
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      x: (width * i) / particleCount,
      y: height / 2,
      size: 2 + Math.random() * 2,
      speed: 0.002 + Math.random() * 0.1,
      offset: Math.random() * Math.PI * 2,
    }));

    // Create SVG elements
    particles.forEach((particle) => {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", particle.x.toString());
      circle.setAttribute("cy", particle.y.toString());
      circle.setAttribute("r", particle.size.toString());
      circle.setAttribute("fill", "rgba(134, 239, 172, 0.8)");
      svg.appendChild(circle);
    });

    // Animation loop
    const animate = () => {
      const time = performance.now() * 0.001; // Convert to seconds

      // Update particle positions
      particles.forEach((particle, i) => {
        const y =
          height / 2 +
          Math.sin(time * particle.speed * 10 + particle.offset) * (height / 4);
        const circle = svg.children[i] as SVGCircleElement;
        circle.setAttribute("cy", y.toString());
      });

      // Draw connections
      while (svg.lastChild && svg.lastChild.nodeName === "line") {
        svg.removeChild(svg.lastChild);
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = Math.abs(
            parseFloat(svg.children[j].getAttribute("cy")!) -
              parseFloat(svg.children[i].getAttribute("cy")!)
          );
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const line = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "line"
            );
            line.setAttribute("x1", particles[i].x.toString());
            line.setAttribute("y1", svg.children[i].getAttribute("cy")!);
            line.setAttribute("x2", particles[j].x.toString());
            line.setAttribute("y2", svg.children[j].getAttribute("cy")!);
            line.setAttribute(
              "stroke",
              `rgba(134, 239, 172, ${
                (1 - distance / connectionDistance) * 0.2
              })`
            );
            line.setAttribute("stroke-width", "1");
            svg.appendChild(line);
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className={cn("w-full h-full bg-transparent", className)}>
      <svg
        ref={svgRef}
        className="w-full h-[400px]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="100%" height="100%" fill="transparent" />
      </svg>
    </div>
  );
};

export default WavePattern;
