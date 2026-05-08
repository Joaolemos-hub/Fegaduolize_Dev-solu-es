"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Zap, Handshake } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Código limpo",
    description: "Estruturamos componentes e estilos para facilitar manutenção e evolução do projeto.",
  },
  {
    icon: Palette,
    title: "Direção visual",
    description: "Buscamos interfaces que transmitam confiança e pareçam alinhadas ao negócio, não genéricas.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Priorizamos carregamento rápido, responsividade e experiência estável em diferentes telas.",
  },
  {
    icon: Handshake,
    title: "Parceria",
    description: "Trabalhamos próximo do cliente para transformar referência visual em solução clara e prática.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" ref={ref} className="py-24 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-gold text-sm tracking-wider uppercase">Sobre nós</span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left - Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-off-white leading-tight text-balance"
          >
            Desenvolvimento com atenção a detalhe, legibilidade e resultado.
          </motion.h2>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-blue leading-relaxed"
          >
            <p>
              Atuamos criando experiências web completas, do visual à implementação, com foco em sites e interfaces que precisam comunicar qualidade de forma imediata.
            </p>
            <p>
              Nossa base está em React, Next.js e Node.js, mas o que realmente nos move é organizar a apresentação do produto para que ele pareça mais profissional, mais claro e mais confiável.
            </p>
            <p>
              Gostamos de projetos em que design e código caminham juntos: a parte técnica precisa funcionar bem, e a parte visual precisa defender o valor do negócio.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-off-white mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-blue text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
