import { useState, useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
}

export const useCircleAnimation = (
  count: number,
  width: number,
  height: number
) => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    // Initialize circles
    const initialCircles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1 + 0.5, // 5px to 10px radius
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }));
    setCircles(initialCircles);

    // Animation function
    const animate = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let { x, y, dx, dy, radius } = circle;

          // Update position
          x += dx;
          y += dy;

          // Bounce off walls
          if (x + radius > width || x - radius < 0) dx = -dx;
          if (y + radius > height || y - radius < 0) dy = -dy;

          return { ...circle, x, y, dx, dy };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count, width, height]);

  return circles;
};
