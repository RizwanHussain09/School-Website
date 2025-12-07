import styled from "styled-components"

const NewsSection = styled.section`
  padding: 3rem 0;
  background-color: #f8f9fa;

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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`

const NewsCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`

const DateBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e74c3c;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  i {
    font-size: 0.875rem;

    @media (min-width: 640px) {
      font-size: 1rem;
    }
  }
`

const NewsTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #1d2f5f;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 0.75rem;
  }
`

const NewsExcerpt = styled.p`
  color: #2c3e50;
  margin-bottom: 0.75rem;
  line-height: 1.5;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

const ReadMoreLink = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  &:hover {
    color: #1d2f5f;
    transform: translateX(3px);
  }
`

export default function News() {
  return (
    <NewsSection id="news">
      <Container>
        <Header>
          <Title>Latest News & Events</Title>
          <Subtitle>Stay updated with our recent activities and announcements</Subtitle>
        </Header>

        <NewsGrid>
          {[
            {
              title: "Annual Sports Day",
              date: "December 15, 2024",
              excerpt:
                "Join us for our annual sports day celebration featuring various athletic competitions and performances.",
            },
            {
              title: "Science Exhibition",
              date: "December 10, 2024",
              excerpt: "Students showcase their innovative science projects and experiments in our annual exhibition.",
            },
            {
              title: "Parent Teacher Meet",
              date: "December 20, 2024",
              excerpt: "Monthly interaction between parents and teachers to discuss student progress and development.",
            },
          ].map((news, i) => (
            <NewsCard key={i}>
              <DateBadge>
                <i className="fas fa-calendar-alt"></i>
                {news.date}
              </DateBadge>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsExcerpt>{news.excerpt}</NewsExcerpt>
              <ReadMoreLink>Read More →</ReadMoreLink>
            </NewsCard>
          ))}
        </NewsGrid>
      </Container>
    </NewsSection>
  )
}
