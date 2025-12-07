"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      
      if (windowHeight > 0) {
        const scrolledPercent = Math.min((scrolled / windowHeight) * 100, 100)
        setProgress(scrolledPercent)
      }
    }

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  if (!mounted) return null

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#1D2F5F] to-[#E74C3C] z-50 transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }} 
    />
  )
}