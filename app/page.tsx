import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { WhyUs } from "@/components/why-us"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
