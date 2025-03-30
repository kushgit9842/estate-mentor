import React from "react";
import styled from "styled-components";
import {
  Building2,
  HomeIcon,
  Calculator,
  TrendingUp,
  FileText,
} from "lucide-react";
import Animated from "../common/Animated";

const SectionContainer = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background-color: var(--color-bg-secondary);
`;

const Header = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
`;

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border-light);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    cursor: pointer;
  }

  &:first-child {
    grid-column: 1 / -1;
    background: linear-gradient(
      135deg,
      var(--color-primary-light) 0%,
      var(--color-primary) 100%
    );
    color: white;

    h3,
    p {
      color: white;
    }
  }
`;

const IconBox = styled.div`
  background-color: ${(props) =>
    props.$featured
      ? "rgba(255, 255, 255, 0.2)"
      : "var(--color-primary-light)"};
  color: ${(props) => (props.$featured ? "white" : "var(--color-primary)")};
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
`;

function OurServices() {
  const services = [
    {
      icon: Building2,
      title: "Residential & Commercial Property Sales",
      description:
        "Expert guidance in buying and selling properties with comprehensive market insights and negotiation support.",
      featured: true,
    },
    {
      icon: HomeIcon,
      title: "Rental Solutions for Homes & Offices",
      description:
        "End-to-end rental services including property listing, tenant screening, and lease management.",
      featured: true,
    },
    {
      icon: Calculator,
      title: "Property Valuation & Market Analysis",
      description:
        "Accurate property valuations backed by detailed market analysis and location-specific insights.",
      featured: true,
    },
    {
      icon: TrendingUp,
      title: "Real Estate Investment Advisory",
      description:
        "Strategic investment consultation to maximize returns and build a robust property portfolio.",
      featured: true,
    },
    {
      icon: FileText,
      title: "Legal & Documentation Assistance",
      description:
        "Complete support with legal procedures, documentation, and regulatory compliance.",
      featured: true,
    },
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
            Our Services
          </h2>
        </Animated>
        <Animated animation="fadeIn" delay={0.2}>
          <p
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--color-text-secondary)",
            }}
          >
            Comprehensive real estate solutions tailored to your needs
          </p>
        </Animated>
      </Header>

      <ServicesWrapper>
        {services.map((service, index) => (
          <Animated
            key={service.title}
            animation="fadeInScale"
            delay={0.2 + index * 0.1}
          >
            <ServiceCard>
              <IconBox $featured={service.featured}>
                <service.icon size={28} />
              </IconBox>
              <Content>
                <h3
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: "600",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: service.featured
                      ? "rgba(255, 255, 255, 0.9)"
                      : "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </Content>
            </ServiceCard>
          </Animated>
        ))}
      </ServicesWrapper>
    </SectionContainer>
  );
}

export default OurServices;
