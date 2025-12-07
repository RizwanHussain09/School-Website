"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/admissions", label: "Admissions" },
    { href: "/academics", label: "Academics" },
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News & Events" },
    { href: "/contact", label: "Contact" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 sticky-nav no-print transition-all duration-300 ${
          scrolled ? "scrolled bg-white shadow-lg" : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0" whileHover={{ scale: 1.05 }}>
              <Link href="/" className="flex items-center space-x-3">
                {/* Logo Container - Fixed Structure */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                  <div className="absolute inset-0 bg-[#1D2F5F] rounded-lg shadow-lg"></div>
                  <div className="relative z-10 w-full h-full p-1">
                    {/* Logo Image - CORRECT PATH */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/tim.jpg" // Removed /public from path
                        alt="KSS Logo - Kent Schooling System"
                        fill
                        className="object-contain p-0.5"
                        sizes="(max-width: 768px) 48px, 56px"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                <div className="hidden sm:block">
                  <h1
                    className="text-lg sm:text-xl font-bold text-[#1D2F5F] leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Kent Schooling System
                  </h1>
                  <p className="text-xs text-gray-600 mt-0.5">A PROJECT OF A&I GROUP</p>
                </div>
                <div className="block sm:hidden">
                  <div>
                    <h1 className="text-sm font-bold text-[#1D2F5F]">KSS</h1>
                    <p className="text-[10px] text-gray-600">A&I GROUP</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <motion.div
                className="flex space-x-6 xl:space-x-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className="nav-link text-sm font-medium text-[#1D2F5F] hover:text-[#E74C3C] transition-colors duration-200 relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E74C3C] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Apply Now Button - Desktop */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/apply"
                  className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#E74C3C] to-[#C0392B] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile Apply Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/apply"
                  className="px-4 py-2 bg-gradient-to-r from-[#E74C3C] to-[#C0392B] text-white text-sm font-semibold rounded-lg shadow hover:shadow-md"
                >
                  Apply
                </Link>
              </motion.div>
              <motion.button
                className="focus:outline-none text-[#1D2F5F] p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 sm:p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div className="flex items-center space-x-2">
              {/* Mobile Logo */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-[#1D2F5F] rounded-lg"></div>
                <div className="relative z-10 w-full h-full p-1">
                  <div className="relative w-full h-full">
                    <Image
                      src="/tim.jpg"
                      alt="KSS Logo"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                </div>
              </div>
              <h2 className="font-bold text-[#1D2F5F]" style={{ fontFamily: "'Playfair Display', serif" }}>
                KSS
              </h2>
            </div>
            <motion.button
              className="text-[#1D2F5F] p-2"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </motion.button>
          </div>

          <div className="flex-grow overflow-y-auto">
            <motion.div
              className="space-y-1"
              variants={containerVariants}
              initial="hidden"
              animate={mobileMenuOpen ? "visible" : "hidden"}
            >
              {navLinks.map((link, i) => (
                <motion.div key={link.href} variants={itemVariants} transition={{ delay: i * 0.1 }}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium text-sm text-[#1D2F5F] hover:text-[#E74C3C] hover:pl-6 border-l-2 border-transparent hover:border-[#E74C3C]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Apply Now Button - More Prominent */}
              <motion.div
                variants={itemVariants}
                className="pt-4 mt-4 border-t"
              >
                <Link
                  href="/apply"
                  className="block w-full py-3 px-4 bg-gradient-to-r from-[#E74C3C] to-[#C0392B] text-white font-semibold rounded-lg text-center shadow hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="pt-6 border-t mt-4"
            initial={{ opacity: 0 }}
            animate={mobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xs text-gray-600 mb-4 text-center">A PROJECT OF A&I GROUP</p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: "facebook-f", color: "#1877F2", label: "Facebook" },
                { icon: "twitter", color: "#1DA1F2", label: "Twitter" },
                { icon: "instagram", color: "#E4405F", label: "Instagram" },
                { icon: "youtube", color: "#FF0000", label: "YouTube" }
              ].map((social, i) => (
                <motion.a
                  key={social.icon}
                  href="#"
                  className="text-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-md transition-all relative group"
                  style={{ backgroundColor: social.color }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  aria-label={social.label}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CSS Styles */}
      <style jsx global>{`
        .sticky-nav.scrolled {
          backdrop-filter: blur(10px);
        }
        
        .nav-link.active {
          color: #E74C3C;
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #E74C3C;
        }
      `}</style>
    </>
  )
}