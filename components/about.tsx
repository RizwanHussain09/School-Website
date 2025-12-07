import styled from "styled-components"
import { Award, Users, Laptop, Heart } from "lucide-react"

const AboutSection = styled.section`
  padding: 3rem 0;
  background-color: white;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1d2f5f;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1rem;
  color: #2c3e50;
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const ContentWrapper = styled.div`
  order: 2;

  @media (min-width: 1024px) {
    order: 1;
  }
`

const ImageContainer = styled.div`
  order: 1;

  @media (min-width: 1024px) {
    order: 2;
  }
`

const ContentTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1d2f5f;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;

  @media (min-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: 2rem;
  }
`

const ContentText = styled.p`
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    gap: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    gap: 1rem;
  }
`

const FeatureCard = styled.div`
  background-color: #f8f9fa;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.3s ease;

  @media (min-width: 640px) {
    padding: 1rem 1.5rem;
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  svg {
    color: #e74c3c;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto 0.5rem;

    @media (min-width: 640px) {
      width: 2rem;
      height: 2rem;
    }
  }
`

const FeatureTitle = styled.h4`
  font-weight: bold;
  color: #1d2f5f;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

const FeatureDesc = styled.p`
  color: #2c3e50;
  font-size: 0.75rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`

export default function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Header>
          <Title>About Us</Title>
          <Subtitle>Discover our mission, vision, and the values that drive our excellence in education</Subtitle>
        </Header>

        <GridContainer>
          <ImageContainer>
            <ImageWrapper>
              <img
                src="https://images.unsplash.com/photo-1427504494785-cddc4b5be7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Students learning in classroom"
                loading="lazy"
              />
            </ImageWrapper>
          </ImageContainer>

          <ContentWrapper>
            <ContentTitle>Excellence in Education</ContentTitle>
            <ContentText>
              Kent Schooling System is committed to providing world-class education that develops the complete
              personality of our students. With state-of-the-art facilities and dedicated faculty, we ensure every
              student achieves their full potential.
            </ContentText>

            <FeatureGrid>
              {[
                { icon: Award, title: "Excellence", desc: "Award-winning programs" },
                { icon: Users, title: "Community", desc: "Strong support system" },
                { icon: Laptop, title: "Technology", desc: "Modern learning tools" },
                { icon: Heart, title: "Values", desc: "Character development" },
              ].map((item, i) => (
                <FeatureCard key={i}>
                  <item.icon />
                  <FeatureTitle>{item.title}</FeatureTitle>
                  <FeatureDesc>{item.desc}</FeatureDesc>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </ContentWrapper>
        </GridContainer>
      </Container>
    </AboutSection>
  )
}
