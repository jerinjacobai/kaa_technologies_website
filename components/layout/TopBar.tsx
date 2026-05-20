"use client";
import { Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="w-full hidden sm:block fixed top-0 left-0 right-0 z-50 h-10 border-b border-white/5"
      style={{ background: "#141521" }}
    >
      <div className="kaa-container">
        <div className="flex items-center justify-between h-10">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@kaatechnologies.qa"
              className="flex items-center gap-2 text-xs text-[#A1A1AA] hover:text-white transition-colors duration-200"
            >
              <Mail size={12} className="text-[#E91E63]" />
              info@kaatechnologies.qa
            </a>
            <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
              <MapPin size={12} className="text-[#E91E63]" />
              Qatar, Doha
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-[#A1A1AA]">Follow Us</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors duration-200"
              >
                {/* Instagram SVG */}
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors duration-200"
              >
                {/* Facebook SVG */}
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors duration-200"
              >
                {/* LinkedIn SVG */}
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
