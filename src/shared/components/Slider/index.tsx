import React from "react";
import {
  WhiteSlider,
  BlueSlider,
  PurpleSlider,
  WhiteDot,
  BlueDot,
  PurpleDot,
  WhiteArrowFirst,
  WhiteArrowSecond,
  PurpleArrowFirst,
  PurpleArrowSecond,
  BlueArrowFirst,
  BlueArrowSecond,
} from "./style";

const Slider = (props: any) => {
  const { vertical, horizontal, blueSlider } = props;
  return (
    <React.Fragment>
      {vertical ? (
        <WhiteSlider>
          <WhiteArrowFirst />
          <a href="/">
            <WhiteDot className="dot" />
          </a>
          <a href="/">
            <WhiteDot className="dot" />
          </a>
          <a href="/">
            <WhiteDot className="dot" />
          </a>
          <a href="/">
            <WhiteDot className="dot" />
          </a>
          <a href="/">
            <WhiteDot className="dot" />
          </a>
          <WhiteArrowSecond />
        </WhiteSlider>
      ) : !vertical && horizontal ? (
        <BlueSlider style={blueSlider}>
          <BlueArrowFirst />
          <a href="/">
            <BlueDot className="dot" />
          </a>
          <a href="/">
            <BlueDot className="dot" />
          </a>
          <a href="/">
            <BlueDot className="dot" />
          </a>
          <a href="/">
            <BlueDot className="dot" />
          </a>
          <BlueArrowSecond />
        </BlueSlider>
      ) : (
        <PurpleSlider>
          <PurpleArrowFirst />
          <a href="/">
            <PurpleDot className="dot" />
          </a>
          <a href="/">
            <PurpleDot className="dot" />
          </a>
          <a href="/">
            <PurpleDot className="dot" />
          </a>
          <a href="/">
            <PurpleDot className="dot" />
          </a>
          <PurpleArrowSecond />
        </PurpleSlider>
      )}
    </React.Fragment>
  );
};

export default Slider;
