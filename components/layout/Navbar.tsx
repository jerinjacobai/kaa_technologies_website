"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string, label?: string) => {
    setMobileOpen(false);
    if (label) setActiveLink(label);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-[#141521]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "top-0 sm:top-10 bg-transparent"
        }`}
      >
        <nav className="kaa-container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home", "Home");
              }}
              className="flex items-center group flex-shrink-0"
            >
              <div className="relative h-12 w-48">
                <Image
                  src="/kaa-logo.png"
                  alt="KAA Software and Technologies"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                  priority
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href, link.label)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg text-white/80 hover:text-white"
                style={{
                  color: activeLink === link.label ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== link.label)
                    (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== link.label)
                    (e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.7)";
                }}
              >
                {link.label}
                {activeLink === link.label && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ background: "#E91E63", boxShadow: "0 0 8px rgba(233,30,99,0.5)" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+97400000000"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-[#E91E63] hover:bg-[#E91E63]/10 transition-all duration-300"
            >
              <Phone size={16} />
            </a>
              <button
                onClick={() => scrollTo("#contact", "Contact Us")}
                id="nav-start-consultation"
                className="btn-pink"
                style={{ borderRadius: "6px", padding: "10px 20px" }}
              >
                Start Consultation
              </button>
            </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/5 border border-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} className="text-white" />
            ) : (
              <Menu size={22} className="text-white" />
            )}
          </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden pt-16"
            style={{ background: "rgba(13, 14, 23, 0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col px-6 pt-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link.href, link.label)}
                  className="text-left px-4 py-4 rounded-xl text-lg font-semibold transition-all duration-200"
                  style={{
                    color: activeLink === link.label ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)",
                    borderLeft: activeLink === link.label ? "3px solid #E91E63" : "3px solid transparent",
                    background: activeLink === link.label ? "rgba(255,255,255,0.03)" : "transparent",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => scrollTo("#contact", "Contact Us")}
                className="mt-4 w-full py-4 rounded-xl text-base font-semibold text-white"
                style={{ background: "#be185d" }}
              >
                Start Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
