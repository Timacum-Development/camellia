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
  WelcomeText,
  Gallery,
  Garden,
  Room,
  GallerySlider,
  WelcomePurpleLine,
  WomanLine,
  WomanLineSecond,
  Service,
  Customers,
  CustomerImg,
  CustomerText,
  Quote,
  CustomerLine,
} from "./style";

// Assets
import Flower1 from "../../../assets/purple-half.png";
import Flower2 from "../../../assets/blue-half.png";
import ShopIcon from "../../../assets/shopping.png";
import QuoteImg from "../../../assets/quote.png";

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
          <WomanLineSecond />
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
          <WomanLine />
        </InsideWrap>
      </Shop>
      <Welcome>
        <LineWrap>
          <WelcomeLine />
        </LineWrap>
        <WelcomeText>
          <HeadingWrap
            headingFirst="Welcome to Our Shops"
            headingSecond="Located in US & Australia"
            styleFirst={{ color: "#601f6b", textAlign: "center" }}
            styleSecond={{
              color: "#9E40AE",
              opacity: "0.5",
              textAlign: "center",
              marginBottom: "59px",
            }}
          />
          <CallToAction text="Shop Locator" />
        </WelcomeText>
        <Gallery>
          <GallerySlider>
            <Room />
            <Slider />
          </GallerySlider>
          <Garden />
        </Gallery>
        <WelcomePurpleLine />
      </Welcome>
      <Service>
        <CustomerLine />
        <Customers>
          <CustomerImg />
          <CustomerText>
            <h3>
              Camellia recognizes that flower is the most eligible object in the
              world.
            </h3>
            <h5>by Samantha Johnson</h5>
            <Quote src={QuoteImg} />
            <Slider horizontal />
          </CustomerText>
        </Customers>
      </Service>
    </React.Fragment>
  );
};

export default Homepage;
