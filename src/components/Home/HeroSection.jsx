// HeroSection.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";
import { animations } from "../../config/animations";

const HeroContainer = styled.section`
  position: relative;
  height: 90vh;
  width: 100%;
  overflow: hidden;
  /* border: 5px solid red; */
`;

const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border: 5px solid red; */
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  width: min(90%, 1200px);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TextContainer = styled(motion.div)`
  max-width: 42rem;
  margin-bottom: var(--spacing-xl);
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: var(--text-5xl);
  font-weight: 700;
  margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    font-size: var(--text-4xl);
  }

  @media (max-width: 480px) {
    font-size: var(--text-3xl);
  }
`;

const HeroText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--text-xl);
  max-width: 36rem;
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
`;

const CTAButton = styled(motion.button)`
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--text-lg);
  border: none;
  cursor: pointer;
  transition: all var(--transition-medium);

  &:hover {
    background-color: var(--color-primary-dark);
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-primary-light);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: var(--spacing-xl);
  left: 45%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ScrollText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: var(--text-sm);
  margin-bottom: var(--spacing-sm);
`;

const ScrollIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.8);
`;

// HeroSection.jsx
// import {
//   HeroContainer,
//   ImageContainer,
//   HeroImage,
//   Overlay,
//   ContentContainer,
//   TextContainer,
//   HeroTitle,
//   HeroText,
//   CTAButton,
//   ScrollIndicator,
//   ScrollText,
//   ScrollIcon,
// } from "./HeroSection.styles";

const HeroSection = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <HeroContainer>
      <ImageContainer>
        <HeroImage
          src="/api/placeholder/home-info-bg.jpg"
          alt="Luxury property interior"
        />
        <Overlay />
      </ImageContainer>

      <ContentContainer>
        <TextContainer
          initial={animations.slideRight.initial}
          whileInView={animations.slideRight.whileInView}
          transition={animations.slideRight.transition}
        >
          <HeroTitle>
            Welcome to Estate Mentor Your Trusted Property Management Partner
            and Real Estate Consultant in Bangalore!
          </HeroTitle>
          {/* <HeroText>
            Expert guidance to help you make informed decisions in the
            ever-evolving real estate market. From residential to commercial,
            we've got you covered.
          </HeroText> */}
        </TextContainer>

        <CTAButton
          initial={animations.fadeInScale.initial}
          whileInView={animations.fadeInScale.whileInView}
          transition={{ ...animations.fadeInScale.transition, delay: 0.4 }}
          onClick={() => console.log("CTA clicked")}
        >
          Schedule a Consultation
        </CTAButton>

        <ScrollIndicator
          initial={animations.bounceScale.initial}
          animate={animations.bounceScale.whileInView}
          transition={animations.bounceScale.transition}
          onClick={handleScroll}
        >
          <ScrollText>Scroll to explore</ScrollText>
          <ScrollIcon
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </ScrollIcon>
        </ScrollIndicator>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;
