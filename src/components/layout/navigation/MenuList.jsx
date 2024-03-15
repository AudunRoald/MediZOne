import { link } from "fs";
import styled from "styled-components";
import "./navigation.css";

const StyledLink = styled(link);

const MenuList = () => {
  return (
    <>
      <ul>
        <StyledLink className="navbarLink" to="/">
          hjem
        </StyledLink>
        <StyledLink to="/Products">produkter</StyledLink>
        <StyledLink to="/About">om medizone</StyledLink>
        <StyledLink to="/ContactUs">kontakt oss</StyledLink>
      </ul>
    </>
  );
};

export default MenuList;
