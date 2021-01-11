import React from "react";
import { LogoWrap, LogoFlower, LogoName } from "./style";

// Assets
import LogoFirst from "../../../assets/logo-flower.png";
import LogoSecond from "../../../assets/camellia-logo.png";
const Logo = (props: any) => {
  const { style, styleName } = props;
  return (
    <LogoWrap style={style}>
      <a href="/">
        <LogoFlower src={LogoFirst} />
      </a>
      <a href="/">
        <LogoName src={LogoSecond} style={styleName} />
      </a>
    </LogoWrap>
  );
};

export default Logo;
