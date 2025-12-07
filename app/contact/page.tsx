"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProgressBar from "@/components/progress-bar"
import ScrollToTop from "@/components/scroll-to-top"
import Contact from "@/components/contact"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <ProgressBar />
      <Header />

      {/* Page Header with Background Image */}
      <motion.div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=900&fit=crop')"
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        {/* Text Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Contact Us
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-6 font-light">
            We're Here to Help & Support You
          </p>
          
          {/* Additional descriptive text */}
          <motion.p 
            className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get in touch with our team for admissions, inquiries, or any assistance you need. 
            We're committed to providing the best educational experience for your child.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1D2F5F] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Reach out to us through any of these channels. Our team is ready to assist you.
            </p>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                icon: Phone, 
                title: "Phone", 
                info: "+92 (123) 456-7890", 
                secondary: "+92 (987) 654-3210",
                color: "from-blue-600 to-blue-800",
                description: "Call us during office hours"
              },
              { 
                icon: Mail, 
                title: "Email", 
                info: "info@kentschooling.edu",
                secondary: "admissions@kentschooling.edu",
                color: "from-green-600 to-green-800",
                description: "Email for general inquiries"
              },
              {
                icon: MapPin,
                title: "Address",
                info: "123 Education Street",
                secondary: "City, State 12345",
                color: "from-red-600 to-red-800",
                description: "Visit our campus"
              },
              { 
                icon: Clock, 
                title: "Office Hours", 
                info: "Mon-Fri: 8:00 AM - 4:00 PM",
                secondary: "Sat: 9:00 AM - 1:00 PM",
                color: "from-purple-600 to-purple-800",
                description: "Working hours"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-br ${item.color} text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all`}
                whileHover={{ y: -10, scale: 1.02 }}
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                </div>
                <p className="font-semibold text-lg mb-1">{item.info}</p>
                {item.secondary && <p className="text-gray-200 text-sm mb-3">{item.secondary}</p>}
                <p className="text-gray-300 text-sm mt-2">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div 
            variants={itemVariants} 
            className="bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] rounded-2xl p-8 md:p-12 mb-16 text-white"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MessageSquare size={40} className="mx-auto mb-4 text-blue-300" />
                <h4 className="text-xl font-bold mb-2">Quick Response</h4>
                <p className="text-gray-300">We respond to inquiries within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h4 className="text-xl font-bold mb-2">Direct Line</h4>
                <p className="text-gray-300">Speak directly with our admissions team</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="text-xl font-bold mb-2">Campus Visit</h4>
                <p className="text-gray-300">Schedule a tour of our facilities</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Full Width Contact Form */}
        <motion.div variants={itemVariants} className="w-full">
          <Contact />
        </motion.div>
      </motion.div>

      <Footer />
      <ScrollToTop />
    </>
  )
}