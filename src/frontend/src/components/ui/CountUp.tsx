import { useInView } from "@/components/ui/AnimatedSection";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function CountUp({
  value,
  suffix = "",
  duration = 1800,
  className = "",
  decimals = 0,
}: CountUpProps) {
  const { ref, inView } = useInView(0.3);
  const startValue = value * 0.8;
  const [current, setCurrent] = useState(startValue);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!inView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();

    function easeOut(t: number): number {
      return 1 - (1 - t) ** 3;
    }

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const next = startValue + (value - startValue) * eased;
      setCurrent(Number.parseFloat(next.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCurrent(value);
      }
    }

    requestAnimationFrame(update);
  }, [inView, value, duration, decimals, startValue]);

  const formatted =
    decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}
