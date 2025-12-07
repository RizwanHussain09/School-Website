"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { BookOpen, Users, Trophy, Lightbulb } from "lucide-react"

const FeaturedSection = styled.section`
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 3rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 2rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: #1d2f5f;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #2c3e50;

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

const ProgramCard = styled(motion.div)`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }

  @media (max-width: 640px) {
    border-radius: 0.5rem;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f0f0f0;

  @media (min-width: 640px) {
    height: 220px;
  }

  @media (min-width: 768px) {
    height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }
`

const CardContent = styled.div`
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 1.75rem;
  }
`

const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: #f0f4ff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  svg {
    color: #1d2f5f;
    width: 1.5rem;
    height: 1.5rem;

    @media (min-width: 640px) {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  color: #1d2f5f;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;

  @media (min-width: 640px) {
    font-size: 1.375rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const CardDescription = styled.p`
  color: #2c3e50;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;

  @media (min-width: 640px) {
    font-size: 0.95rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

const LearnMoreBtn = styled(motion.a)`
  color: #1d2f5f;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #e74c3c;
    transform: translateX(4px);
  }

  @media (min-width: 640px) {
    font-size: 0.95rem;
  }
`

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`

const HighlightCard = styled(motion.div)`
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #f8f9fa;

  @media (min-width: 640px) {
    padding: 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`

const HighlightNumber = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1d2f5f;
  font-family: 'Playfair Display', serif;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

const HighlightText = styled.p`
  color: #2c3e50;
  font-size: 0.75rem;
  margin-top: 0.25rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
`

export default function FeaturedPrograms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const programs = [
    {
      icon: BookOpen,
      title: "Quality Academics",
      description:
        "Comprehensive curriculum with modern teaching methods and personalized learning approaches for all students.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/academics",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Experienced educators dedicated to student growth with regular professional development and mentoring.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
      link: "/academics",
    },
    {
      icon: Trophy,
      title: "Holistic Development",
      description:
        "Sports, arts, and extracurricular activities to nurture well-rounded individuals with diverse talents.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/gallery",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "State-of-the-art facilities including science labs, computer labs, and innovation centers for hands-on learning.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/academics",
    },
  ]

  return (
    <FeaturedSection>
      <Container>
        <Header>
          <Title>Why Choose Kent Schooling System?</Title>
          <Subtitle>Discover our featured programs and school highlights</Subtitle>
        </Header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProgramsGrid>
            {programs.map((program, i) => (
              <ProgramCard key={i} variants={itemVariants}>
                <ImageWrapper>
                  <img src={program.image || "/placeholder.svg"} alt={program.title} loading="lazy" />
                </ImageWrapper>
                <CardContent>
                  <CardIcon>
                    <program.icon />
                  </CardIcon>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                  <LearnMoreBtn href={program.link} whileHover={{ x: 5 }}>
                    Learn More <span>→</span>
                  </LearnMoreBtn>
                </CardContent>
              </ProgramCard>
            ))}
          </ProgramsGrid>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HighlightsGrid>
            {[
              { number: "500+", text: "Students Enrolled" },
              { number: "50+", text: "Experienced Faculty" },
              { number: "25+", text: "Years of Excellence" },
              { number: "95%", text: "Success Rate" },
            ].map((item, i) => (
              <HighlightCard key={i} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <HighlightNumber>{item.number}</HighlightNumber>
                <HighlightText>{item.text}</HighlightText>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </motion.div>
      </Container>
    </FeaturedSection>
  )
}