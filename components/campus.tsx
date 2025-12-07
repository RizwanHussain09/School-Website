"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Campus() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const facilities = [
    {
      facility: "Modern Classrooms",
      description:
        "Smart classrooms with interactive smart boards, audio-visual systems, and modern learning infrastructure",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🏫",
    },
    {
      facility: "Science Laboratories",
      description: "Well-equipped labs for Physics, Chemistry, and Biology with modern equipment and safety standards",
      image:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🧪",
    },
    {
      facility: "Computer Labs",
      description: "Latest computers and servers with high-speed internet for coding and digital literacy programs",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "💻",
    },
    {
      facility: "Digital Library",
      description: "Extensive collection of books, journals, e-books, and digital resources for student research",
      image:
        "https://images.unsplash.com/photo-1507842072343-583f20270319?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "📖",
    },
    {
      facility: "Sports Complex",
      description: "Basketball court, volleyball court, cricket ground, and outdoor sports facilities",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "⚽",
    },
    {
      facility: "Auditorium & Events",
      description: "State-of-the-art auditorium for assemblies, seminars, cultural programs, and special events",
      image:
        "https://images.unsplash.com/photo-1519420573924-65d60295592f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🎭",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} id="campus" className="py-12 md:py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D2F5F] mb-3 md:mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Campus
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto px-2">
            State-of-the-art facilities for optimal learning and development
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {facilities.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                className="feature-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full"
                whileHover={{
                  y: -12,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-full h-40 sm:h-48 overflow-hidden bg-gray-200 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.facility}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-[#1D2F5F]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-4xl">{item.icon}</span>
                  </motion.div>
                </motion.div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1D2F5F] mb-2 sm:mb-3">{item.facility}</h3>
                  <p className="text-secondary leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
