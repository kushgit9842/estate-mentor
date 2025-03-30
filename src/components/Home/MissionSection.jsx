import styled from "styled-components";
import { motion } from "framer-motion";
import { Target, BarChart, Heart, Building } from "lucide-react";
import { animations } from "../../config/animations";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg);
  position: relative;
  overflow: hidden;
`;

const BackgroundAccent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle at center,
    var(--color-primary-light) 0%,
    transparent 70%
  );
  opacity: 0.1;
  filter: blur(60px);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeaderSection = styled.div`
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: var(--text-4xl);
  color: var(--color-text);
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);

  svg {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`;

const MissionText = styled(motion.p)`
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
`;

const ValuesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const ValueCard = styled(motion.div)`
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-lg);
  }
`;

const IconWrapper = styled.div`
  background-color: var(--color-bg);
  color: var(--color-primary);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  border: 2px solid var(--color-primary);
`;

const ValueTitle = styled.h3`
  font-size: var(--text-lg);
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
`;

const ValueDescription = styled.p`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all var(--transition-medium);
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    color: white;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const values = [
  {
    icon: Building,
    title: "Property Excellence",
    description:
      "We strive to maintain and enhance every property to its highest potential, ensuring lasting value and satisfaction.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "Your needs and goals are our priority. We build lasting relationships through trust, transparency, and dedicated service.",
  },
  {
    icon: BarChart,
    title: "Sustainable Growth",
    description:
      "We believe in creating long-term value through sustainable practices and innovative property management solutions.",
  },
];

const MissionSection = () => {
  return (
    <SectionContainer>
      <BackgroundAccent />
      <ContentWrapper>
        <HeaderSection>
          <Title
            initial={animations.slideDown.initial}
            whileInView={animations.slideDown.whileInView}
            viewport={{ once: true }}
          >
            <Target size={40} />
            Our Mission
          </Title>
          <MissionText
            initial={animations.slideUp.initial}
            whileInView={animations.slideUp.whileInView}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            To revolutionize property management through innovation, integrity,
            and excellence. We're committed to delivering exceptional service
            that transforms properties into thriving investments and creates
            lasting value for our clients.
          </MissionText>
        </HeaderSection>

        <ValuesGrid
          initial={animations.fadeInScale.initial}
          whileInView={animations.fadeInScale.whileInView}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              initial={animations.slideUp.initial}
              whileInView={animations.slideUp.whileInView}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <IconWrapper>
                <value.icon size={24} />
              </IconWrapper>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>

        <ButtonWrapper>
          <CTAButton
            href="/contact"
            initial={animations.fadeInScale.initial}
            whileInView={animations.fadeInScale.whileInView}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Contact us to know more
          </CTAButton>
        </ButtonWrapper>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MissionSection;
