import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () : null => {
  const location = useLocation();

  useEffect(() : void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // use "smooth" only if you really want it
    });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
