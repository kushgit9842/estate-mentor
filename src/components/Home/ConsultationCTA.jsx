import styled from "styled-components";
import { motion } from "framer-motion";
import { PhoneCall, Calendar, MessageCircle } from "lucide-react";
import { animations } from "../../config/animations";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg-secondary);

  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 30% 107%,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 55%,
    rgba(255, 255, 255, 0) 70%
  );
`;

const ContentWrapper = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-2xl);
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  background-color: white;
  color: var(--color-primary);
  font-weight: 600;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background-color: var(--color-surface);
  }
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-top: var(--spacing-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: white;

  & > span {
    background-color: var(--color-primary);
    border-radius: 50%;
    padding: var(--spacing-md);
    display: flex;
  }

  p {
    opacity: 0.9;
    font-size: var(--text-sm);
  }
`;

const ConsultationCTA = () => {
  return (
    <SectionContainer>
      <BackgroundPattern />
      <ContentWrapper>
        <Title
          initial={animations.slideDown.initial}
          whileInView={animations.slideDown.whileInView}
          viewport={{ once: true }}
        >
          Want to talk to an expert and get a free consultation?
        </Title>

        <Subtitle
          initial={animations.slideUp.initial}
          whileInView={animations.slideUp.whileInView}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our experienced team is ready to help you make informed decisions
          about your property management needs
        </Subtitle>

        <ButtonsContainer
          initial={animations.fadeInScale.initial}
          whileInView={animations.fadeInScale.whileInView}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button as="a" href="/contact">
            <MessageCircle size={20} />
            Contact Us
          </Button>
          <Button as="a" href="/schedule">
            <Calendar size={20} />
            Schedule Call
          </Button>
        </ButtonsContainer>

        <FeaturesGrid
          initial={animations.slideUp.initial}
          whileInView={animations.slideUp.whileInView}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <FeatureItem>
            <span>
              <PhoneCall size={24} />
            </span>
            <p>Available 24/7 for urgent inquiries</p>
          </FeatureItem>
          <FeatureItem>
            <span>
              <Calendar size={24} />
            </span>
            <p>Flexible scheduling options</p>
          </FeatureItem>
          <FeatureItem>
            <span>
              <MessageCircle size={24} />
            </span>
            <p>Expert advice tailored to your needs</p>
          </FeatureItem>
        </FeaturesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ConsultationCTA;
