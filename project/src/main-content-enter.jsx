import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; // Using styled-components for easier styling

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3); /* Slight background for the whole container */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
//   opacity: 0.3; /* Set the opacity to 40% */
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(161, 161, 161, 0.1);
  max-width: 80%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0.5rem 0;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin: 1rem 0;
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const MainComponent = () => {
  return (
    <CardContainer>
      <Card>
        <div>
          <Title>
          AI-based, enterprise-tailored
          </Title>
          <Title>
          R&D Partner Matching Platform
            <Paragraph>
            Use the service
            </Paragraph>
          </Title>
        </div>

        <div>
          <Paragraph>
            Integrated R&D solution to maximize utilization 
            </Paragraph>
            <Paragraph>
            of research results
            from the laboratory
          </Paragraph>
        </div>

        <div>
          <Button href="https://motzoubi.github.io/RandD.io/prof" rel="noopener">
            Use the service
          </Button>
        </div>

      </Card>
    </CardContainer>
  );
};

export default MainComponent;
