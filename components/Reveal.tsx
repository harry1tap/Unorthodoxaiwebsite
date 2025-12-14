import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  overflow?: "hidden" | "visible";
  className?: string;
  fullHeight?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  overflow = "hidden",
  className = "",
  fullHeight = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();
  const [currentOverflow, setCurrentOverflow] = useState("hidden");

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ position: "relative", width, overflow: currentOverflow }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
        onAnimationComplete={() => setCurrentOverflow(overflow)}
        className={fullHeight ? "h-full" : ""}
      >
        {children}
      </motion.div>
    </div>
  );
};