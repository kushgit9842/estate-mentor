// FeaturesSection.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";
import { UserCheck, Users, Wrench, Wallet } from "lucide-react";

import { animations } from "../../config/animations";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg);
`;

const ContentWrapper = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
`;

const SectionHeader = styled(motion.h2)`
  text-align: center;
  color: var(--color-text);
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-2xl);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  padding: var(--spacing-xl) 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-medium);
  height: 100%;
  display: flex;
  /* flex-direction: column; */

  align-items: center;
  gap: var(--spacing-md);
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: var(--color-primary-light);
  }
`;

const IconWrapper = styled.div`
  /* color: var(--color-primary); */
  color: white;
  background-color: var(--color-primary);
  /* opacity: 0.1; */
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  border-radius: 50%;
  display: flex;
  margin-bottom: var(--spacing-md);
  transition: all var(--transition-medium);

  ${FeatureCard}:hover & {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  color: var(--color-text);
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const FeatureDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--text-base);
  line-height: 1.6;
`;

const features = [
  {
    icon: UserCheck,
    title: "Residential Property Management",
    description:
      "Comprehensive background checks and verification process to ensure reliable, trustworthy tenants for your property.",
  },
  {
    icon: Users,
    title: "Commercial Property Management",
    description:
      "Expert handling of tenant communications, concerns, and requests, ensuring smooth landlord-tenant relationships.",
  },
  {
    icon: Wrench,
    title: "Tenant Placement & Retention",
    description:
      "Regular property maintenance, swift repairs, and interior updates to maintain and enhance your property's value.",
  },
  {
    icon: Wallet,
    title: "Maintenance & Repairs",
    description:
      "Efficient, automated rent collection system with detailed financial reporting and timely owner disbursements.",
  },
  {
    icon: Wallet,
    title: "Legal & Compliance Support",
    description:
      "Efficient, automated rent collection system with detailed financial reporting and timely owner disbursements.",
  },
  {
    icon: Wallet,
    title: "Rent Collection & Financial Reporting",
    description:
      "Efficient, automated rent collection system with detailed financial reporting and timely owner disbursements.",
  },
  {
    icon: Wallet,
    title: "Rental maximization",
    description:
      "Efficient, automated rent collection system with detailed financial reporting and timely owner disbursements.",
  },
];

const FeaturesSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionHeader
          initial={animations.slideDown.initial}
          whileInView={animations.slideDown.whileInView}
          viewport={{ once: true }}
        >
          Our Services
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              initial={animations.fadeInScale.initial}
              whileInView={animations.fadeInScale.whileInView}
              viewport={{ once: true }}
              transition={{
                ...animations.fadeInScale.transition,
                delay: index * 0.1,
              }}
            >
              <IconWrapper>
                <feature.icon size={32} weight="bold" />
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              {/* <FeatureDescription>{feature.description}</FeatureDescription> */}
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FeaturesSection;
