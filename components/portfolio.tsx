"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const clients = [
  {
    name: "Fegaduolize Company",
    category: "Site Institucional",
    description: "Landing page corporativa com design moderno e responsivo para empresa de tecnologia.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo-DrNr1NjBRSULdVpd227es7z9q14ZJz.png",
    url: "https://fegaduolize-company.vercel.app/",
    isReal: true,
    isLogo: true,
    bgColor: "#1e2a4a",
  },
  {
    name: "INTERLOG Transportes",
    category: "Sistema de Gestão",
    description: "Plataforma completa de gestão logística com rastreamento de frotas e controle de cargas para transportadora.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wD6i6AGlIYBubVtn3ZfwEsutLdLNNn.png",
    url: "#",
    isReal: false,
    isLogo: false,
  },
  {
    name: "SLUG Insulfilm",
    category: "Site Institucional",
    description: "Site institucional moderno para empresa de películas automotivas com foco em conversão e orçamentos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sBmK7Oq7aettgdrRCRDkt36CCpccVi.png",
    url: "#",
    isReal: false,
    isLogo: false,
  },
  {
    name: "Bety Day Coaching",
    category: "Site Institucional",
    description: "Landing page para coach profissional com design vibrante e formulário de captação de leads.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sBmK7Oq7aettgdrRCRDkt36CCpccVi.png",
    url: "#",
    isReal: false,
    isLogo: false,
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-muted-blue text-sm font-mono mb-4 block">
            {"// Portfólio"}
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold text-off-white text-balance">
            Nossos Clientes
          </h2>
          <p className="text-muted-blue mt-4 max-w-2xl">
            Conheça alguns dos projetos que desenvolvemos para empresas que confiaram em nossa expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-navy rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Image */}
              <div 
                className="relative h-56 overflow-hidden"
                style={client.isLogo ? { backgroundColor: client.bgColor } : undefined}
              >
                <Image
                  src={client.image}
                  alt={`Projeto ${client.name}`}
                  fill
                  className={client.isLogo 
                    ? "object-contain p-8 transform group-hover:scale-105 transition-transform duration-500" 
                    : "object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-gold/90 text-navy text-xs font-semibold rounded-full">
                  {client.category}
                </span>

                {/* Real Client Badge */}
                {client.isReal && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Online
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[var(--font-syne)] text-xl font-bold text-off-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-muted-blue text-sm leading-relaxed mb-4">
                  {client.description}
                </p>

                {/* Link */}
                {client.isReal ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-dark transition-colors duration-300"
                    aria-label={`Visitar site ${client.name}`}
                  >
                    Visitar site
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-muted-blue/50 text-sm">
                    <span className="w-2 h-2 bg-muted-blue/30 rounded-full" />
                    Projeto privado
                  </span>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(240,192,64,0.05) 0%, transparent 70%)"
                }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
