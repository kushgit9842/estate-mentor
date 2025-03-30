import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Building,
  Hammer,
  DollarSign,
  MessageCircle,
} from "lucide-react";

const TabContainer = styled.div`
  background-color: var(--color-bg-secondary);
  padding: var(--spacing-3xl) var(--spacing-xl);
`;

const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TabButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: ${(props) =>
    props.active ? "var(--color-primary)" : "var(--color-surface)"};
  color: ${(props) => (props.active ? "white" : "var(--color-text-secondary)")};
  border: 1px solid
    ${(props) =>
      props.active ? "var(--color-primary)" : "var(--color-border-light)"};
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    color: #ffffff;
  }
`;

const TabContent = styled(motion.div)`
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: var(--spacing-xl);
  }
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const ContentTitle = styled.h2`
  font-size: var(--text-2xl);
  color: var(--color-text);
`;

const ContentDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const ImagePlaceholder = styled.div`
  /* background-color: var(--color-bg-secondary); */
  border-radius: var(--radius-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  overflow: hidden;
`;

const QueryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      icon: Users,
      title: "Tenant Queries",
      description:
        "Get quick answers about tenant screening, lease management, and tenant communication strategies.",
      image: "/api/placeholder/tenant.svg",
    },
    {
      icon: Building,
      title: "Property Management",
      description:
        "Explore comprehensive solutions for property maintenance, occupancy optimization, and legal compliance.",
      image: "/api/placeholder/tenant.svg",
    },
    {
      icon: Hammer,
      title: "Maintenance Support",
      description:
        "Learn about our proactive maintenance approach, emergency response, and property preservation techniques.",
      image: "/api/placeholder/tenant.svg",
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description:
        "Understand rent collection, financial reporting, expense tracking, and maximizing property investment returns.",
      image: "/api/placeholder/tenant.svg",
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description:
        "Discover our communication protocols, client relationship management, and support channels.",
      image: "/api/placeholder/tenant.svg",
    },
  ];

  return (
    <TabContainer>
      <TabNavigation>
        {tabData.map((tab, index) => (
          <TabButton
            key={tab.title}
            active={activeTab === index ? 1 : 0}
            onClick={() => setActiveTab(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon size={20} />
            {tab.title}
          </TabButton>
        ))}
      </TabNavigation>

      <AnimatePresence mode="wait">
        <TabContent
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ContentText>
            <ContentTitle>{tabData[activeTab].title}</ContentTitle>
            <ContentDescription>
              {tabData[activeTab].description}
            </ContentDescription>
          </ContentText>

          <ImagePlaceholder>
            <img
              src={tabData[activeTab].image}
              alt={tabData[activeTab].title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </ImagePlaceholder>
        </TabContent>
      </AnimatePresence>
    </TabContainer>
  );
};

export default QueryTabs;
