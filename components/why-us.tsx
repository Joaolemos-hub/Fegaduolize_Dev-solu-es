"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Target, Wrench } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Sem enrolação. Prazos reais, comunicação clara e entrega pontual em cada etapa.",
  },
  {
    icon: Target,
    title: "Foco no seu Resultado",
    description: "Cada detalhe é pensado para que seu site gere mais contatos, leads e vendas.",
  },
  {
    icon: Wrench,
    title: "Suporte Contínuo",
    description: "Seu projeto não termina na entrega. Estamos aqui para ajustes e melhorias.",
  },
]

export function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-muted-blue text-sm font-mono mb-4 block">
                {"// Por que nós"}
              </span>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold text-off-white text-balance">
                Comprometimento do início ao fim
              </h2>
            </motion.div>

            {/* Reasons */}
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-6 pl-6 border-l-2 border-gold"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-gold" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-syne)] text-lg font-bold text-off-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-blue font-light leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Decorative Logo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer Rotating Square */}
              <div 
                className="w-[220px] h-[220px] rotate-45 border-2 border-gold/30 animate-pulse-glow"
                aria-hidden="true"
              >
                {/* Horizontal Lines Texture */}
                <div className="absolute inset-4 flex flex-col justify-center gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-px bg-gold/20" />
                  ))}
                </div>
              </div>

              {/* Center F */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[var(--font-syne)] text-6xl font-extrabold text-navy">
                  F
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
