import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Router components
import "./App.css";
import logo from "./feature1.png";
import heroImage from "./feature1.png";
import feature2 from "./academy.png";
// import feature3 from "./enterprise.png";
import Card from "./card";
import Navbar from "./navbar";
import Footer from "./footer";
import RingImageComponent from './ring'; // Import the RingImageComponent
import RingImageComponentEn from './ring-enter'; // Import the RingImageComponent
import ProfFridman from "./ProfFridman";

const Header = styled(motion.header)`
  background-color: #f8f9fa;
  padding: 2rem 0;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const NavLink = styled.div`
  cursor: pointer;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
`;

const HeroSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .hero-content {
    position: relative;
    z-index: 2;
    padding: 4rem;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  
  h2 {
    margin-bottom: 2rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.8fr));
  gap: 0; /* Minimal gap between items */
  padding: 0 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FeatureCard1 = styled.div`
  perspective: 1000px;
  width: 25vw;
  height: 40vh;
  margin: 0 auto;
`;

const FeatureCard2 = styled.div`
  perspective: 1000px;
  width: 25vw;
  height: 40vh;
  margin: 0 auto;
`;

const FeatureInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  position: relative;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const FeatureFace = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
`;

const FeatureFront = styled(FeatureFace)`
  background-color: white;
`;

const FeatureBack = styled(FeatureFace)`
  background-color: #007bff;
  color: white;
  transform: rotateY(180deg);
`;

function App() {
  return (
    <Router basename="/RandD.io" >
      <div className="app-container">
        <Navbar />

        {/* Add a navigation link to the Ring page */}
        {/* <Nav>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/ring">Ring Image</Link>
          </NavLink>
        </Nav> */}

       

        {/* Define Routes */}
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/ring" element={<RingImageComponent />} />
  <Route path="/ring2" element={<RingImageComponentEn />} />
  <Route path="/prof" element={<ProfFridman />} />

</Routes>

        {/* Uncomment if you want to use the footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

// A simple Home component
const Home = () => {
  return  <FeaturesSection>
  <h2 style={{ fontSize: "48px", marginBottom: "0px" }}>
    R&D Partner Matching Platform
  </h2>
  <h2>ESN:AI</h2>
  <FeatureGrid>
    <FeatureCard1>
      <Card
        image={feature2}
        title="Laboratory"
        description="Laboratory services shortcut"
      />
    </FeatureCard1>
    <FeatureCard2>
      <Card
        image={feature2}
        title="Enterprise"
        description="Corporate Services Shortcut"
      />
    </FeatureCard2>
  </FeatureGrid>
</FeaturesSection>;
};

export default App;
