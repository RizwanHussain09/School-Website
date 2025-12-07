"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const TestimonialsSection = styled.section`
  padding: 3rem 1rem;
  background: #f8f9fa;

  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

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
`

const Subtitle = styled.p`
  color: #2c3e50;
  font-size: 0.95rem;

  @media (min-width: 640px) {
    font-size: 1.05rem;
  }
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  @media (min-width: 640px) {
    padding: 2rem;
  }

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }
`

const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

const TestimonialText = styled.p`
  color: #2c3e50;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-style: italic;
`

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const AuthorAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #1d2f5f 0%, #0f1a3f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
`

const AuthorDetails = styled.div``

const AuthorName = styled.p`
  font-weight: bold;
  color: #1d2f5f;
  font-size: 0.95rem;
`

const AuthorRole = styled.p`
  color: #7f8c8d;
  font-size: 0.8rem;
`

export default function HomeTestimonials() {
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

  const testimonials = [
    {
      text: "The academic excellence and personal attention from teachers has transformed my child. Highly recommended!",
      author: "Ahmad Hassan",
      role: "Parent of Grade 5 Student",
      initials: "AH",
      rating: 5,
    },
    {
      text: "Outstanding facilities and a supportive environment. My daughter has grown tremendously here.",
      author: "Fatima Al-Rashid",
      role: "Parent of Grade 8 Student",
      initials: "FR",
      rating: 5,
    },
    {
      text: "The best decision we made for our child's education. The holistic approach is truly impressive.",
      author: "Mohammed Karim",
      role: "Parent of Grade 10 Student",
      initials: "MK",
      rating: 5,
    },
  ]

  return (
    <TestimonialsSection>
      <Container>
        <Header>
          <Title>Parents Love Us</Title>
          <Subtitle>Hear from our school community</Subtitle>
        </Header>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <TestimonialsGrid>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} variants={itemVariants}>
                <StarRating>
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="#fbbf24" stroke="#fbbf24" />
                  ))}
                </StarRating>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <AuthorInfo>
                  <AuthorAvatar>{testimonial.initials}</AuthorAvatar>
                  <AuthorDetails>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorDetails>
                </AuthorInfo>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </motion.div>
      </Container>
    </TestimonialsSection>
  )
}
