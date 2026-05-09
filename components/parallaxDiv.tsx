// components/ParallaxDiv.tsx
"use client";

import { motion, useScroll } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface ParallaxDivProps {
  children: ReactNode;
}

const ParallaxDiv: React.FC<ParallaxDivProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setScrollY(value * 100);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <motion.div
      animate={{ y: scrollY * 1.5 }}
      className="h-[500px] bg-fixed relative"
      style={{ background: "url(/your-image.jpg) center/cover no-repeat" }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxDiv;
