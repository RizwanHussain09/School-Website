import styled from "styled-components"

const FooterElement = styled.footer`
  background-color: #1d2f5f;
  color: white;
  padding: 2rem 0 1.5rem;

  @media (min-width: 768px) {
    padding: 3rem 0 2rem;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
  }
`

const FooterSection = styled.div``

const SectionTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }
`

const SectionText = styled.p`
  color: #d1d5db;
  font-size: 0.75rem;
  line-height: 1.6;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const LinkItem = styled.li``

const FooterLink = styled.a`
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.75rem;
  transition: color 0.3s ease;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }

  &:hover {
    color: white;
  }
`

const ContactInfo = styled.p`
  color: #d1d5db;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }

  i {
    margin-right: 0.5rem;
    color: #e74c3c;
  }
`

const Divider = styled.div`
  border-top: 1px solid #374151;
  padding-top: 1.5rem;

  @media (min-width: 768px) {
    padding-top: 2rem;
  }
`

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`

const Copyright = styled.p`
  color: #d1d5db;
  font-size: 0.75rem;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 0.875rem;
    text-align: left;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`

const SocialIcon = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.875rem;

  &:hover {
    background-color: #e74c3c;
  }
`

export default function Footer() {
  return (
    <FooterElement>
      <Container>
        <ContentGrid>
          <FooterSection>
            <SectionTitle>About KSS</SectionTitle>
            <SectionText>
              Kent Schooling System is dedicated to providing exceptional education and nurturing future leaders.
            </SectionText>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Quick Links</SectionTitle>
            <LinkList>
              {["Home", "About Us", "Admissions", "Academics", "Campus", "Contact"].map((link) => (
                <LinkItem key={link}>
                  <FooterLink href={`#${link.toLowerCase().replace(/\s+/g, "")}`}>{link}</FooterLink>
                </LinkItem>
              ))}
            </LinkList>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Academics</SectionTitle>
            <LinkList>
              {["Primary Section", "Secondary Section", "Senior Section"].map((item) => (
                <LinkItem key={item}>
                  <FooterLink href="#">{item}</FooterLink>
                </LinkItem>
              ))}
            </LinkList>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Contact</SectionTitle>
            <ContactInfo>
              <i className="fas fa-map-marker-alt"></i>Main Road, City Center
            </ContactInfo>
            <ContactInfo>
              <i className="fas fa-phone"></i>+91 XXX-XXX-XXXX
            </ContactInfo>
            <ContactInfo>
              <i className="fas fa-envelope"></i>info@kss.edu.in
            </ContactInfo>
          </FooterSection>
        </ContentGrid>

        <Divider>
          <BottomContent>
            <Copyright>© 2025 Kent Schooling System. All rights reserved. A Project of A & I Group.</Copyright>
            <SocialLinks>
              {["facebook-f", "twitter", "instagram", "youtube"].map((social) => (
                <SocialIcon key={social} href="#" title={`Visit our ${social}`}>
                  <i className={`fab fa-${social}`}></i>
                </SocialIcon>
              ))}
            </SocialLinks>
          </BottomContent>
        </Divider>
      </Container>
    </FooterElement>
  )
}
