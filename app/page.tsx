import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Tools } from "@/components/tools"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Tools />
      <Contact />
      <Footer />
    </main>
  )
}
