"use client";

import Hero from "@/components/hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import Services from "@/components/services";
import WhyUs from "@/components/whyus";
import Roadmap from "@/components/roadmap";
import About from "@/components/about";
import ProjectsSection from "@/components/ProjectsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SeoContentBlock from "@/components/SeoContentBlock";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <WhatsAppButton />
      <Services />
      <WhyUs />
      <ProjectsSection />
      <About />
      <Roadmap />
      <Testimonials />
      <SeoContentBlock />
      <CallToAction />
      <ContactForm />
      <Footer />
    </main>
  );
}
