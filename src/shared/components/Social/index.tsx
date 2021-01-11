import React from "react";
import { SocialWrap, SocialIcon } from "./style";

// Assets
import Twitter from "../../../assets/twitter.png";
import Facebook from "../../../assets/facebook.png";
import Pinterest from "../../../assets/pinterest.png";

const SocialMedia = (props: any) => {
  const { style } = props;
  return (
    <SocialWrap style={style}>
      <a href="/" className="icon">
        <SocialIcon src={Twitter} />
      </a>
      <a href="/" className="icon">
        <SocialIcon src={Facebook} />
      </a>
      <a href="/" className="icon">
        <SocialIcon src={Pinterest} />
      </a>
    </SocialWrap>
  );
};

export default SocialMedia;
