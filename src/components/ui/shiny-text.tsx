
"use client";

import { cn } from "@/lib/utils";
import React from "react";

const ShinyText = ({
  text,
  className,
  speed = 5,
}: {
  text: string;
  className?: string;
  speed?: number;
}) => {
  const animationDuration = `${speed}s`;

  return (
    <p
      className={cn(
        "animate-shine bg-clip-text text-transparent",
        "bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_60%)]",
        "bg-[length:200%_100%]",
        className
      )}
      style={{
        animationDuration,
      }}
    >
      {text}
    </p>
  );
};

export default ShinyText;
