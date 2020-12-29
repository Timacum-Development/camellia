import React from "react";
import { CtaFirst, CtaSecond, CtaThird } from "./style";

const CallToAction = (props: any) => {
  const { first, cta, text, style } = props;
  return (
    <React.Fragment>
      {first ? (
        <CtaFirst style={style} className="cta">
          {text}
        </CtaFirst>
      ) : !first && cta ? (
        <CtaSecond className="cta">{text}</CtaSecond>
      ) : (
        <CtaThird className="cta">{text}</CtaThird>
      )}
    </React.Fragment>
  );
};

export default CallToAction;
