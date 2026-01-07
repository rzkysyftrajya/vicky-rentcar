"use client";

import React, { useEffect, useState } from "react";

// Dynamic import for framer-motion to avoid SSR issues
let motion: any = null;

interface SafeMotionProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

export function SafeMotionDiv({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.5 },
}: SafeMotionProps) {
  const [mounted, setMounted] = useState(false);
  const [MotionComponent, setMotionComponent] = useState<any>(null);

  useEffect(() => {
    setMounted(true);

    // Dynamically import framer-motion only on client side
    import("framer-motion")
      .then((mod) => {
        motion = mod;
        setMotionComponent(() => mod.motion.div);
      })
      .catch((err) => {
        console.warn("Failed to load framer-motion:", err);
        setMotionComponent(null);
      });
  }, []);

  // Return regular div during SSR or when motion is not available
  if (!mounted || !MotionComponent) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionComponent
      className={className}
      initial={initial}
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
