import React from "react";
import { FooterLink } from "./style";

const Link = (props: any) => {
  const { text } = props;
  return <FooterLink>{text}</FooterLink>;
};

export default Link;
