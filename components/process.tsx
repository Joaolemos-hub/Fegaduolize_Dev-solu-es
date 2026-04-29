"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "1",
    title: "Conversa Inicial",
    description: "Entendemos seu negócio, objetivos e o que você precisa do projeto.",
  },
  {
    number: "2",
    title: "Proposta & Prazo",
    description: "Orçamento transparente, cronograma claro e escopo detalhado.",
  },
  {
    number: "3",
    title: "Desenvolvimento",
    description: "Você acompanha o andamento com atualizações regulares durante o processo.",
  },
  {
    number: "4",
    title: "Entrega & Suporte",
    description: "Lançamento, treinamento e suporte pós-entrega para garantir seu sucesso.",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-muted-blue text-sm font-mono mb-4 block">
            {"// Como funciona"}
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold text-off-white text-balance">
            Do briefing ao ar em 4 etapas
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div 
            className="absolute top-6 left-6 right-6 h-px border-t-2 border-dashed border-gold/30 hidden md:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gold bg-navy flex items-center justify-center mb-6">
                  <span className="font-[var(--font-syne)] text-lg font-bold text-gold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-syne)] text-lg font-bold text-off-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-blue font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
