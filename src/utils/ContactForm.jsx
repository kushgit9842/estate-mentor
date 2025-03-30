import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Animated from "../components/common/Animated";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

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
  const form = useRef();
  const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState({ type: "", message: "" });

  const [toastStatus, setToastStatus] = useState(null);

  const [formData, setFormData] = useState({
    assist_type: "",
    property_type: "",
    location: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToastStatus("loading");

    try {
      const result = await emailjs.sendForm(
        "service_mhlbo14",
        "template_2sh2x3b",
        form.current,
        "nKbomdejqxFGQm6aI"
      );

      if (result.text === "OK") {
        setToastStatus("success");

        form.current.reset();
        setFormData({
          assistType: "",
          propertyType: "",
          location: "",
          name: "",
          phone: "",
          email: "",
        });

        setTimeout(() => {
          setToastStatus(null);
          form.current.reset();
        }, 2000);
      }
    } catch (error) {
      setToastStatus("error");
      setTimeout(() => {
        setToastStatus(null);
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      detail: "Indranagar , Bangalore",
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
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* {status.message && alert(status.message)} */}
        <FormGroup>
          <FormInput
            as="select"
            name="assist_type"
            value={formData.assist_type}
            onChange={handleChange}
            required
          >
            <option value="">Assist me with...</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="sell">Sell</option>
            <option value="evaluation">Evaluation</option>
            <option value="careers">Careers</option>
            <option value="business">Business</option>
            <option value="property">Property</option>
            <option value="other">Other</option>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormInput
            as="select"
            name="property_type"
            value={formData.property_type}
            onChange={handleChange}
            required
          >
            <option value="">Select property type...</option>
            <option value="apartment">Apartment</option>
            <option value="commercial">Commercial</option>
            <option value="independent">Independent House</option>
            <option value="lands">Lands</option>
            <option value="plots">Residential Plots</option>
            <option value="villa">Row House/Villa</option>
            <option value="others">Others</option>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormInput
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormInput
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send size={20} /> Send Message
            </>
          )}
        </SubmitButton>
      </Form>

      <Toast
        status={toastStatus}
        message={
          toastStatus === "loading"
            ? "Sending message..."
            : toastStatus === "success"
            ? "Message sent successfully!"
            : toastStatus === "error"
            ? "Failed to send message"
            : ""
        }
        onClose={() => setToastStatus(null)}
      />
    </FormContainer>
  );
};

export default ContactForm;
