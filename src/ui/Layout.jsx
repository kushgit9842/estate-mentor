import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import PageTransition from "../utils/PageTransition";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  /* padding: 2rem; */
  background-color: var(--color-bg);
  transition: background-color 0.3s ease;
`;

const Layout = () => {
  return (
    <PageTransition>
      <LayoutContainer>
        <NavBar />

        <MainContent>
          <Outlet />
        </MainContent>

        <Footer />
      </LayoutContainer>
    </PageTransition>
  );
};

export default Layout;
