import React from "react";
import styled from "styled-components";

import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const Wrapper = styled.div`
  height: 30vh;
  background-color: ${(props) => props.theme.blue};
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  display: inline-grid;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
`;

const ContactItems = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Items>
        <ContactItems>
          <PhoneIphoneIcon fontSize="large" />
        </ContactItems>
        <ContactItems>
          <MailOutlineOutlinedIcon fontSize="large" />
        </ContactItems>
        <ContactItems>
          <RoomOutlinedIcon fontSize="large" />
        </ContactItems>
      </Items>
      <Items></Items>
      <Items></Items>
    </Wrapper>
  );
};
export default Footer;
