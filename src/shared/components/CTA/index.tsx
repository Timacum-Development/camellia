import React from "react";
import { CtaFirst, CtaSecond } from "./style";

const CallToAction = (props: any) => {
  const { first, second, text, style } = props;
  return (
    <React.Fragment>
      {first ? (
        <CtaFirst style={style} className="cta">
          {text}
        </CtaFirst>
      ) : (
        !first &&
        second(
          <CtaSecond style={style} className="cta">
            {text}
          </CtaSecond>
        )
      )}
    </React.Fragment>
  );
};

export default CallToAction;
