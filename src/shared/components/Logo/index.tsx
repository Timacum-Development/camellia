import React from "react";
import { LogoWrap, LogoFlower, LogoName } from "./style";

// Assets
import LogoFirst from "../../../assets/logo-flower.png";
import LogoSecond from "../../../assets/camellia-logo.png";
const Logo = () => {
  return (
    <LogoWrap>
      <a href="/">
        <LogoFlower src={LogoFirst} />
      </a>
      <a href="/">
        <LogoName src={LogoSecond} />
      </a>
    </LogoWrap>
  );
};

export default Logo;
