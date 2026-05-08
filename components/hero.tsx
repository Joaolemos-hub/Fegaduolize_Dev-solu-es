"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 text-sm text-gold border border-gold/30 rounded-full">
            Portfólio profissional
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-off-white leading-tight mb-8 text-balance"
        >
          Desenvolvimento web com presença visual mais madura e execução cuidadosa.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-blue leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Somos a <span className="text-gold font-medium">Fegaduolize Dev</span>. Projetamos e desenvolvemos sites e sistemas com foco em clareza, performance e acabamento profissional para negócios que precisam parecer sérios desde o primeiro olhar.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projetos"
            className="px-8 py-4 bg-transparent border border-gold/50 text-gold rounded-lg hover:bg-gold/10 transition-all duration-300 font-medium"
          >
            Ver projetos
          </Link>
          <Link
            href="https://wa.me/5541996411603?text=Olá! Vim pelo site e quero um orçamento."
            target="_blank"
            className="px-8 py-4 bg-gold text-navy rounded-lg hover:bg-gold-dark transition-all duration-300 font-semibold"
          >
            Falar no WhatsApp
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-1">4+</div>
            <div className="text-sm text-muted-blue">Projetos publicados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-1">React</div>
            <div className="text-sm text-muted-blue">Stack principal</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-1">100%</div>
            <div className="text-sm text-muted-blue">Responsivo</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
