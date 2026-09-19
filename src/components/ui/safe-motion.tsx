"use client";

import React, { useEffect, useState } from "react";

interface SafeMotionProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

export function SafeMotionDiv({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate,
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.5 },
}: SafeMotionProps) {
  const [mounted, setMounted] = useState(false);
  const [MotionComponent, setMotionComponent] = useState<any>(null);

  useEffect(() => {
    let active = true;

    setMounted(true);

    import("framer-motion")
      .then((mod) => {
        if (!active) return;
        const Component = mod.motion?.div ?? null;
        setMotionComponent(() => Component);
      })
      .catch((err) => {
        if (!active) return;
        console.warn("Failed to load framer-motion:", err);
        setMotionComponent(null);
      });

    return () => {
      active = false;
    };
  }, []);

  if (!mounted || !MotionComponent) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionComponent
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </MotionComponent>
  );
}

// Alternative: Simple animation using CSS classes
// Use this when framer-motion is completely unavailable
export function SimpleMotionDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`animate-fade-in-up ${className || ""}`}>{children}</div>
  );
}
