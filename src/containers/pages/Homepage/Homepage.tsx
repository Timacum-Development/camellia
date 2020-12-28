import React from "react";
import {
  Hero,
  HeroIntro,
  FlowerWrap,
  PinkFlower,
  BlueFlower,
  CtaWrap,
} from "./style";

// Assets
import Flower1 from "../../../assets/purple-half.png";
import Flower2 from "../../../assets/blue-half.png";

import CallToAction from "../../../shared/components/CTA";

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero>
        <FlowerWrap>
          <PinkFlower src={Flower1} />
          <BlueFlower src={Flower2} />
        </FlowerWrap>
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
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
