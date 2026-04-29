"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 grid-background animate-grid-flow hero-gradient-mask" 
        aria-hidden="true"
      />
      
      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,30,56,0)_0%,rgba(17,30,56,1)_70%)]" 
        aria-hidden="true"
      />

      {/* Rotating Diamond */}
      <div 
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border-2 border-gold/10 animate-rotate-diamond hidden md:block"
        aria-hidden="true"
      />
      <div 
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-gold/5 animate-rotate-diamond hidden md:block"
        style={{ animationDelay: "-5s" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-7 h-0.5 bg-gold" aria-hidden="true" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Soluções Digitais · Curitiba, PR
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-[var(--font-syne)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-balance"
          >
            Seu negócio
            <br />
            merece um site
            <br />
            que{" "}
            <span className="relative text-gold">
              vende.
              <span 
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-blue text-lg md:text-xl font-light max-w-[480px] mb-10 leading-relaxed"
          >
            Desenvolvemos sites profissionais, e-commerce e sistemas personalizados 
            para empresas que precisam crescer — da identidade digital às plataformas de logística.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(240,192,64,0.4)] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-4 text-gold font-medium hover:text-gold-dark transition-colors duration-300 underline underline-offset-4"
            >
              Ver serviços →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
