import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 10vh;
  background-color: ${(props) => props.theme.blue};
  display: flex;
  justify-content: flex-end;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  list-style: none;
  color: ${(props) => props.theme.white};
  font-size: 25px;
  padding: 0 50px 0 0;
`;

const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
`;
const Header = () => {
  return (
    <Wrapper>
      <NavWrapper>
        <LinkStyle to="/">
          <li>Home</li>
        </LinkStyle>
        <LinkStyle to="/About">
          <li>About</li>
        </LinkStyle>
        <LinkStyle to="/LogIn">
          <li>Log in</li>
        </LinkStyle>
      </NavWrapper>
    </Wrapper>
  );
};

export default Header;
