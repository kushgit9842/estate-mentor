import React from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import Animated from "../common/Animated";

const CTAContainer = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/api/placeholder/1200/400") center/cover;
  opacity: 0.1;
`;

const Title = styled.h2`
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  color: white;

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`;

const Description = styled.p`
  font-size: var(--text-xl);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
`;

const CTAButton = styled.button`
  background-color: white;
  color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all var(--transition-medium);

  &:hover {
    background-color: var(--color-surface);
    transform: translateY(-2px);
  }
`;

function CallToAction() {
  return (
    <CTAContainer>
      <Background />
      <ContentWrapper>
        <Animated animation="slideDown">
          <Title>
            Explore Bangalore's Real Estate Opportunities with Confidence!
          </Title>
        </Animated>

        <Animated animation="fadeIn" delay={0.2}>
          <Description>
            Whether you're a first-time homebuyer, a seasoned investor, or a
            business looking for the perfect commercial space, Estate mentor is
            your go-to real estate consultancy in Bangalore. Let's turn your
            property dreams into reality!
          </Description>
        </Animated>

        <Animated animation="slideUp" delay={0.3}>
          <CTAButton>
            Get Started Today
            <ArrowRight size={20} />
          </CTAButton>
        </Animated>
      </ContentWrapper>
    </CTAContainer>
  );
}

export default CallToAction;
