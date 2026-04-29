"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(17,30,56,0.95)] backdrop-blur-[16px] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Fegaduolize Dev - Página inicial">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo-DrNr1NjBRSULdVpd227es7z9q14ZJz.png"
              alt="Fegaduolize Dev Soluções"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* CTA Button */}
          <a
            href="#contato"
            className="px-6 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(240,192,64,0.4)] transition-all duration-300"
            aria-label="Falar Conosco"
          >
            Falar Conosco
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
