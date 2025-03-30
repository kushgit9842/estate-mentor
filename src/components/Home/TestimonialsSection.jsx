import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl);
  background: linear-gradient(
    180deg,
    var(--color-surface) 0%,
    var(--color-bg) 100%
  );
  position: relative;
  overflow: hidden;
  /* padding-top: var(); */
`;

const ContentWrapper = styled.div`
  width: min(85%, 1100px);
  margin: 0 auto;
  position: relative;
`;

const BackgroundAccent = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--color-primary-light) 0%,
    transparent 70%
  );
  opacity: 0.1;
  filter: blur(40px);
  z-index: 0;

  &.top {
    top: -250px;
    right: -100px;
  }

  &.bottom {
    bottom: -250px;
    left: -100px;
  }
`;

const Title = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-4xl);
`;

const TitleLabel = styled.span`
  display: inline-block;
  background: linear-gradient(
    90deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--spacing-lg);
`;

const TitleText = styled.h2`
  font-size: var(--text-5xl);
  background: linear-gradient(
    135deg,
    var(--color-text) 0%,
    var(--color-text-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`;

const TestimonialsContainer = styled.div`
  position: relative;
  padding: 0 var(--spacing-xl);
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-3xl);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: var(--spacing-xl);
  }
`;

const QuoteIcon = styled(motion.div)`
  position: absolute;
  top: var(--spacing-xl);
  right: var(--spacing-xl);
  color: var(--color-primary);
  opacity: 0.15;
  transform: scale(2);
`;

const TestimonialContent = styled.div`
  position: relative;
  z-index: 1;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
`;

const UserImageContainer = styled(motion.div)`
  position: relative;
  width: 80px;
  height: 80px;

  &::after {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--color-primary) 0%,
      var(--color-primary-dark) 100%
    );
    z-index: -1;
  }
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-surface);
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.h4`
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
`;

const UserRole = styled.p`
  color: var(--color-primary);
  font-size: var(--text-sm);
  font-weight: 500;
`;

const Rating = styled(motion.div)`
  display: flex;
  gap: var(--spacing-xs);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
`;

const ReviewText = styled(motion.p)`
  color: var(--color-text-secondary);
  font-size: var(--text-xl);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
`;

const ReviewDate = styled.span`
  display: inline-block;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-full);
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: var(--color-text);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary);
    color: white;
    /* border-color: var(--color-primary); */
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  margin-top: var(--spacing-2xl);
`;

const ProgressDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "var(--color-primary)" : "var(--color-text-muted)"};
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.3)};
`;

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Property Owner",
    image: "/api/placeholder/user1.jpg",
    rating: 5,
    text: "Working with this property management team has been incredible. They've transformed how I handle my rental properties, making everything seamless and stress-free.",
    date: "January 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Real Estate Investor",
    image: "/api/placeholder/user2.jpg",
    rating: 5,
    text: "The level of professionalism and attention to detail is outstanding. They've helped me maximize my property's potential while providing excellent tenant management.",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Emily Martinez",
    role: "Homeowner",
    image: "/api/placeholder/user3.jpg",
    rating: 5,
    text: "I couldn't be happier with their service. The team is responsive, proactive, and truly cares about maintaining the quality of my property.",
    date: "March 2024",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <SectionContainer
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <BackgroundAccent className="top" />
      <BackgroundAccent className="bottom" />

      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <TitleLabel>Testimonials</TitleLabel> */}
          <TitleText>What Our Clients Say</TitleText>
        </Title>

        <TestimonialsContainer>
          <NavigationButton
            className="prev"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="flex-center">
              <ChevronLeft size={24} />
            </span>
          </NavigationButton>

          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <QuoteIcon
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 0.15, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Quote size={48} />
              </QuoteIcon>

              <TestimonialContent>
                <UserInfo>
                  <UserImageContainer
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <UserImage
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                    />
                  </UserImageContainer>
                  <UserDetails>
                    <UserName>{testimonials[currentIndex].name}</UserName>
                    <UserRole>{testimonials[currentIndex].role}</UserRole>
                  </UserDetails>
                </UserInfo>

                <Rating
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </Rating>

                <ReviewText
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  "{testimonials[currentIndex].text}"
                </ReviewText>

                <ReviewDate>{testimonials[currentIndex].date}</ReviewDate>
              </TestimonialContent>
            </TestimonialCard>
          </AnimatePresence>

          <NavigationButton
            className="next"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="flex-center">
              <ChevronRight size={24} />
            </span>
          </NavigationButton>
        </TestimonialsContainer>

        <ProgressBar>
          {testimonials.map((_, index) => (
            <ProgressDot
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </ProgressBar>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default TestimonialsSection;
