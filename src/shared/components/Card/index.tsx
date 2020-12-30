import React from "react";
import {
  FlowerCard,
  FlowerImg,
  FlowerText,
  IconWrap,
  FlowerName,
  FlowerPrice,
  BuyNow,
  BuyImg,
} from "./style";

const Card = (props: any) => {
  const {
    text,
    textSecond,
    flowerUrl,
    buy,
    styleFlower,
    buyBag,
    styleBuy,
  } = props;
  return (
    <React.Fragment>
      <FlowerCard>
        <FlowerImg src={flowerUrl} style={styleFlower} />
        <FlowerText>
          <FlowerName>{text}</FlowerName>
          <FlowerPrice>{textSecond}</FlowerPrice>
        </FlowerText>
        <IconWrap>
          <a href="/">
            <BuyImg src={buyBag} />
          </a>
          <BuyNow style={styleBuy}>{buy}</BuyNow>
        </IconWrap>
      </FlowerCard>
    </React.Fragment>
  );
};

export default Card;
