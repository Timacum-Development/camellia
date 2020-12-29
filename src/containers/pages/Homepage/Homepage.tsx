import React from "react";
import {
  Hero,
  HeroIntro,
  FlowerWrap,
  PinkFlower,
  BlueFlower,
  CtaWrap,
  SideWrap,
  SideIcon,
  FirstLine,
  SecondLine,
} from "./style";

// Assets
import Flower1 from "../../../assets/purple-half.png";
import Flower2 from "../../../assets/blue-half.png";
import ShopIcon from "../../../assets/shopping.png";

import CallToAction from "../../../shared/components/CTA";
import SocialMedia from "../../../shared/components/Social";
import Slider from "../../../shared/components/Slider";
import { FILE } from "dns";
const Homepage = () => {
  return (
    <React.Fragment>
      <Hero>
        <Slider vertical />
        <FirstLine />
        <FlowerWrap>
          <PinkFlower src={Flower1} />
          <BlueFlower src={Flower2} />
        </FlowerWrap>
        <SecondLine />
        <HeroIntro>
          <h1>Dahlia</h1>
          <h4>Fresh & Silky Daily</h4>
          <CtaWrap>
            <CallToAction
              first
              text="Buy now"
              style={{ marginRight: "48px" }}
            />
            <h6>From $12.95</h6>
          </CtaWrap>
        </HeroIntro>
        <SideWrap>
          <SocialMedia />
          <a href="/">
            <SideIcon src={ShopIcon} />
          </a>
        </SideWrap>
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
