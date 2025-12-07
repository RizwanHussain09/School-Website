"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProgressBar from "@/components/progress-bar"
import ScrollToTop from "@/components/scroll-to-top"

const admissionSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters"),
  parentEmail: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  grade: z.string().min(1, "Please select a grade"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type AdmissionFormData = z.infer<typeof admissionSchema>

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  })

  const onSubmit = (data: AdmissionFormData) => {
    console.log(data)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
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
            backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
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
            Admissions
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-6 font-light">
            Welcome to Kent Schooling System
          </p>
          
          {/* Additional descriptive text */}
          <motion.p 
            className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Begin your journey towards academic excellence with our comprehensive learning environment. 
            We nurture young minds to become future leaders through innovative education and holistic development.
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
        {/* Admission Process */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-4xl font-bold text-[#1D2F5F] mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Admission Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Application", desc: "Fill out online application form" },
              { num: "2", title: "Assessment", desc: "Complete entrance examination" },
              { num: "3", title: "Interview", desc: "Meet with admissions team" },
              { num: "4", title: "Enrollment", desc: "Complete registration process" },
            ].map((step, i) => (
              <motion.div key={i} className="relative" whileHover={{ y: -10 }}>
                <div className="bg-gradient-to-br from-[#1D2F5F] to-[#2c3e50] text-white p-6 rounded-lg text-center shadow-lg">
                  <div className="text-4xl font-bold mb-3">{step.num}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-100">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements & Fees */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-[#1D2F5F] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Admission Requirements
            </h3>
            <ul className="space-y-3">
              {[
                "Birth certificate and valid ID",
                "Previous academic records",
                "Medical examination report",
                "Character certificate",
                "Passport-sized photographs (4)",
                "Parent/Guardian identification",
              ].map((req, i) => (
                <motion.li
                  key={i}
                  className="flex items-center space-x-3 text-gray-700"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-[#E74C3C] text-xl">✓</span>
                  <span>{req}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#1D2F5F] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Fee Structure
            </h3>
            <div className="space-y-4">
              {[
                { grade: "Primary (I-V)", fee: "Rs. 50,000/year" },
                { grade: "Secondary (VI-VIII)", fee: "Rs. 65,000/year" },
                { grade: "Senior Secondary (IX-X)", fee: "Rs. 80,000/year" },
                { grade: "Higher Secondary (XI-XII)", fee: "Rs. 95,000/year" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold text-gray-700">{item.grade}</span>
                  <span className="text-[#E74C3C] font-bold">{item.fee}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Admission Form */}
        <motion.div variants={itemVariants} className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
          <h2
            className="text-4xl font-bold text-[#1D2F5F] mb-8 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Apply Now
          </h2>

          {submitted && (
            <motion.div
              className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Thank you for your application! We will contact you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Student Name</label>
                <input
                  {...register("studentName")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2F5F]"
                  placeholder="Enter student name"
                />
                {errors.studentName && <span className="text-red-600 text-sm">{errors.studentName.message}</span>}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Parent Email</label>
                <input
                  {...register("parentEmail")}
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2F5F]"
                  placeholder="Enter email"
                />
                {errors.parentEmail && <span className="text-red-600 text-sm">{errors.parentEmail.message}</span>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  {...register("phone")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2F5F]"
                  placeholder="Enter phone number"
                />
                {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Grade</label>
                <select
                  {...register("grade")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2F5F]"
                >
                  <option value="">Choose a grade</option>
                  <option value="primary">Primary (I-V)</option>
                  <option value="secondary">Secondary (VI-VIII)</option>
                  <option value="senior">Senior Secondary (IX-X)</option>
                  <option value="higher">Higher Secondary (XI-XII)</option>
                </select>
                {errors.grade && <span className="text-red-600 text-sm">{errors.grade.message}</span>}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2F5F]"
                placeholder="Tell us about your child..."
              />
              {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      <Footer />
      <ScrollToTop />
    </>
  )
}