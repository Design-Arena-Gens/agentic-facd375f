"use client";

import { useId } from "react";

type SparklineProps = {
  values: number[];
  color?: string;
};

export function Sparkline({ values, color = "#38bdf8" }: SparklineProps) {
  const gradientId = useId();
  if (!values.length) return null;

  const width = 120;
  const height = 48;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-12 w-full">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        points={points}
        className="drop-shadow-[0_4px_12px_rgba(56,189,248,0.4)]"
      />
      <polygon
        fill={`url(#${gradientId})`}
        points={`${points} ${width},${height} 0,${height}`}
        opacity={0.7}
      />
    </svg>
  );
}
