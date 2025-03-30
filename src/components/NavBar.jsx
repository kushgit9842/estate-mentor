import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import ThemeToggle from "../utils/ThemeToggle";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  gap: 0.5rem;
`;

const LogoIcon = styled(Home)`
  color: var(--color-primary);
  transition: color 0.3s ease;
  margin: auto 0;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  transition: color 0.3s ease;
  margin: auto 0;

  span {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 300px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5rem 2rem;
    background-color: var(--color-surface);
    box-shadow: var(--shadow-lg);
    transition: right 0.3s ease;
    z-index: 100;
    gap: 1.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--color-primary);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: var(--color-primary);

    &::after {
      width: 100%;
    }
  }

  &.active {
    color: var(--color-primary);

    &::after {
      width: 100%;
    }
  }
`;

const ThemeToggleWrapper = styled.div`
  margin-left: 1rem;
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  z-index: 200;

  &:hover {
    color: var(--color-primary);
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-overlay);
    z-index: 90;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Property Management", path: "/property-management" },
    { title: "Partner With Us", path: "/partner-with-us" },
    { title: "Real Estate Consultant", path: "/real-estate-consultant" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <Nav>
      <NavContainer>
        <LogoContainer to="/">
          <LogoIcon size={31} />
          <LogoText>
            Estate<span>Mentor</span>
          </LogoText>
        </LogoContainer>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <StyledNavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </StyledNavLink>
          ))}
        </NavLinks>

        <ThemeToggleWrapper>
          <ThemeToggle />
        </ThemeToggleWrapper>
        <MobileMenuContainer>
          <MobileMenuButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </MobileMenuContainer>

        <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
