"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // mobile breakpoint <640px
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If mobile, just render a plain section
  if (isMobile) {
    return <section className="mb-16">{children}</section>;
  }

  // Otherwise, use animation
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      viewport={{ once: false, amount: 0.2 }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
