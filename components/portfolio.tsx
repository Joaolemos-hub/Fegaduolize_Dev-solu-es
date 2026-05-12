"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    name: "Fegaduolize Company",
    description: "Landing page corporativa com design moderno e responsivo para empresa de tecnologia.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bUMjUwbEVWQ6ezcxYaoiiLztqU6kQz.png",
    url: "https://fegaduolize-company.vercel.app/",
    tags: ["Next.js", "React", "CSS"],
    isLive: true,
  },
  {
    name: "INTERLOG Transportes",
    description: "Plataforma completa de gestão logística com rastreamento de frotas e controle de cargas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wD6i6AGlIYBubVtn3ZfwEsutLdLNNn.png",
    url: "#",
    tags: ["Next.js", "React", "Node.js"],
    isLive: false,
  },
  {
    name: "SLUG Insulfilm",
    description: "Site institucional moderno para empresa de películas automotivas com foco em conversão.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sBmK7Oq7aettgdrRCRDkt36CCpccVi.png",
    url: "#",
    tags: ["Next.js", "React", "CSS"],
    isLive: false,
  },
  {
    name: "Black & Orange",
    description: "Plataforma de monitoramento e segurança com dashboard de câmeras e alertas em tempo real.",
    image: "/portfolio/black-orange.jpg",
    url: "#",
    tags: ["React", "Node.js", "WebSocket"],
    isLive: false,
  },
  {
    name: "Burn-Out",
    description: "A Burn-Out Performance Sound e referencia em som automotivo na regiao de Pinhais-PR e Grande Curitiba.",
    image: "/portfolio/burn-out.jpg",
    url: "#",
    tags: ["React", "Node.js", "CSS"],
    isLive: false,
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projetos" ref={ref} className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-gold text-sm tracking-wider uppercase">Projetos</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-bold text-off-white leading-tight mb-6 text-balance max-w-2xl"
        >
          Trabalhos com foco em identidade, clareza e entrega objetiva.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-blue mb-16 max-w-2xl"
        >
          Cada projeto aqui entra como uma vitrine de acabamento visual e implementação. A ideia é mostrar menos volume e mais consistência.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-navy rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                
                {/* Live Badge */}
                {project.isLive && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-green-500/90 rounded-full">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Online</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-off-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-muted-blue text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-gold/80 bg-gold/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.isLive ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors duration-300"
                  >
                    Visitar site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm text-muted-blue/50">Em breve</span>
                )}
              </div>
            </motion.article>
          ))}

          {/* Placeholder Cards */}
          {[1, 2].map((i) => (
            <motion.div
              key={`placeholder-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (projects.length + i) * 0.1 }}
              className="bg-navy rounded-xl border border-gold/10 p-6 flex flex-col items-center justify-center min-h-[300px]"
            >
              <span className="font-heading text-xl font-semibold text-off-white/30 mb-2">Em breve</span>
              <span className="text-sm text-muted-blue/50">Novo projeto em desenvolvimento.</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
