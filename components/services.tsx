"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    number: "01",
    icon: "🌐",
    title: "Sites Institucionais",
    description: "Presença digital profissional que transmite credibilidade e converte visitantes em clientes reais.",
  },
  {
    number: "02",
    icon: "🛒",
    title: "E-commerce",
    description: "Lojas virtuais completas com gestão de produtos, pagamentos integrados e experiência de compra otimizada.",
  },
  {
    number: "03",
    icon: "🚚",
    title: "Sistemas de Logística",
    description: "Plataformas personalizadas para controle de rotas, rastreamento e gestão da cadeia de suprimentos.",
  },
  {
    number: "04",
    icon: "⚙️",
    title: "Sistemas Sob Medida",
    description: "Software específico para o seu processo, integrado com as ferramentas que você já usa no dia a dia.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" ref={ref} className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-muted-blue text-sm font-mono mb-4 block">
            {"// Serviços"}
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold text-off-white text-balance">
            O que desenvolvemos para você
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/20">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group bg-navy p-8 hover:bg-navy-light/50 transition-all duration-300"
            >
              {/* Ghost Number */}
              <span 
                className="absolute top-4 right-4 font-[var(--font-syne)] text-6xl font-extrabold text-gold/5 group-hover:text-gold/10 transition-colors duration-300"
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Icon */}
              <div className="text-4xl mb-4" aria-hidden="true">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-syne)] text-xl font-bold text-off-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-blue font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div 
                className="absolute bottom-0 left-0 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ width: "100%" }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
