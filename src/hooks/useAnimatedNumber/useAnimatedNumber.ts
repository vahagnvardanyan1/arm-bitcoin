"use client";

import { useEffect, useRef, useState } from "react";

export const useAnimatedNumber = ({
  target,
  duration = 600,
}: {
  target: number;
  duration?: number;
}): number => {
  const [current, setCurrent] = useState(target);
  const prevRef = useRef(target);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const start = prevRef.current;
    const diff = target - start;

    if (diff === 0) return;

    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCurrent(start + diff * eased);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = target;
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return current;
};
