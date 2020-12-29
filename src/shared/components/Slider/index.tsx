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
} from "./style";

const Slider = (props: any) => {
  const { vertical, horizontal } = props;
  return (
    <React.Fragment>
      {vertical ? (
        <WhiteSlider>
          <WhiteArrowFirst />
          <WhiteDot className="dot" />
          <WhiteDot className="dot" />
          <WhiteDot className="dot" />
          <WhiteDot className="dot" />
          <WhiteDot className="dot" />
          <WhiteArrowSecond />
        </WhiteSlider>
      ) : !vertical && horizontal ? (
        <BlueSlider>
          <BlueDot className="dot" />
          <BlueDot className="dot" />
          <BlueDot className="dot" />
          <BlueDot className="dot" />
        </BlueSlider>
      ) : (
        <PurpleSlider>
          <PurpleDot className="dot" />
          <PurpleDot className="dot" />
          <PurpleDot className="dot" />
          <PurpleDot className="dot" />
        </PurpleSlider>
      )}
    </React.Fragment>
  );
};

export default Slider;
