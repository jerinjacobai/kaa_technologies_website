import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import ERPShowcase from "@/components/sections/ERPShowcase";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="pt-[104px] md:pt-[104px]">
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
