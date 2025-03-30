import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Upload,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { animations } from "../../config/animations";

// Styled Components
const SectionContainer = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-surface);
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: var(--text-4xl);
  color: var(--color-text);
  text-align: center;
  margin-bottom: var(--spacing-3xl);

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`;

const TestimonialsContainer = styled.div`
  position: relative;
  padding: 0 var(--spacing-xl);
`;

const TestimonialCard = styled(motion.div)`
  background-color: var(--color-bg);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: var(--spacing-xl);
  right: var(--spacing-xl);
  color: var(--color-primary);
  opacity: 0.1;
  transform: scale(2);
`;

const TestimonialContent = styled.div`
  position: relative;
  z-index: 1;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
`;

const UserImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-primary);
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.h4`
  color: var(--color-text);
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
`;

const UserRole = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
`;

const Rating = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const ReviewText = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
`;

const ReviewDate = styled.span`
  color: var(--color-text-muted);
  font-size: var(--text-sm);
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-surface);
  color: var(--color-text);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all var(--transition-medium);
  z-index: 2;

  &:hover {
    background-color: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }
`;

const AddTestimonialButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin: var(--spacing-2xl) auto 0;
  font-weight: 600;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: var(--color-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--spacing-md);
`;

const ModalContent = styled(motion.div)`
  background-color: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  width: 100%;
  max-width: 600px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  color: var(--color-text-secondary);
  padding: var(--spacing-sm);

  &:hover {
    color: var(--color-primary);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const Label = styled.label`
  color: var(--color-text);
  font-weight: 500;
`;

const Input = styled.input`
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg);
  color: var(--color-text);

  &:focus {
    border-color: var(--color-primary);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg);
  color: var(--color-text);
  min-height: 150px;
  resize: vertical;

  &:focus {
    border-color: var(--color-primary);
    outline: none;
  }
`;

const ImageUpload = styled.div`
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-medium);

  &:hover {
    border-color: var(--color-primary);
  }
`;

const RatingSelect = styled.div`
  display: flex;
  gap: var(--spacing-sm);
`;

const StarButton = styled.button`
  background: none;
  color: ${(props) =>
    props.selected ? "var(--color-primary)" : "var(--color-text-muted)"};
  transition: all var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    transform: scale(1.1);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 600;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Property Owner",
    image: "/api/placeholder/user1.jpg",
    rating: 5,
    text: "Working with this property management team has been incredible. They've transformed how I handle my rental properties, making everything seamless and stress-free.",
    date: "January 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Real Estate Investor",
    image: "/api/placeholder/user2.jpg",
    rating: 5,
    text: "The level of professionalism and attention to detail is outstanding. They've helped me maximize my property's potential while providing excellent tenant management.",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Emily Martinez",
    role: "Homeowner",
    image: "/api/placeholder/user3.jpg",
    rating: 5,
    text: "I couldn't be happier with their service. The team is responsive, proactive, and truly cares about maintaining the quality of my property.",
    date: "March 2024",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);
  const [imagePreview, setImagePreview] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setIsModalOpen(false);
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <Title
          initial={animations.slideDown.initial}
          whileInView={animations.slideDown.whileInView}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </Title>

        <TestimonialsContainer>
          <NavigationButton
            className="prev"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronLeft size={24} />
          </NavigationButton>

          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <QuoteIcon>
                <Quote size={48} />
              </QuoteIcon>
              <TestimonialContent>
                <UserInfo>
                  <UserImage
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                  />
                  <UserDetails>
                    <UserName>{testimonials[currentIndex].name}</UserName>
                    <UserRole>{testimonials[currentIndex].role}</UserRole>
                  </UserDetails>
                </UserInfo>
                <Rating>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </Rating>
                <ReviewText>{testimonials[currentIndex].text}</ReviewText>
                <ReviewDate>{testimonials[currentIndex].date}</ReviewDate>
              </TestimonialContent>
            </TestimonialCard>
          </AnimatePresence>

          <NavigationButton
            className="next"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronRight size={24} />
          </NavigationButton>
        </TestimonialsContainer>

        <AddTestimonialButton
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Share Your Experience
        </AddTestimonialButton>

        <AnimatePresence>
          {isModalOpen && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ModalContent
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <CloseButton onClick={() => setIsModalOpen(false)}>
                  <X size={24} />
                </CloseButton>

                <h3
                  style={{
                    marginBottom: "var(--spacing-xl)",
                    color: "var(--color-text)",
                  }}
                >
                  Share Your Testimonial
                </h3>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Your Name</Label>
                    <Input type="text" required />
                  </FormGroup>

                  <FormGroup>
                    <Label>Your Role</Label>
                    <Input type="text" required />
                  </FormGroup>

                  <FormGroup>
                    <Label>Your Rating</Label>
                    <RatingSelect>
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <StarButton
                          key={rating}
                          type="button"
                          selected={rating <= selectedRating}
                          onClick={() => setSelectedRating(rating)}
                        >
                          <Star
                            size={24}
                            fill={
                              rating <= selectedRating ? "currentColor" : "none"
                            }
                          />
                        </StarButton>
                      ))}
                    </RatingSelect>
                  </FormGroup>

                  <FormGroup>
                    <Label>Your Review</Label>
                    <Textarea required />
                  </FormGroup>

                  <FormGroup>
                    <Label>Your Photo</Label>
                    <ImageUpload>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        style={{ cursor: "pointer" }}
                      >
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              margin: "0 auto",
                              display: "block",
                            }}
                          />
                        ) : (
                          <div>
                            <Upload
                              size={32}
                              style={{
                                marginBottom: "var(--spacing-md)",
                                opacity: 0.5,
                              }}
                            />
                            <p style={{ color: "var(--color-text-secondary)" }}>
                              Click or drag an image to upload
                            </p>
                          </div>
                        )}
                      </label>
                    </ImageUpload>
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Testimonial
                  </SubmitButton>
                </Form>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default TestimonialsSection;
