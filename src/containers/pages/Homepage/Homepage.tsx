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
  Shop,
  WhiteBg,
  PurpleLine,
  TextWrap,
  ImageWrap,
  InsideWrap,
  WomanFirst,
  WomanSecond,
  PurpleHeroLine,
  WhiteHeroLine,
  Welcome,
  WelcomeLine,
  LineWrap,
  WelcomeLineSecond,
} from "./style";

// Assets
import Flower1 from "../../../assets/purple-half.png";
import Flower2 from "../../../assets/blue-half.png";
import ShopIcon from "../../../assets/shopping.png";

import CallToAction from "../../../shared/components/CTA";
import SocialMedia from "../../../shared/components/Social";
import Slider from "../../../shared/components/Slider";
import HeadingWrap from "../../../shared/components/Heading";

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
        <PurpleHeroLine />
        <WhiteHeroLine />
      </Hero>
      <Shop>
        <PurpleLine />
        <WhiteBg></WhiteBg>
        <InsideWrap className="container">
          <TextWrap>
            <HeadingWrap
              headingFirst="Camellia Flower Shop"
              headingSecond="With love and dedication"
              styleFirst={{ color: "#1D446E", maxWidth: "415px" }}
              styleSecond={{ color: "#5697DF", marginBottom: "60px" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat.
            </p>
            <CallToAction cta text="Our shop" />
          </TextWrap>
          <ImageWrap>
            <WomanFirst />
            <WomanSecond />
          </ImageWrap>
        </InsideWrap>
      </Shop>
      <Welcome>
        <LineWrap>
          <WelcomeLine />
          <WelcomeLineSecond />
        </LineWrap>
      </Welcome>
    </React.Fragment>
  );
};

export default Homepage;
