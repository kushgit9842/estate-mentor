import styled from "styled-components";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
} from "lucide-react";

const FooterContainer = styled.footer`
  background-color: var(--color-surface);
  color: var(--color-text);
  padding: 4rem 2rem 2rem;
  border-top: 1px solid var(--color-border);
  transition: all 0.3s ease;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;

  span {
    color: var(--color-primary);
  }
`;

const SectionTitle = styled.h3`
  color: var(--color-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.75rem;

  &:hover {
    color: var(--color-primary);
  }
`;

const QuickLink = styled.a`
  color: var(--color-text-secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-primary);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--color-surface-secondary);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-primary);
    transform: translateY(-3px);
    background-color: var(--color-bg);
  }
`;

const BusinessHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-text-secondary);
`;

const Hour = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
`;

const Newsletter = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-bg);
  color: var(--color-text);
  flex: 1;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-text-secondary);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* About Section */}
        <FooterSection>
          <Logo>
            Estate<span>Mentor</span>
          </Logo>
          <Description>
            Your trusted partner in property consultancy. We provide expert
            guidance for property owners and tenants, helping you make informed
            decisions in the real estate market.
          </Description>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <Facebook size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <Twitter size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <Instagram size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="YouTube">
              <Youtube size={20} />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        {/* Quick Links */}
        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <QuickLink href="/property-management">
            <ArrowRight size={16} />
            Property Management
          </QuickLink>
          <QuickLink href="/partner-with-us">
            <ArrowRight size={16} />
            Partner With us
          </QuickLink>
          <QuickLink href="/real-estate-consultant">
            <ArrowRight size={16} />
            Real Estate Consultant
          </QuickLink>
          {/* <QuickLink href="/awards">
            <ArrowRight size={16} />
            Awards
          </QuickLink> */}
          {/* <QuickLink href="/podcast">
            <ArrowRight size={16} />
            Podcast
          </QuickLink> */}
          <QuickLink href="/about">
            <ArrowRight size={16} />
            About Us
          </QuickLink>
          {/* <QuickLink href="/careers">
            <ArrowRight size={16} />
            Careers
          </QuickLink> */}
          {/* <QuickLink href="/blog">
            <ArrowRight size={16} />
            Blog
          </QuickLink> */}
        </FooterSection>

        {/* Contact Information */}
        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>
            <MapPin size={20} />
            <span>
              Indranagar , Bangalore
              {/* <br /> */}
              {/* New York, NY 10001 */}
            </span>
          </ContactInfo>
          <ContactInfo>
            <Phone size={20} />
            <span>+91 8105767992</span>
          </ContactInfo>
          <ContactInfo>
            <Mail size={20} />
            <span>estatementor.learn@gmail.com</span>
          </ContactInfo>
          <BusinessHours>
            <SectionTitle>Business Hours</SectionTitle>
            <Hour>
              <span>
                <Clock size={16} /> Monday - Friday
              </span>
              <span>9:00 AM - 6:00 PM</span>
            </Hour>
            <Hour>
              <span>
                <Clock size={16} /> Saturday
              </span>
              <span>10:00 AM - 4:00 PM</span>
            </Hour>
            <Hour>
              <span>
                <Clock size={16} /> Sunday
              </span>
              <span>Closed</span>
            </Hour>
          </BusinessHours>
        </FooterSection>

        {/* Newsletter */}
        <FooterSection>
          <SectionTitle>Newsletter</SectionTitle>
          <Description>
            Subscribe to our newsletter for the latest property insights, market
            updates, and exclusive offers.
          </Description>
          <Newsletter>
            <Input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
            />
            <Button type="submit">Subscribe</Button>
          </Newsletter>
          <Description>
            By subscribing, you agree to our Privacy Policy and consent to
            receive property-related updates and marketing communications.
          </Description>
        </FooterSection>
      </FooterContent>

      {/* Bottom Bar */}
      <BottomBar>
        <div>
          © {new Date().getFullYear()} EstateMentor. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <QuickLink href="/privacy">Privacy Policy</QuickLink>
          {" | "}
          <QuickLink href="/terms">Terms of Service</QuickLink>
          {" | "}
          <QuickLink href="/sitemap">Sitemap</QuickLink>
        </div>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
