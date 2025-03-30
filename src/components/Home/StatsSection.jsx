// StatsSection.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";
import { animations } from "../../config/animations";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg-secondary);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-border) 20%,
      var(--color-border) 80%,
      transparent
    );
  }
`;

const ContentWrapper = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
  text-align: center;
`;

const SectionHeader = styled(motion.h2)`
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-2xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.3;

  strong {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin: var(--spacing-2xl) 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`;

const StatCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
`;

const StatValue = styled.div`
  font-size: var(--text-4xl);
  font-weight: 800;
  color: var(--color-primary);
  font-family: var(--font-family-secondary);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`;

const StatLabel = styled.div`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 200px;
  line-height: 1.4;

  strong {
    color: var(--color-text);
    font-weight: 600;
  }
`;

const RequestButton = styled(motion.button)`
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--text-lg);
  cursor: pointer;
  transition: all var(--transition-medium);
  margin-top: var(--spacing-xl);

  &:hover {
    background-color: var(--color-primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
`;

const stats = [
  {
    value: "2000",
    suffix: "+",
    prefix: "₹",
    metric: "crores",
    label: "Assets under management",
    duration: 2500,
  },
  {
    value: "100",
    suffix: "%",
    metric: "on time",
    label: "rent disbursement",
    duration: 2000,
  },
  {
    value: "95",
    suffix: "%",
    metric: "occupancy",
    label: "after 1st tenant placement",
    duration: 2000,
  },
];

const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useCounter = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    let startTime;
    let animationFrame;

    const startValue = 0;
    const endValue = Number(end.replace(/[^0-9.-]+/g, ""));

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(
        Math.floor(startValue + (endValue - startValue) * easedProgress)
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, delay, isAnimating]);

  return [count, setIsAnimating];
};

const AnimatedStatValue = ({ stat, delay }) => {
  const [count, setIsAnimating] = useCounter(stat.value, stat.duration, delay);
  const valueRef = useRef(null);
  const isInView = useInView(valueRef, { once: true });

  useEffect(() => {
    if (isInView) {
      setIsAnimating(true);
    }
  }, [isInView, setIsAnimating]);

  return (
    <StatValue ref={valueRef}>
      {stat.prefix}
      {count}
      {stat.suffix}
      {stat.metric && (
        <span style={{ fontSize: "var(--text-lg)", fontWeight: "400" }}>
          {" "}
          {stat.metric}
        </span>
      )}
    </StatValue>
  );
};

const StatsSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionHeader
          initial={animations.revealText.initial}
          whileInView={animations.revealText.whileInView}
          viewport={{ once: true }}
        >
          <strong>10+ Years</strong> of Trust & Excellence in Property
          Management
        </SectionHeader>

        <StatsContainer>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              initial={animations.slideUp.initial}
              whileInView={animations.slideUp.whileInView}
              viewport={{ once: true }}
              transition={{
                ...animations.slideUp.transition,
                delay: index * 0.2,
              }}
            >
              <AnimatedStatValue stat={stat} delay={index * 200} />
              <StatLabel>
                <strong>{stat.label}</strong>
              </StatLabel>
            </StatCard>
          ))}
        </StatsContainer>

        <RequestButton
          initial={animations.fadeInScale.initial}
          whileInView={animations.fadeInScale.whileInView}
          viewport={{ once: true }}
          transition={{ ...animations.fadeInScale.transition, delay: 0.6 }}
          whileHover={animations.lift.whileHover}
        >
          Request More Details
        </RequestButton>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default StatsSection;
