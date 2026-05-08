"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle } from "lucide-react"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contato" ref={ref} className="relative py-24 bg-gold overflow-hidden">
      {/* Diagonal Stripe Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #111e38 0px,
            #111e38 1px,
            transparent 1px,
            transparent 10px
          )`
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-6 text-balance"
        >
          Vamos construir algo juntos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-navy/80 text-lg mb-10 max-w-xl mx-auto"
        >
          Solicite um orçamento sem compromisso. Respondemos em até 24h.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="https://wa.me/5541996411603?text=Olá! Vim pelo site e quero um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-off-white font-semibold rounded-full hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          Falar no WhatsApp
        </motion.a>
      </div>
    </section>
  )
}
