import React from "react";
import { HeadingWrapper } from "./style";

const HeadingWrap = (props: any) => {
  const { headingFirst, headingSecond, styleFirst, styleSecond, style } = props;
  return (
    <HeadingWrapper style={style}>
      <h2 style={styleFirst}>{headingFirst}</h2>
      <h4 style={styleSecond}>{headingSecond}</h4>
    </HeadingWrapper>
  );
};

export default HeadingWrap;
