"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Projetos", href: "#projetos" },
  { name: "Ferramentas", href: "#ferramentas" },
  { name: "Contato", href: "#contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Height of navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
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
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, "#")}
              className="flex items-center" 
              aria-label="Fegaduolize Dev - Pagina inicial"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo-DrNr1NjBRSULdVpd227es7z9q14ZJz.png"
                alt="Fegaduolize Dev Solucoes"
                width={180}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-off-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              className="hidden md:block px-6 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(240,192,64,0.4)] transition-all duration-300"
              aria-label="Falar Conosco"
            >
              Falar Conosco
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-off-white hover:text-gold transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-navy/95 backdrop-blur-lg"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="relative pt-24 px-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-2xl font-heading font-bold text-off-white hover:text-gold transition-colors py-3 border-b border-gold/10"
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, "#contato")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  className="mt-6 px-6 py-4 bg-gold text-navy font-semibold rounded-full text-center hover:bg-gold-dark transition-all duration-300"
                >
                  Falar Conosco
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
