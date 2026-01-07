"use client";

import { ForwardedRef, forwardRef, useEffect, useState } from "react";

interface MotionDivProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileInView?: any;
  whileHover?: any;
  whileTap?: any;
  viewport?: any;
  onViewportEnter?: any;
  onViewportLeave?: any;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  (
    {
      children,
      className,
      style,
      initial,
      animate,
      exit,
      transition,
      whileInView,
      whileHover,
      whileTap,
      viewport,
      onViewportEnter,
      onViewportLeave,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [mounted, setMounted] = useState(false);
    const [MotionComponent, setMotionComponent] = useState<any>(null);

    useEffect(() => {
      setMounted(true);
      import("framer-motion")
        .then((mod) => {
          setMotionComponent(() => mod.motion.div);
        })
        .catch(() => {
          setMotionComponent(null);
        });
    }, []);

    if (!mounted || !MotionComponent) {
      return (
        <div ref={ref} className={className} style={style} {...props}>
          {children}
        </div>
      );
    }

    return (
      <MotionComponent
        ref={ref}
        className={className}
        style={style}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        whileInView={whileInView}
        whileHover={whileHover}
        whileTap={whileTap}
        viewport={viewport}
        onViewportEnter={onViewportEnter}
        onViewportLeave={onViewportLeave}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

MotionDiv.displayName = "MotionDiv";
