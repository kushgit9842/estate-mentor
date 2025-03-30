import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Animated from "../components/common/Animated";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  padding: var(--spacing-3xl);
  background-color: var(--color-bg);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const ContactInfoCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  background-color: var(--color-surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
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

const Form = styled(motion.form)`
  display: grid;
  gap: var(--spacing-lg);
`;

const FormGroup = styled.div`
  display: grid;
  gap: var(--spacing-sm);
`;

const FormLabel = styled.label`
  color: var(--color-text-secondary);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  color: var(--color-text);
  transition: all var(--transition-medium);

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  color: var(--color-text);
  resize: vertical;
  transition: all var(--transition-medium);

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  width: 100%;
  padding: var(--spacing-md);
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--transition-medium);

  &:hover {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      detail: "123 Property Lane, Real Estate City",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 8105767992",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "estatementor.learn@gmail.com",
    },
  ];

  return (
    <FormContainer>
      <ContactDetails>
        <Animated animation="slideUp">
          <h2
            style={{
              fontSize: "var(--text-3xl)",
              color: "var(--color-text)",
            }}
          >
            Contact Information
          </h2>
        </Animated>

        {contactInfo.map((info, index) => (
          <Animated
            key={info.title}
            animation="fadeInScale"
            delay={index * 0.1}
          >
            <ContactInfoCard>
              <IconWrapper>
                <info.icon size={24} />
              </IconWrapper>
              <ContactText>
                <h3
                  style={{
                    color: "var(--color-text)",
                    fontWeight: "600",
                  }}
                >
                  {info.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  {info.detail}
                </p>
              </ContactText>
            </ContactInfoCard>
          </Animated>
        ))}
      </ContactDetails>

      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormGroup>
          <FormLabel>Full Name</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Email Address</FormLabel>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Phone Number</FormLabel>
          <FormInput
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Service Interested In</FormLabel>
          <FormInput
            as="select"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="tenant-management">Tenant Management</option>
            <option value="property-maintenance">Property Maintenance</option>
            <option value="financial-services">Financial Services</option>
            <option value="consultation">Consultation</option>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Your Message</FormLabel>
          <FormTextarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
        >
          <Send size={20} /> Send Message
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
