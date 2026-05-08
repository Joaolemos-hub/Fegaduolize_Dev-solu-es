"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const services = [
  {
    number: "01",
    image: "/services/sites-institucionais.jpg",
    title: "Sites Institucionais",
    description: "Presença digital profissional que transmite credibilidade e converte visitantes em clientes reais.",
  },
  {
    number: "02",
    image: "/services/ecommerce.jpg",
    title: "E-commerce",
    description: "Lojas virtuais completas com gestão de produtos, pagamentos integrados e experiência de compra otimizada.",
  },
  {
    number: "03",
    image: "/services/logistica.jpg",
    title: "Sistemas de Logística",
    description: "Plataformas personalizadas para controle de rotas, rastreamento e gestão da cadeia de suprimentos.",
  },
  {
    number: "04",
    image: "/services/sistemas.jpg",
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
              className="relative group bg-navy p-8 min-h-[320px] overflow-hidden cursor-pointer"
            >
              {/* Background Image - reveals on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
              </div>

              {/* Ghost Number */}
              <span 
                className="absolute top-4 right-4 font-[var(--font-syne)] text-6xl font-extrabold text-gold/5 group-hover:text-gold/20 transition-colors duration-500"
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Image Preview Circle - transforms on hover */}
              <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-[var(--font-syne)] text-xl font-bold text-off-white mb-3 group-hover:text-gold transition-colors duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-muted-blue font-light leading-relaxed mb-6 group-hover:text-off-white/80 transition-colors duration-500">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"
                style={{ width: "100%" }}
                aria-hidden="true"
              />

              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[3px] border-t-[3px] border-transparent group-hover:border-gold group-hover:w-8 group-hover:h-8 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
