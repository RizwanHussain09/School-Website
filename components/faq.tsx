"use client"

import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const FAQSection = styled.section`
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
  max-width: 900px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const FAQItem = styled(motion.div)`
  background: white;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 640px) {
    margin-bottom: 1.25rem;
  }
`

const Question = styled.button`
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: white;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1d2f5f;
  text-align: left;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f4f8;
  }

  @media (min-width: 640px) {
    padding: 1.5rem 2rem;
    font-size: 1rem;
  }
`

const ChevronIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const Answer = styled(motion.div)`
  padding: 0 1.5rem;
  background: #f8f9fa;
  overflow: hidden;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
`

const AnswerText = styled.p`
  color: #2c3e50;
  font-size: 0.9rem;
  line-height: 1.6;
  padding: 1rem 0;

  @media (min-width: 640px) {
    font-size: 0.95rem;
  }
`

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqData = [
    {
      question: "What is the admission process at Kent Schooling System?",
      answer:
        "Our admission process includes submission of application form, school entrance test, personal interview, and document verification. The entire process typically takes 2-3 weeks. Please visit our Admissions page for detailed information.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Fees vary based on class level and grade. We offer scholarships for merit and financial hardship cases. Please contact our admissions office for a detailed fee breakdown.",
    },
    {
      question: "Do you provide transportation?",
      answer:
        "Yes, we provide safe and reliable bus transportation across multiple routes covering the entire city. Additional charges apply for transportation services.",
    },
    {
      question: "What is your teaching methodology?",
      answer:
        "We follow a balanced approach combining traditional teaching with modern pedagogical methods. We emphasize conceptual understanding, critical thinking, and practical application of knowledge.",
    },
    {
      question: "What are the extracurricular activities available?",
      answer:
        "We offer a wide range of activities including sports, music, art, drama, debate, and various clubs. Participation in extracurricular activities is encouraged for holistic development.",
    },
    {
      question: "What are the working hours for the school?",
      answer:
        "School hours are 8:00 AM to 3:00 PM for primary classes and 8:00 AM to 3:30 PM for secondary classes. Pickup timings may vary based on transport routes.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <FAQSection>
      <Container>
        <Header>
          <Title>Frequently Asked Questions</Title>
          <Subtitle>Find answers to common questions about our school</Subtitle>
        </Header>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {faqData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FAQItem>
                <Question onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                  <span>{item.question}</span>
                  <ChevronIcon animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={20} color="#1d2f5f" />
                  </ChevronIcon>
                </Question>

                <AnimatePresence>
                  {openIndex === index && (
                    <Answer
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AnswerText>{item.answer}</AnswerText>
                    </Answer>
                  )}
                </AnimatePresence>
              </FAQItem>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </FAQSection>
  )
}
