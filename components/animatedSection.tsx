'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const AnimatedSection = ({ children }: { children: ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="mb-16"
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
