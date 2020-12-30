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
    stylePrice,
  } = props;
  return (
    <React.Fragment>
      <FlowerCard>
        <FlowerImg src={flowerUrl} style={styleFlower} />
        <FlowerText>
          <FlowerName>{text}</FlowerName>
          <FlowerPrice style={stylePrice}>{textSecond}</FlowerPrice>
        </FlowerText>
        <IconWrap>
          <a href="/">
            <BuyImg src={buyBag} />
          </a>
          <BuyNow>{buy}</BuyNow>
        </IconWrap>
      </FlowerCard>
    </React.Fragment>
  );
};

export default Card;
