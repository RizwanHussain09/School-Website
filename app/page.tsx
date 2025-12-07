"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedPrograms from "@/components/featured-programs"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ProgressBar from "@/components/progress-bar"
import HomeCTA from "@/components/home-cta"
import HomeTestimonials from "@/components/home-testimonials"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Header />
      <Hero />
      <FeaturedPrograms />
      <HomeCTA />
      <FAQ />
      <HomeTestimonials />
      <Footer />
      <ScrollToTop />
    </>
  )
}
