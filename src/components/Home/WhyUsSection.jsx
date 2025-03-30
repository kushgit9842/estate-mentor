// WhyUsSection.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";
import { History, Shield, Smartphone, Users, Wallet } from "lucide-react";
import { animations } from "../../config/animations";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg);
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
`;

const SectionHeader = styled(motion.h2)`
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-3xl);
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
    margin-bottom: var(--spacing-2xl);
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
`;

const FeatureCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;

  &:nth-child(even) {
    direction: rtl;
    text-align: right;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);

    &:nth-child(even) {
      direction: ltr;
      text-align: left;
    }
  }
`;

const FeatureContent = styled.div`
  direction: ltr;
  padding: var(--spacing-xl);
`;

const FeatureIconWrapper = styled(motion.div)`
  background: linear-gradient(
    135deg,
    var(--color-primary-light) 0%,
    var(--color-primary) 100%
  );
  /* border-radius: var(--radius-xl); */
  border-radius: var(--radius-lg);
  padding: var(--spacing-3xl);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  height: 100%;
  min-height: 300px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 30% 107%,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 55%,
      rgba(255, 255, 255, 0) 70%
    );
  }

  @media (max-width: 768px) {
    min-height: 200px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
`;

const FeatureDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
  line-height: 1.6;
`;

const features = [
  {
    icon: History,
    title: "Local Expertise, Global Standards",
    description:
      "With deep roots in Bangalore, we know the city’s real estate landscape inside out. From Koramangala to Whitefield, we ensure your property is managed with precision and care, adhering to the highest standards.",
  },
  {
    icon: Shield,
    title: "End-to-End Solutions",
    description:
      "From tenant screening and rent collection to maintenance and legal compliance, we handle it all. Our comprehensive services are designed to maximize your returns while minimizing your hassles.",
  },
  {
    icon: Smartphone,
    title: "Tech-Driven Convenience",
    description:
      "Our state-of-the-art platform gives you 24/7 access to your property’s performance, financial reports, and maintenance updates. Stay connected and in control, anytime, anywhere.",
  },
  {
    icon: Users,
    title: "Dedicated Relationship Managers",
    description:
      "Forget faceless service! Our dedicated relationship managers are just a call away, ensuring personalized attention and quick resolution of any concerns.",
  },
  {
    icon: Wallet,
    title: "No Sign Up Fee",
    description:
      "Start your property management journey without any initial financial burden. We believe in earning through our service quality, not signup fees. Begin managing your property right away.",
  },
];

const WhyUsSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionHeader
          initial={animations.slideDown.initial}
          whileInView={animations.slideDown.whileInView}
          viewport={{ once: true }}
        >
          Why EstateMentor
        </SectionHeader>

        <FeaturesContainer>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              initial={animations.slideRight.initial}
              whileInView={animations.slideRight.whileInView}
              viewport={{ once: true }}
              transition={{
                ...animations.slideRight.transition,
                delay: index * 0.1,
              }}
            >
              <FeatureIconWrapper whileHover={animations.grow.whileHover}>
                <feature.icon size={100} strokeWidth={1.5} />
              </FeatureIconWrapper>

              <FeatureContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureContent>
            </FeatureCard>
          ))}
        </FeaturesContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default WhyUsSection;
