"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Academics() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const subjects = [
    {
      category: "Science Stream",
      icon: "🔬",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      description: "Advanced laboratory facilities and research-based learning",
      image:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Mathematics & Technology",
      icon: "🔢",
      subjects: ["Mathematics", "Computer Science", "Coding", "Data Analysis"],
      description: "Problem-solving and computational thinking development",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "Languages",
      icon: "📚",
      subjects: ["English", "Hindi", "Sanskrit", "French/German"],
      description: "Communication skills and cultural understanding",
      image:
        "https://images.unsplash.com/photo-1507842072343-583f20270319?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-amber-500 to-amber-600",
    },
    {
      category: "Humanities & Social Science",
      icon: "🌍",
      subjects: ["History", "Geography", "Civics", "Economics"],
      description: "Critical thinking about society and global perspectives",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-green-500 to-green-600",
    },
    {
      category: "Arts & Creativity",
      icon: "🎨",
      subjects: ["Visual Arts", "Music", "Dance", "Theater"],
      description: "Expression and creative development programs",
      image:
        "https://images.unsplash.com/photo-1513364776144-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-pink-500 to-pink-600",
    },
    {
      category: "Physical Education",
      icon: "⚽",
      subjects: ["Sports", "Fitness", "Health", "Wellness"],
      description: "Holistic development and athletic excellence",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-red-500 to-red-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} id="academics" className="py-12 md:py-20 bg-white">
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
            Our Academics
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto px-2">
            Comprehensive curriculum designed for holistic development and academic excellence
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {subjects.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                className="feature-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full"
                whileHover={{
                  y: -15,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-full h-40 sm:h-48 overflow-hidden bg-gray-200 relative">
                  <motion.img
                    src={item.image || "/placeholder.svg"}
                    alt={item.category}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-blue-50">
                  <motion.div
                    className="text-3xl sm:text-4xl mb-3"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-[#1D2F5F] mb-2 sm:mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {item.category}
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm mb-3 sm:mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-[#1D2F5F] uppercase tracking-wide">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.subjects.map((subject, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block bg-gradient-to-r from-[#1D2F5F] to-[#E74C3C] text-white text-xs px-2 sm:px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {subject}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-[#1D2F5F] to-[#2C3E50] text-white p-6 sm:p-8 md:p-12 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "📊",
                title: "Expert Faculty",
                desc: "Qualified educators with advanced degrees and real-world experience",
              },
              {
                icon: "🏆",
                title: "Outstanding Results",
                desc: "Consistent top ranks in board examinations and competitive tests",
              },
              { icon: "🎯", title: "Career Guidance", desc: "Personalized counseling for college and career planning" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-blue-100 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
