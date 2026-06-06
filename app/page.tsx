import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import ERPShowcase from "@/components/sections/ERPShowcase";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import StarfieldCanvas from "@/components/effects/StarfieldCanvas";

export default function Home() {
  return (
    <>
      <StarfieldCanvas />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Stats />
        <About />
        <WhyChooseUs />
        <Services />
        <ERPShowcase />
        <Process />
        <Portfolio />
        <Industries />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
