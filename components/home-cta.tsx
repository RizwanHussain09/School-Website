"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const CTASection = styled.section`
  position: relative;
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 768px) {
    min-height: 450px;
  }

  @media (max-width: 480px) {
    min-height: 400px;
  }
`

const ImageSlider = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
`

const SlideImage = styled.div<{ $isActive: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${props => props.$isActive ? 1 : 0};
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(${props => props.$isActive ? 1.05 : 1});
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`

const CTAGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(29, 47, 95, 0.92) 0%,
    rgba(44, 62, 80, 0.85) 50%,
    rgba(25, 42, 86, 0.95) 100%
  );
  z-index: 2;
  mix-blend-mode: multiply;
`

const Particle = styled(motion.div)<{ $size: number; $left: string; $delay: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  left: ${props => props.$left};
  z-index: 1;
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.05);
`

const CTAContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (min-width: 640px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 2rem;
  }
`

const CTATitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.4);
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 640px) {
    font-size: 3.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.25rem;
  }
`

const CTAText = styled(motion.p)`
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  @media (min-width: 640px) {
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
`

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  font-weight: 600;
  padding: 1.25rem 3rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 20px 40px rgba(231, 76, 60, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(231, 76, 60, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  @media (max-width: 640px) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    border-radius: 10px;
  }
`

const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`

const StatItem = styled.div`
  text-align: center;
  
  span {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 0.875rem;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`

const ctaImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
]

export default function HomeCTA() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % ctaImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 1,
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as const

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut" as const,
      },
    },
  } as const

  // Fixed: Convert readonly arrays to mutable arrays for Framer Motion
  const particleAnimation = {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }

  return (
    <CTASection>
      <ImageSlider>
        {ctaImages.map((image, index) => (
          <SlideImage key={index} $isActive={index === currentImage}>
            <Image
              src={image}
              alt={`CTA Background ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              sizes="100vw"
            />
          </SlideImage>
        ))}
      </ImageSlider>

      <CTAGradientOverlay />

      {/* Animated Particles */}
      <Particle
        $size={120}
        $left="15%"
        $delay={0}
        animate={particleAnimation}
        style={{ top: "20%" }}
      />
      <Particle
        $size={80}
        $left="80%"
        $delay={2}
        animate={particleAnimation}
        style={{ top: "60%" }}
      />
      <Particle
        $size={150}
        $left="70%"
        $delay={1}
        animate={particleAnimation}
        style={{ top: "20%" }}
      />
      <Particle
        $size={100}
        $left="10%"
        $delay={3}
        animate={particleAnimation}
        style={{ top: "70%" }}
      />

    <CTAContent
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
>
  <CTATitle variants={itemVariants}>
    Your Journey to Excellence Begins Here
  </CTATitle>
  
  <CTAText variants={itemVariants}>
    Join a community of learners, innovators, and future leaders. At Kent Schooling System, 
    we provide an educational experience that goes beyond textbooks to shape character, 
    cultivate curiosity, and prepare students for success in a rapidly evolving world.
  </CTAText>
  
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{ display: 'inline-block' }}
  >
    <CTAButton as={Link} href="/admissions">
      Begin Your Application
    </CTAButton>
  </motion.div>

  <StatsContainer variants={itemVariants}>
    <StatItem>
      <motion.span variants={statVariants}>98%</motion.span>
      <p>Graduation Rate</p>
    </StatItem>
    <StatItem>
      <motion.span variants={statVariants}>50+</motion.span>
      <p>Extracurricular Activities</p>
    </StatItem>
    <StatItem>
      <motion.span variants={statVariants}>1:12</motion.span>
      <p>Teacher-Student Ratio</p>
    </StatItem>
    <StatItem>
      <motion.span variants={statVariants}>25+</motion.span>
      <p>Years of Excellence</p>
    </StatItem>
  </StatsContainer>
</CTAContent>
    </CTASection>
  )
}