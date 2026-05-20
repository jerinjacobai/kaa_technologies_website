"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClasses = "w-full px-4 py-3 bg-[#151B27] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all duration-300";
  const labelClasses = "block text-xs font-semibold mb-2 text-[#A1A1AA] uppercase tracking-wider";

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#141521]">
      <div className="absolute inset-0 pointer-events-none subtle-grid opacity-20" />

      <div className="relative z-10 kaa-container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E91E63]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
                Contact Us
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E91E63]" />
            </div>
            <h2
              className="font-display font-bold leading-tight mb-4 text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Start Your <span className="gradient-text-pink">Consultation</span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-[#A1A1AA]">
              Ready to transform your business? Get in touch with our team of experts today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div>
            <ScrollReveal>
              <h3 className="font-display font-bold text-2xl mb-8 text-white">
                Get in Touch
              </h3>
            </ScrollReveal>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "info@kaatechnologies.qa",
                  href: "mailto:info@kaatechnologies.qa",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+974 0000 0000",
                  href: "tel:+97400000000",
                },
                {
                  icon: MapPin,
                  label: "Our Location",
                  value: "Doha, Qatar",
                  href: "#",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <a
                    href={item.href}
                    className="flex items-center gap-6 p-6 rounded-2xl kaa-card group"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 group-hover:bg-[#E91E63]/10 group-hover:border-[#E91E63]/30 transition-all duration-300"
                    >
                      <item.icon size={24} className="text-[#A1A1AA] group-hover:text-[#E91E63] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1 text-[#A1A1AA]">
                        {item.label}
                      </div>
                      <div className="text-lg font-semibold text-white group-hover:text-[#E91E63] transition-colors duration-300">
                        {item.value}
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <ScrollReveal delay={0.4}>
              <a
                href="https://wa.me/97400000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-5 rounded-2xl font-bold text-white transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  boxShadow: "0 8px 32px rgba(37,211,102,0.3)" 
                }}
              >
                <MessageCircle size={22} />
                Chat with us on WhatsApp
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <div>
            <ScrollReveal delay={0.2}>
              <motion.div
                className="p-8 sm:p-10 rounded-[2rem] kaa-card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/5 to-[#8A2BE2]/5" />
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 relative z-10"
                  >
                    <div className="w-20 h-20 mx-auto bg-[#E91E63]/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-4xl">✅</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2 text-white">
                      Message Sent!
                    </h3>
                    <p className="text-[#A1A1AA]">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className={inputClasses}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          className={inputClasses}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+974 0000 0000"
                        className={inputClasses}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="How can we help you?"
                        className={inputClasses}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className={`${inputClasses} resize-none`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-pink w-full justify-center py-4 text-base"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
