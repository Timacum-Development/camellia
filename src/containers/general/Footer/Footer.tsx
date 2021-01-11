import React from "react";
import { FooterWrap, FooterInfo, FooterNav } from "./style";

import Logo from "../../../shared/components/Logo";
import SocialMedia from "../../../shared/components/Social";
import Link from "../../../shared/components/Link";

const Footer = () => {
  return (
    <FooterWrap>
      <SocialMedia />
      <FooterInfo>
        <Logo
          style={{ flexDirection: "row-reverse", marginBottom: "43px" }}
          styleName={{ marginRight: "11px" }}
        />
        <FooterNav>
          <ul>
            <li>
              <Link text="Home" />
            </li>
            <li>
              <Link text="Shop" />
            </li>
            <li>
              <Link text="Products" />
            </li>
            <li>
              <Link text="Services" />
            </li>
            <li>
              <Link text="Contact" />
            </li>
          </ul>
        </FooterNav>
      </FooterInfo>
    </FooterWrap>
  );
};

export default Footer;
