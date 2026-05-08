"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Send } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`
    const whatsappUrl = `https://wa.me/5541996411603?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" ref={ref} className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-gold text-sm tracking-wider uppercase">Contato</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-bold text-off-white leading-tight mb-6 text-balance max-w-2xl"
        >
          Vamos construir uma presença digital mais forte para o seu projeto.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-blue mb-16 max-w-2xl"
        >
          Se você quer um site com visual mais profissional, nos chame. Podemos ajudar tanto na parte técnica quanto na direção do acabamento.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-off-white">Curitiba, PR</span>
            </div>

            <div className="p-6 bg-navy rounded-xl border border-gold/10">
              <h3 className="font-heading text-lg font-semibold text-off-white mb-3">
                Envie uma mensagem
              </h3>
              <p className="text-muted-blue text-sm leading-relaxed">
                O formulário monta a mensagem e abre direto no WhatsApp para acelerar o contato.
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-off-white mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-off-white placeholder-muted-blue/50 focus:border-gold focus:outline-none transition-colors duration-300"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-off-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-off-white placeholder-muted-blue/50 focus:border-gold focus:outline-none transition-colors duration-300"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-off-white mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-off-white placeholder-muted-blue/50 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Conte sobre seu projeto..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Enviar no WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
