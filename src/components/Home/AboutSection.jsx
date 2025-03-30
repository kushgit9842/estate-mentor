import styled from "styled-components";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { animations } from "../../config/animations";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-surface);
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
  /* background: linear-gradient(
    135deg,
    var(--color-primary-light) 0%,
    var(--color-primary) 100%
  ); */
  box-shadow: var(--shadow-lg);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 30% 107%,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.05) 55%,
      rgba(255, 255, 255, 0) 70%
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.85;
    /* mix-blend-mode: overlay; */
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const Title = styled(motion.h2)`
  font-size: var(--text-4xl);
  color: var(--color-text);
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`;

const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  p {
    color: var(--color-text-secondary);
    font-size: var(--text-lg);
    line-height: 1.7;
    margin: 0;
  }
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  padding: var(--spacing-xl) 0;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: left;

  .number {
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: var(--spacing-xs);
  }

  .label {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    white-space: nowrap;
  }
`;

const Button = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--text-base);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  width: fit-content;
  box-shadow: var(--shadow-md);

  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
  }
`;

const AboutSection = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "2.5K+", label: "Properties Managed" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <ImageContainer
          initial={animations.slideLeft.initial}
          whileInView={animations.slideLeft.whileInView}
          viewport={{ once: true }}
        >
          <img
            src="/api/placeholder/home-info-bg.jpg"
            alt="About EstateMentor"
          />
        </ImageContainer>

        <ContentContainer>
          <Title
            initial={animations.slideRight.initial}
            whileInView={animations.slideRight.whileInView}
            viewport={{ once: true }}
          >
            About the Company
          </Title>

          <Description
            initial={animations.slideRight.initial}
            whileInView={animations.slideRight.whileInView}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p>
              At Estate Mentor , we understand that managing properties in a
              bustling city like Bangalore can be overwhelming. Whether you own
              a single apartment, a villa, or a portfolio of commercial spaces,
              we&apos;re here to make property management seamless, stress-free,
              and efficient. We bring a fresh, personalized approach to property
              management that puts you first.
            </p>
            {/* <p>
              We combine decades of industry expertise with cutting-edge
              technology to deliver unparalleled property management solutions.
              Our dedicated team of professionals ensures that every property
              under our care receives the attention it deserves.
            </p> */}
          </Description>

          <Stats
            initial={animations.slideRight.initial}
            whileInView={animations.slideRight.whileInView}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {stats.map((stat) => (
              <StatItem key={stat.label}>
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </StatItem>
            ))}
          </Stats>

          <Button
            initial={animations.slideUp.initial}
            whileInView={animations.slideUp.whileInView}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={animations.grow.whileHover}
          >
            <PhoneCall size={20} />
            Talk to an Expert
          </Button>
        </ContentContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default AboutSection;
