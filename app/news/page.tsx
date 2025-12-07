"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProgressBar from "@/components/progress-bar"
import ScrollToTop from "@/components/scroll-to-top"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const newsItems = [
    {
      date: "2024-12-18",
      title: "Kent School Students Win National Robotics Competition",
      excerpt: "Our talented robotics team secured first place in the National STEM Robotics Challenge 2024 with their innovative autonomous vehicle project.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop",
      category: "Achievements",
      readTime: "3 min read"
    },
    {
      date: "2024-12-12",
      title: "Annual Science Exhibition Draws Record Attendance",
      excerpt: "The 15th Annual Science Exhibition showcased over 200 innovative projects by students, attracting visitors from across the region.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop",
      category: "Events",
      readTime: "4 min read"
    },
    {
      date: "2024-12-05",
      title: "Inter-School Debate Championship Victory",
      excerpt: "Kent School debate team emerged victorious in the State Level Inter-School Debate Competition, showcasing exceptional oratory skills.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
      category: "Competitions",
      readTime: "2 min read"
    },
  ]

  const upcomingEvents = [
    { 
      date: "2024-12-25", 
      title: "Christmas Celebration & Charity Drive", 
      location: "Main Auditorium",
      description: "Festive celebrations followed by charity donation drive for local communities."
    },
    { 
      date: "2025-01-10", 
      title: "Annual Sports Day 2025", 
      location: "School Sports Complex",
      description: "Day-long sports extravaganza featuring various athletic events and competitions."
    },
    { 
      date: "2025-01-26", 
      title: "Republic Day Celebration", 
      location: "School Grounds",
      description: "Flag hoisting ceremony followed by cultural performances and patriotic programs."
    },
    { 
      date: "2025-02-15", 
      title: "Career Guidance Seminar 2025", 
      location: "Conference Hall",
      description: "Interactive session with industry experts and alumni for senior students."
    },
  ]

  const featuredNews = [
    {
      title: "New Computer Lab Inaugurated",
      description: "State-of-the-art computer lab with latest technology for digital literacy",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=cro",
      date: "2024-12-01"
    },
    {
      title: "Environmental Awareness Program",
      description: "Students participate in tree plantation drive and sustainability workshop",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      date: "2024-11-28"
    },
    {
      title: "Art Exhibition Success",
      description: "Annual art exhibition showcases creative talents of students",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      date: "2024-11-20"
    }
  ]

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
            backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&h=900&fit=crop')"
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
            News & Events
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-6 font-light">
            Stay Connected with Kent School Happenings
          </p>
          
          {/* Additional descriptive text */}
          <motion.p 
            className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Latest achievements, upcoming events, and important announcements from our vibrant school community.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Latest News */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold text-[#1D2F5F]" style={{ fontFamily: "Playfair Display, serif" }}>
              Latest News
            </h2>
            <motion.button 
              className="text-[#1D2F5F] font-semibold hover:text-[#E74C3C] transition flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              View All News <ArrowRight size={18} />
            </motion.button>
          </div>
          
          <div className="space-y-8">
            {newsItems.map((item, i) => (
              <motion.div
                key={i}
                className="grid md:grid-cols-3 gap-8 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                whileHover={{ y: -8 }}
                variants={itemVariants}
              >
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-[#E74C3C] to-[#ff6b6b] text-white text-sm rounded-full font-bold shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm">{new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {item.readTime}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-[#1D2F5F] mb-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.excerpt}</p>
                  </div>
                  <motion.button
                    className="mt-6 text-[#1D2F5F] font-bold hover:text-[#E74C3C] transition flex items-center gap-2 group"
                    whileHover={{ x: 10 }}
                  >
                    Read Full Story
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured News Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-4xl font-bold text-[#1D2F5F] mb-10" style={{ fontFamily: "Playfair Display, serif" }}>
            Featured Updates
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredNews.map((news, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition group"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                  <h4 className="text-xl font-bold text-[#1D2F5F] mb-2">{news.title}</h4>
                  <p className="text-gray-600 text-sm">{news.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold text-[#1D2F5F]" style={{ fontFamily: "Playfair Display, serif" }}>
              Upcoming Events
            </h2>
            <motion.button 
              className="text-[#1D2F5F] font-semibold hover:text-[#E74C3C] transition flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Calendar View <ArrowRight size={18} />
            </motion.button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#1D2F5F] to-[#2c3e50] text-white p-6 rounded-xl shadow-lg relative overflow-hidden group"
                whileHover={{ y: -10, scale: 1.02 }}
                variants={itemVariants}
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-300 font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{event.description}</p>
                  
                  <motion.button 
                    className="text-sm font-semibold text-white hover:text-[#E74C3C] transition flex items-center gap-2 group/btn"
                    whileHover={{ x: 5 }}
                  >
                    More Details
                    <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div 
          variants={itemVariants} 
          className="mt-20 bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, event announcements, and important updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E74C3C]"
            />
            <motion.button
              className="px-6 py-3 bg-[#E74C3C] text-white font-bold rounded-lg hover:bg-[#c0392b] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <Footer />
      <ScrollToTop />
    </>
  )
}