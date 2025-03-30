import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Animated from "../common/Animated";
import { animations } from "../../config/animations";

const ContactHeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  padding: var(--spacing-3xl);
  background-color: var(--color-bg);
  min-height: 80vh;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const Title = styled(motion.h1)`
  font-size: var(--text-4xl);
  color: var(--color-text);
  font-weight: 700;
  line-height: 1;
`;

const Description = styled(motion.p)`
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  max-width: 600px;
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`;

const ContactInfoCard = styled(motion.div)`
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  padding-right: var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary-light);
  }
  /* padding: 1rem; */
`;

const IconWrapper = styled.div`
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h3`
  font-size: var(--text-lg);
  color: var(--color-text);
  font-weight: 600;
`;

const ContactDetail = styled.p`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
`;

const ContactHero = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "estatementor.learn@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 8105767992",
    },
    // {
    //   icon: MapPin,
    //   title: "Address",
    //   detail: "123 Property Lane, Real Estate City",
    // },
  ];

  return (
    <ContactHeroContainer>
      <ContentWrapper>
        <Animated animation="slideUp">
          <Title>Join the Estate Mentor Family Today!</Title>
        </Animated>

        <Animated animation="fadeIn" delay={0.2}>
          <Description>
            Ready to experience hassle-free property management in Bangalore?
            Let&apos;s transform the way you manage your real estate
            investments. Contact us today for a free consultation and discover
            why we&apos;re the preferred choice for property owners across the
            city.
          </Description>
        </Animated>

        <ContactInfoGrid>
          {contactInfo.map((info, index) => (
            <Animated
              key={info.title}
              animation="fadeInScale"
              delay={0.3 + index * 0.1}
            >
              <ContactInfoCard>
                <IconWrapper>
                  <info.icon size={24} />
                </IconWrapper>
                <ContactText>
                  <ContactTitle>{info.title}</ContactTitle>
                  <ContactDetail>{info.detail}</ContactDetail>
                </ContactText>
              </ContactInfoCard>
            </Animated>
          ))}
        </ContactInfoGrid>
        <Animated animation="fadeIn" delay={0.2}>
          <Description>
            Your Property, Our Priority – Because You Deserve Peace of Mind.
          </Description>
        </Animated>
      </ContentWrapper>

      <Animated animation="fadeIn" delay={0.5}>
        <div className="flex-center" style={{ height: "100%" }}>
          <img
            src="/api/placeholder/contact-us-animate.svg"
            alt="Contact Illustration"
            style={{
              maxWidth: "80%",
              borderRadius: "var(--radius-xl)",
              // boxShadow: "var(--shadow-lg)",
            }}
          />
        </div>
      </Animated>
    </ContactHeroContainer>
  );
};

export default ContactHero;
