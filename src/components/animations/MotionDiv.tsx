"use client";

import { ForwardedRef, forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  (
    { children, className, style, ...props },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <motion.div ref={ref} className={className} style={style} {...props}>
        {children}
      </motion.div>
    );
  }
);

MotionDiv.displayName = "MotionDiv";
