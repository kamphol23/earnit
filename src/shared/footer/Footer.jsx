import React from "react";
import styled from "styled-components";

import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const Wrapper = styled.div`
  height: 500px;
  background-color: ${(props) => props.theme.blue};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: inline-grid;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
`;

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Text = styled.p`
  color: ${(props) => props.theme.white};
  fontsize: 10rem;
`;

const ContactItems = styled.div`
  text-align: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Items>
        <ContactWrapper>
          <ContactItems>
            <PhoneIphoneIcon fontSize="large" />
            <Text> +46 * ** ** ** **</Text>
          </ContactItems>
          <ContactItems>
            <MailOutlineOutlinedIcon fontSize="large" />
            <Text> Earnit@gmail.com </Text>
          </ContactItems>
          <ContactItems>
            <RoomOutlinedIcon fontSize="large" />
            <Text> Syster Edstrids gata 11</Text>
          </ContactItems>
        </ContactWrapper>
      </Items>
      <Items>
        <ContactItems>
          <p> About</p>
        </ContactItems>
        <div></div>
        <div></div>
      </Items>
      <Items> </Items>
    </Wrapper>
  );
};
export default Footer;
