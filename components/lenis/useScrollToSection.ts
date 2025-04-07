'use client'

import { useLenis } from '@/components/lenis/LenisScroll'

export const useScrollToSection = () => {
  const lenis = useLenis()

  const scrollTo = (id: string, offset = -100) => {
    if (!lenis) return

    const el = document.querySelector(id) as HTMLElement | null // Cast to HTMLElement
    if (el) {
      lenis.scrollTo(el, { offset })
    }
  }

  return scrollTo
}
