import styled from "styled-components"

export const PrimaryColor = "#1D2F5F"
export const AccentColor = "#E74C3C"
export const SecondaryColor = "#2c3e50"
export const LightBg = "#f8f9fa"
export const DarkBg = "#1a1a1a"
export const SuccessColor = "#27ae60"
export const WarningColor = "#f39c12"

// Container Styles
export const Container = styled.div`
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

export const Section = styled.section`
  padding: 3rem 0;
  
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${PrimaryColor};
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  text-align: center;
  
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
  
  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: ${SecondaryColor};
  text-align: center;
  max-width: 42rem;
  margin: 0 auto;
  
  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

export const Grid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => props.columns || 2}, 1fr);
    gap: 3rem;
  }
`

// Card Styles
export const Card = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 640px) {
    padding: 2rem;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`

export const FeatureCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`

// Form Styles
export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  @media (min-width: 640px) {
    margin-bottom: 2rem;
  }
`

export const Label = styled.label`
  display: block;
  color: ${PrimaryColor};
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
  
  &:focus {
    outline: none;
    border-color: ${PrimaryColor};
    box-shadow: 0 0 0 3px rgba(29, 47, 95, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
  
  &:focus {
    outline: none;
    border-color: ${PrimaryColor};
    box-shadow: 0 0 0 3px rgba(29, 47, 95, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
  
  &:focus {
    outline: none;
    border-color: ${PrimaryColor};
    box-shadow: 0 0 0 3px rgba(29, 47, 95, 0.1);
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: ${AccentColor};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  
  @media (min-width: 640px) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
  
  &:hover {
    background-color: #d63a2a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${PrimaryColor};
  
  &:hover {
    background-color: #152547;
  }
`

// Contact Section Specific
export const ContactContainer = styled(Container)`
  max-width: 1200px;
`

export const ContactGrid = styled(Grid)`
  grid-template-columns: 1fr;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 640px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`

export const ContactIcon = styled.i`
  color: ${AccentColor};
  font-size: 1.5rem;
  flex-shrink: 0;
  
  @media (min-width: 640px) {
    font-size: 1.75rem;
  }
`

export const ContactTitle = styled.h4`
  font-weight: bold;
  color: ${PrimaryColor};
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

export const ContactText = styled.p`
  color: ${SecondaryColor};
  font-size: 0.875rem;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${LightBg};
  color: ${PrimaryColor};
  border-radius: 50%;
  transition: all 0.3s ease;
  font-size: 1.125rem;
  text-decoration: none;
  
  @media (min-width: 640px) {
    width: 2.75rem;
    height: 2.75rem;
    font-size: 1.25rem;
  }
  
  &:hover {
    background-color: ${AccentColor};
    color: white;
    transform: translateY(-3px);
  }
`

export const FormContainer = styled(Card)`
  background-color: ${LightBg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`

export const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: ${SuccessColor};
  color: white;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const ErrorMessage = styled.div`
  padding: 0.75rem 1rem;
  background-color: #fee2e2;
  color: #991b1b;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

// Image Styles
export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
`

export const GalleryImage = styled(Image)`
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`
