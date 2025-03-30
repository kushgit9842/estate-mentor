import React, { useState } from "react";
import styled from "styled-components";
import {
  X,
  Send,
  RotateCcw,
  Home,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  User,
  IndianRupee,
} from "lucide-react";
import Animated from "../common/Animated";

const FormSection = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg);
  min-height: 80vh;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-secondary);
`;

const FormContainer = styled.div`
  /* width: min(90%, 800px); */
  width: 100%;

  /* margin: 0 auto; */
  padding: var(--spacing-2xl);
  /* background-color: var(--color-surface); */
  border-radius: var(--radius-lg);
  /* box-shadow: var(--shadow-lg); */
  /* border: 1px solid var(--color-border-light); */
  /* border: 2px solid red; */
`;

const Form = styled.form`
  display: grid;
  gap: var(--spacing-xl);
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  /* border: 1px solid white; */
  min-width: 50vw;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const Label = styled.label`
  color: var(--color-text);
  font-weight: 500;
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const Input = styled.input`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-bg);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text);
  font-size: var(--text-base);
  transition: all var(--transition-fast);
  padding-left: 2.5rem;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
    outline: none;
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })`
  resize: vertical;
  min-height: 120px;
  padding-left: var(--spacing-lg);
`;

const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
    pointer-events: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--text-base);
  transition: all var(--transition-medium);
  flex: 1;

  svg {
    transition: transform var(--transition-medium);
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SubmitButton = styled(Button)`
  background-color: var(--color-primary);
  color: white;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const ResetButton = styled(Button)`
  background-color: var(--color-surface-secondary);
  color: var(--color-text);
  border: 2px solid var(--color-border);

  &:hover {
    background-color: var(--color-bg);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

const ErrorMessage = styled.span`
  color: var(--color-error);
  font-size: var(--text-sm);
  margin-top: var(--spacing-xs);
`;

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    expectedRent: "",
    additionalDetails: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.propertyAddress.trim())
      newErrors.propertyAddress = "Property address is required";
    if (!formData.expectedRent.trim()) {
      newErrors.expectedRent = "Expected rent is required";
    } else if (isNaN(formData.expectedRent)) {
      newErrors.expectedRent = "Must be a valid number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      propertyAddress: "",
      expectedRent: "",
      additionalDetails: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <FormSection>
      <Animated animation="fadeInScale">
        <FormContainer>
          <Form onSubmit={handleSubmit} noValidate>
            <InputGroup>
              <FormField>
                <Label>
                  <User size={18} /> Full Name
                </Label>
                <InputWrapper>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </InputWrapper>
                {errors.fullName && (
                  <ErrorMessage>{errors.fullName}</ErrorMessage>
                )}
              </FormField>

              <FormField>
                <Label>
                  <Mail size={18} /> Email Address
                </Label>
                <InputWrapper>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your_email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </InputWrapper>
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormField>
            </InputGroup>

            <InputGroup>
              <FormField>
                <Label>
                  <Phone size={18} /> Phone Number
                </Label>
                <InputWrapper>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+91 12345 67890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </InputWrapper>
                {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
              </FormField>

              <FormField>
                <Label>
                  <IndianRupee size={18} /> Expected Monthly Rent
                </Label>
                <InputWrapper>
                  <Input
                    type="text"
                    name="expectedRent"
                    placeholder="2000"
                    value={formData.expectedRent}
                    onChange={handleChange}
                  />
                </InputWrapper>
                {errors.expectedRent && (
                  <ErrorMessage>{errors.expectedRent}</ErrorMessage>
                )}
              </FormField>
            </InputGroup>

            <FormField>
              <Label>
                <MapPin size={18} /> Property Address
              </Label>
              <InputWrapper>
                <Input
                  type="text"
                  name="propertyAddress"
                  placeholder="Property Address"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                />
              </InputWrapper>
              {errors.propertyAddress && (
                <ErrorMessage>{errors.propertyAddress}</ErrorMessage>
              )}
            </FormField>

            <FormField>
              <Label>
                <Home size={18} /> Additional Property Details
              </Label>
              <TextArea
                name="additionalDetails"
                placeholder="Please provide any additional details about your property..."
                value={formData.additionalDetails}
                onChange={handleChange}
              />
            </FormField>

            <ButtonGroup>
              <SubmitButton type="submit">
                Submit Property <Send size={18} />
              </SubmitButton>
              <ResetButton type="button" onClick={handleReset}>
                Reset Form <RotateCcw size={18} />
              </ResetButton>
            </ButtonGroup>
          </Form>
        </FormContainer>
      </Animated>
    </FormSection>
  );
};

export default PartnerForm;
