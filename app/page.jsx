"use client"

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Services from "../components/services"
import Resume from "../components/resume"
import Work from "../components/work"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <main className="bg-[#0f1115] text-white min-h-screen">
      <Navbar />
      <section id="home" className="pt-20">
        <Hero />
      </section>
      <section id="services" className="py-20">
        <Services />
      </section>
      <section id="resume" className="py-20">
        <Resume />
      </section>
      <section id="work" className="py-20">
        <Work />
      </section>
      <section id="contact" className="py-20">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
