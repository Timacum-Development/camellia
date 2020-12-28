import React from "react";
import { HeaderWrap, Burger, BurgerLine } from "./style";

import Logo from "../../../shared/components/Logo";

const Header = () => {
  return (
    <React.Fragment>
      <HeaderWrap>
        <Logo />
        <Burger>
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </Burger>
      </HeaderWrap>
    </React.Fragment>
  );
};

export default Header;
