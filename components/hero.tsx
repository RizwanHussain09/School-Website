"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 768px) {
    min-height: 90vh;
  }

  @media (max-width: 480px) {
    min-height: 85vh;
  }
`

const BackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
`

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3); /* Dark overlay for better text readability */
    z-index: 1;
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: transparent;
`

const FloatingShape = styled(motion.div)<{ $size: number; $color: string; $delay: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: ${props => props.$size * 0.3}px;
  filter: blur(${props => props.$size * 0.1}px);
  opacity: 0.15;
  z-index: 1;
  animation: floatShape 20s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;

  @keyframes floatShape {
    0%, 100% { 
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
    25% { 
      transform: translate(30px, -40px) rotate(90deg) scale(1.1);
    }
    50% { 
      transform: translate(-20px, -60px) rotate(180deg) scale(0.9);
    }
    75% { 
      transform: translate(40px, -20px) rotate(270deg) scale(1.05);
    }
  }
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 
    2px 4px 12px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(59, 130, 246, 0.3);
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.5px;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 640px) {
    font-size: 3.5rem;
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 5.5rem;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.375rem;
  margin-bottom: 2rem;
  font-weight: 300;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.95;

  @media (min-width: 640px) {
    font-size: 1.625rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`

const HeroDescription = styled(motion.p)`
  font-size: 1.125rem;
  margin-bottom: 3rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  font-weight: 300;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 4rem;
  }
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  font-weight: 600;
  padding: 1.25rem 3rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 20px 40px rgba(231, 76, 60, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  font-size: 1.125rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
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
      rgba(255, 255, 255, 0.3),
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

  svg {
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    padding: 1.125rem 2.5rem;
    font-size: 1rem;
    border-radius: 10px;
  }
`

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 
      0 20px 40px rgba(255, 255, 255, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  &::after {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 0.875rem;
    opacity: 0.7;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 768px) {
    bottom: 2rem;
    
    span {
      font-size: 0.75rem;
    }
  }
`

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 1,
      },
    },
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      rotateX: 45,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: "easeOut"as const, // Changed from number array to string
      },
    },
  }

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.4,
        duration: 1,
        ease: "easeOut" as const, // Added 'as const'
      },
    },
  }

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut" as const, // Added 'as const'
      },
    },
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: "easeOut" as const, // Added 'as const'
      },
    },
  }

  const scrollAnimation = {
    y: [0, 12, 0],
    transition: {
      duration: 2.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const, // Added 'as const'
    },
  }

  return (
    <HeroSection id="home">
      <BackgroundContainer>
        <BackgroundImage>
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern School Campus"
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="100vw"
            quality={100}
          />
        </BackgroundImage>
      </BackgroundContainer>
      
      <Overlay />

      {/* Animated Floating Shapes */}
      <FloatingShape 
        $size={200} 
        $color="rgba(59, 130, 246, 0.3)" 
        $delay={0}
        style={{ top: "20%", left: "10%" }}
      />
      <FloatingShape 
        $size={150} 
        $color="rgba(236, 72, 153, 0.2)" 
        $delay={2}
        style={{ top: "60%", right: "15%" }}
      />
      <FloatingShape 
        $size={180} 
        $color="rgba(139, 92, 246, 0.25)" 
        $delay={4}
        style={{ bottom: "20%", left: "20%" }}
      />
      <FloatingShape 
        $size={120} 
        $color="rgba(14, 165, 233, 0.2)" 
        $delay={6}
        style={{ top: "40%", right: "25%" }}
      />

      <HeroContent 
        initial="hidden" 
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <HeroTitle variants={titleVariants}>
          Kent Schooling System
        </HeroTitle>
        
        <HeroSubtitle variants={subtitleVariants}>
          Where Curiosity Meets Excellence
        </HeroSubtitle>
        
        <HeroDescription variants={descriptionVariants}>
          A premier educational institution dedicated to nurturing young minds through 
          innovative teaching, state-of-the-art facilities, and a holistic approach 
          that develops both intellect and character for a rapidly evolving world.
        </HeroDescription>
        
        <ButtonGroup variants={buttonVariants}>
          {/* Wrap each button with motion.div for animations */}
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block' }}
          >
            <PrimaryButton 
              as={Link}
              href="/admissions"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
              Start Your Journey
            </PrimaryButton>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block' }}
          >
            <SecondaryButton 
              as={Link}
              href="/contact"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              Schedule a Tour
            </SecondaryButton>
          </motion.div>
        </ButtonGroup>
      </HeroContent>

      <ScrollIndicator animate={scrollAnimation}>
        <span>Explore More</span>
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </ScrollIndicator>
    </HeroSection>
  )
}