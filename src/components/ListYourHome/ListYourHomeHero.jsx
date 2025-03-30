import React from "react";
import styled from "styled-components";
import { Building2, Clock, Shield, BadgeCheck } from "lucide-react";
import Animated from "../common/Animated";

const HeroContainer = styled.section`
  min-height: 90vh;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-surface) 100%
  );
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 70% 30%,
      var(--color-primary) 0%,
      transparent 70%
    );
    opacity: 0.05;
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--spacing-3xl);
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.2;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-md);
`;

const Subtitle = styled.p`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-2px);
    border-color: var(--color-primary-light);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  color: var(--color-primary);
  background-color: var(--color-surface-secondary);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  display: flex;
`;

const FeatureText = styled.div`
  h4 {
    color: var(--color-text);
    font-size: var(--text-base);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
  }

  p {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
    margin: 0;
  }
`;

const ImageSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListYourHomeHero = () => {
  const features = [
    {
      icon: Building2,
      title: "Professional Management",
      description: "Expert handling of your property affairs",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your needs",
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Safe and transparent property handling",
    },
    {
      icon: BadgeCheck,
      title: "Verified Tenants",
      description: "Thoroughly screened reliable tenants",
    },
  ];

  return (
    <HeroContainer>
      <ContentWrapper>
        <TextContent>
          <Animated animation="slideDown">
            <Title>Want us to manage your property?</Title>
            <Subtitle>
              Please fill in the details below and we will get in touch within
              24 hours. In case you do not hear from us, please check your SPAM
              folder, as our mail might end up there on occasion!
            </Subtitle>
          </Animated>

          <FeatureGrid>
            {features.map((feature, index) => (
              <Animated
                key={feature.title}
                animation="fadeInScale"
                delay={index * 0.1}
              >
                <FeatureItem>
                  <IconWrapper>
                    <feature.icon size={24} />
                  </IconWrapper>
                  <FeatureText>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </FeatureText>
                </FeatureItem>
              </Animated>
            ))}
          </FeatureGrid>
        </TextContent>

        <ImageSection>
          <Animated animation="fadeInScale" delay={0.3}>
            <img
              src="/api/placeholder/apartment-rent-animate.svg"
              alt="Property Management"
              style={{
                width: "110%",
                // height: "100%",
                // borderRadius: "var(--radius-xl)",
                // boxShadow: "var(--shadow-xl)",
                // border: "1px solid black",
              }}
            />
          </Animated>
        </ImageSection>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default ListYourHomeHero;
