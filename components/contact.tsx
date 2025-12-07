"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const GradientButton = styled.button`
  background: linear-gradient(135deg, #1d2f5f 0%, #2c3e50 100%);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(29, 47, 95, 0.3);
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(29, 47, 95, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    padding: 0.65rem 1.5rem;
    font-size: 0.875rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #1d2f5f;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #1d2f5f;
    box-shadow: 0 0 0 3px rgba(29, 47, 95, 0.1);
  }

  &:hover {
    border-color: #1d2f5f;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #1d2f5f;
    box-shadow: 0 0 0 3px rgba(29, 47, 95, 0.1);
  }

  &:hover {
    border-color: #1d2f5f;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #1d2f5f;
    box-shadow: 0 0 0 3px rgba(29, 47, 95, 0.1);
  }

  &:hover {
    border-color: #1d2f5f;
  }
`

const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-weight: 500;
`

const ContactSection = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ContactInfo = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`

const ContactItem = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &:hover {
    transform: translateX(5px);
  }
`

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1d2f5f 0%, #2c3e50 100%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`

const ContactTitle = styled.h4`
  font-weight: 600;
  color: #1d2f5f;
  margin-bottom: 0.25rem;
`

const ContactText = styled.p`
  color: #666;
  font-size: 0.95rem;
`

const FormContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1d2f5f;
  margin-bottom: 2rem;
  font-family: "Playfair Display", serif;
`

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data)
    setSubmitted(true)

    setTimeout(() => {
      reset()
      setSubmitted(false)
    }, 3000)
  }

  const contactItems = [
    {
      icon: MapPin,
      title: "Address",
      value: "Kent Schooling System, Main Road, City Center",
    },
    { icon: Phone, title: "Phone", value: "+92 XXX-XXX-XXXX" },
    { icon: Mail, title: "Email", value: "info@kss.edu.in" },
    { icon: Clock, title: "Hours", value: "Mon - Fri: 8:00 AM - 3:30 PM" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <ContactSection ref={ref} id="contact">
      <ContactContainer>
        <motion.div
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              fontWeight: "700",
              color: "#1d2f5f",
              marginBottom: "1rem",
              fontFamily: "Playfair Display, serif",
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <ContactGrid>
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <ContactInfo>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#1d2f5f",
                    marginBottom: "2rem",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Contact Information
                </h3>

                <div>
                  {contactItems.map((item, i) => {
                    const IconComponent = item.icon
                    return (
                      <motion.div key={i} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                        <ContactItem>
                          <IconWrapper>
                            <IconComponent size={24} />
                          </IconWrapper>
                          <div>
                            <ContactTitle>{item.title}</ContactTitle>
                            <ContactText>{item.value}</ContactText>
                          </div>
                        </ContactItem>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Social Links */}
                <motion.div style={{ marginTop: "2rem" }} whileHover={{ y: -5 }}>
                  <h4 style={{ fontWeight: "700", color: "#1d2f5f", marginBottom: "1rem" }}>Follow Us</h4>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {[
                      { name: "Facebook", url: "#" },
                      { name: "Twitter", url: "#" },
                      { name: "Instagram", url: "#" },
                      { name: "LinkedIn", url: "#" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #1d2f5f 0%, #2c3e50 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        title={social.name}
                      >
                        {social.name.charAt(0)}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </ContactInfo>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <FormContainer>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <SuccessMessage>
                      ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
                    </SuccessMessage>
                  </motion.div>
                )}

                <FormTitle>Send us a Message</FormTitle>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input type="text" id="name" placeholder="Your full name" {...register("name")} />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input type="email" id="email" placeholder="your.email@example.com" {...register("email")} />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input type="tel" id="phone" placeholder="+92 XXX-XXX-XXXX" {...register("phone")} />
                    {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select id="subject" {...register("subject")}>
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="facilities">Facilities Question</option>
                      <option value="academics">Academics Query</option>
                      <option value="sports">Sports Program</option>
                      <option value="events">School Events</option>
                      <option value="other">Other</option>
                    </Select>
                    {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">Message *</Label>
                    <TextArea
                      id="message"
                      placeholder="Please share your message or inquiry..."
                      {...register("message")}
                    />
                    {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                  </FormGroup>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <GradientButton type="submit">Send Message</GradientButton>
                  </motion.div>
                </form>
              </FormContainer>
            </motion.div>
          </ContactGrid>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  )
}
