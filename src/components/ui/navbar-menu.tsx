
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
       <Button variant="ghost">
        {item}
      </Button>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-background dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-border shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn("relative rounded-full bg-transparent flex justify-center space-x-4", className)}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  'data-ai-hint': dataAiHint,
  alt,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  'data-ai-hint'?: string;
  alt: string;
}) => {
  return (
    <Link href={href} className="flex space-x-4 group/product">
      <div className="w-32 h-20 bg-secondary rounded-xl overflow-hidden">
        <Image
          src={src}
          width={140}
          height={70}
          alt={alt}
          className="w-full h-full object-cover group-hover/product:scale-105 transition-transform duration-300"
          data-ai-hint={dataAiHint}
        />
      </div>
      <div>
        <h4 className="text-base font-bold mb-1 text-foreground group-hover/product:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
};
