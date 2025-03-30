import React from "react";
import styled from "styled-components";
import {
  Shield,
  Award,
  Home,
  Smile,
  Box,
  Lock,
  Landmark,
  Map,
  Compass,
  UserCheck,
  UsersRound,
  CircleDotDashed,
  Workflow,
} from "lucide-react";
import Animated from "../common/Animated";
import { motion } from "framer-motion";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background-color: var(--color-bg);
`;

const Header = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  position: relative;
  overflow: hidden;
  min-height: 17rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--color-primary) 0%,
      var(--color-secondary) 100%
    );
    transform: scaleX(0);
    /* transform-origin: left; */
    transition: transform var(--transition-medium);
  }

  &:hover::before {
    transform: scaleX(1);
  }
  &:hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  background-color: var(--color-primary);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Compass,
      title: "Local Expertise",
      description:
        "With years of experience in Bangalore real estate, we have deep knowledge of neighborhoods, trends, and investments.",
    },
    {
      icon: UserCheck,
      title: "Personalized Service",
      description:
        "We tailor our services to meet your unique needs, ensuring a seamless and stress-free experience",
    },
    {
      icon: UsersRound,
      title: "Trusted Network",
      description:
        "Our extensive network of buyers, sellers, landlords, and developers helps us find the best options for you.",
    },
    {
      icon: Workflow,
      title: "End-to-End Support",
      description:
        "From property search to paperwork, we handle it all, so you can focus on what matters most",
    },
    // {
    //   icon: Box,
    //   title: "Effortless Selection and Move",
    //   description:
    //     "Streamlined property selection process and assisted move-in experience.",
    // },
    // {
    //   icon: Lock,
    //   title: "Secured Deposit",
    //   description:
    //     "Transparent deposit handling with documented terms and timely refunds.",
    // },
  ];

  return (
    <SectionContainer>
      <Header>
        <Animated animation="slideDown">
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "var(--color-text)",
              marginBottom: "var(--spacing-md)",
            }}
          >
            Why Choose Us ?
          </h2>
        </Animated>
        {/* <Animated animation="fadeIn" delay={0.2}>
          <p
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--color-text-secondary)",
            }}
          >
            Experience hassle-free renting with our premium services and
            tenant-first approach
          </p>
        </Animated> */}
      </Header>

      <CardsGrid>
        {advantages.map((advantage, index) => (
          <Animated
            key={advantage.title}
            animation="fadeInScale"
            delay={0.2 + index * 0.1}
          >
            <Card whileHover={{ y: -5 }}>
              <IconWrapper>
                <advantage.icon size={24} />
              </IconWrapper>
              <h3
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--color-text)",
                  fontWeight: "600",
                }}
              >
                {advantage.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                }}
              >
                {advantage.description}
              </p>
            </Card>
          </Animated>
        ))}
      </CardsGrid>
    </SectionContainer>
  );
};

export default AdvantagesSection;
