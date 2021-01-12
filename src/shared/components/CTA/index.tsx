import React from "react";
import { CtaFirst, CtaSecond, CtaThird } from "./style";

const CallToAction = (props: any) => {
  const { first, cta, text, style } = props;
  return (
    <React.Fragment>
      {first ? (
        <CtaFirst style={style} className="cta" href="/">
          {text}
        </CtaFirst>
      ) : !first && cta ? (
        <CtaSecond className="cta" href="/">
          {text}
        </CtaSecond>
      ) : (
        <CtaThird className="cta" href="/">
          {text}
        </CtaThird>
      )}
    </React.Fragment>
  );
};

export default CallToAction;
