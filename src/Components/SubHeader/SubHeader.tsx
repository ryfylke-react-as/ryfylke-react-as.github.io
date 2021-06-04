import { ArrowRight32 } from "@carbon/icons-react";
import { Construct } from "@carbon/pictograms-react";
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import "./SubHeader.scss";

export const SubHeader = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useLayoutEffect(() => {
    const onScroll = () => {
      const nst = document.documentElement.scrollTop;
      if (nst > 0 && nst < 250) {
        setScrollTop(nst);
      }
    };
    document.addEventListener("scroll", onScroll, true);
    console.log("listner added");
    return () => {
      console.log("listner removed");
      document.removeEventListener("scroll", onScroll, true);
    };
  }, []);
  return (
    <div className="SubHeader">
      <Construct
        className="picto"
        style={{ "--scrollTop": scrollTop } as CSSProperties}
      />
      <h2>
        Ditt produkt <ArrowRight32 /> <strong>neste nivå</strong>.
      </h2>
    </div>
  );
};

export default SubHeader;
