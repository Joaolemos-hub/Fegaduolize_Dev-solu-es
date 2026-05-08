"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Code, Palette, Zap, Handshake } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Codigo limpo",
    description: "Estruturamos componentes e estilos para facilitar manutenção e evolução do projeto.",
    image: "/services/codigo-limpo.jpg",
  },
  {
    icon: Palette,
    title: "Direção visual",
    description: "Buscamos interfaces que transmitam confiança e pareçam alinhadas ao negocio, não genericas.",
    image: "/services/direcao-visual.jpg",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Priorizamos carregamento rápido, responsividade e experiência estavel em diferentes telas.",
    image: "/services/performance.jpg",
  },
  {
    icon: Handshake,
    title: "Parceria",
    description: "Trabalhamos proximo do cliente para transformar referencia visual em solução clara e pratica.",
    image: "/services/parceria.jpg",
  },
]

function FeatureCard({ feature, index, isInView }: { feature: typeof features[0], index: number, isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-navy-light border border-gold/10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image - Reveals on Hover */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className={`object-cover transition-all duration-700 ease-out ${
            isHovered 
              ? "opacity-100 scale-110" 
              : "opacity-0 scale-100"
          }`}
        />
        {/* Overlay gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 transition-opacity duration-500 ${
            isHovered ? "opacity-90" : "opacity-100"
          }`} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col min-h-[280px]">
        {/* Icon with circle background */}
        <div 
          className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
            isHovered 
              ? "bg-gold scale-110 shadow-[0_0_30px_rgba(240,192,64,0.5)]" 
              : "bg-gold/10"
          }`}
        >
          <feature.icon 
            className={`w-7 h-7 transition-colors duration-500 ${
              isHovered ? "text-navy" : "text-gold"
            }`} 
          />
        </div>

        {/* Title */}
        <h3 
          className={`font-heading text-xl font-bold mb-3 transition-colors duration-500 ${
            isHovered ? "text-gold" : "text-off-white"
          }`}
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p 
          className={`text-sm leading-relaxed flex-grow transition-colors duration-500 ${
            isHovered ? "text-off-white/90" : "text-muted-blue"
          }`}
        >
          {feature.description}
        </p>

        {/* Decorative corner accents */}
        <div 
          className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 rounded-tr-lg transition-all duration-500 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <div 
          className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/50 rounded-bl-lg transition-all duration-500 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>
    </motion.div>
  )
}

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
            Desenvolvimento com atenção aos detalhes, legibilidades e resultados.
          </motion.h2>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-blue leading-relaxed"
          >
            <p>
              Atuamos criando experiências web completas, do visual a implementação, com foco em sites e interfaces que precisam comunicar qualidade de forma imediata.
            </p>
            <p>
              Nossa base esta em React, Next.js e Node.js, mas o que realmente nos move e organizar a apresentação do produto para que ele pareça mais profissional, mais claro e mais confiável.
            </p>
            <p>
              Gostamos de projetos em que design e codigo caminham juntos: a parte técnica precisa funcionar bem, e a parte visual precisa defender o valor do negocio.
            </p>
          </motion.div>
        </div>

        {/* Section Title for Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-off-white mb-4">
            O que desenvolvemos para voce
          </h3>
          <p className="text-muted-blue max-w-2xl mx-auto">
            Passe o mouse sobre cada card para descobrir mais
          </p>
        </motion.div>

        {/* Features Grid with Images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              feature={feature} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
