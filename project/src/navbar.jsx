import React from "react";
import styled from "styled-components";
import logo from "./ESN.png";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  color: black;
`;

const Icon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dropdown = styled.div`
  position: relative;
  margin-left: 30px; /* Increased the gap between the dropdowns */
  display: flex;
  align-items: center;
  cursor: pointer;

  /* Show the dropdown menu when hovered */
  &:hover .dropdown-menu {
    display: block;
  }
`;

const DropdownText = styled.span`
  font-size: 20px;
  margin-right: 8px; /* Space between text and icon */
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  color: black;
  background-color: #f8f9fa;
  min-width: 160px;
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0);
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: black;
  font-size: 18px;
  &:hover {
    background-color: #f1f1f1; /* Slightly darker hover effect for clarity */
  }
`;

const SvgIcon = styled.svg`
  width: 20px; /* Adjust the size of the icon as needed */
  height: 20px;
  fill: currentColor; /* Use current text color for the SVG */
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Left Side Icon */}
      <Link to="https://motzoubi.github.io/RandD.io/"> 
        <Icon>
          <img
            src={logo}
            alt='Logo'
            style={{ maxWidth: "150px", marginBottom: "1rem" }}
          />
        </Icon>
      </Link>

      {/* Right Side Dropdowns */}
      <DropdownContainer>
        <Dropdown>
          <DropdownText>Service Introduction</DropdownText>
          <SvgIcon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M12 16l-6-6h12z'></path> {/* Example icon */}
          </SvgIcon>
          <DropdownMenu className='dropdown-menu'>
            <DropdownItem>Laboratory</DropdownItem>
            <DropdownItem>Enterprise</DropdownItem>
            <DropdownItem>How to use</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownText>Free Trial</DropdownText>
          <SvgIcon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M12 16l-6-6h12z'></path> {/* Example icon */}
          </SvgIcon>
          <DropdownMenu className='dropdown-menu'>
            <DropdownItem>search labs</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownText>Inquiry for use</DropdownText>
          <SvgIcon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M12 16l-6-6h12z'></path> {/* Example icon */}
          </SvgIcon>
          <DropdownMenu className='dropdown-menu'>
            <DropdownItem>Online Meeting</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownText>Login/Sign up</DropdownText>
         
        </Dropdown>
      </DropdownContainer>
    </NavbarContainer>
  );
};

export default Navbar;
