import React from "react";
import {
  ShareUsIcon,
  PinterestIcon,
  FacebookIcon,
  GoogleIcon,
} from "../../Icons";

export const FooterShareUs = () => {
  return (
    <div className="footer__shareUs footer__item">
      <ShareUsIcon />
      <div className="footer__column shareUsColumn">
        <div className="footer__title">SHARE US</div>
        <div className="footer__body">
          <div className="linkItem">
            <PinterestIcon />
            <div className="link">https://www.pinterest.com/</div>
          </div>
          <div className="linkItem">
            <FacebookIcon />
            <div className="link">https://www.facebook.com/</div>
          </div>
          <div className="linkItem">
            <GoogleIcon />
            <div className="link">https://www.google.com/</div>
          </div>
        </div>
      </div>
    </div>
  );
};
