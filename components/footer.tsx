"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-navy border-t border-gold/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo-DrNr1NjBRSULdVpd227es7z9q14ZJz.png"
              alt="Fegaduolize Dev"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5541996411603"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gold/20 text-muted-blue hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/fegaduolize_dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gold/20 text-muted-blue hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:fegaduolize.dev@gmail.com"
              className="p-3 rounded-full border border-gold/20 text-muted-blue hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-blue">
            © 2025 Fegaduolize Dev. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
