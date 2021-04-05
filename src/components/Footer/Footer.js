import React from "react";
import { AddressIcon, PhoneIcon } from "../Icons";
import { FooterShareUs } from "./FooterShareUs";
import PropTypes from "prop-types";

export const Footer = ({ footerStyle }) => {
  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer__row">
        <div className="footer__phone footer__item">
          <PhoneIcon />
          <div className="footer__column">
            <div className="footer__title">PHONE</div>
            <div className="footer__body">+43 ( 987 ) 345 - 6782</div>
          </div>
        </div>
        <div className="footer__address footer__item">
          <AddressIcon />
          <div className="footer__column footer__columnAddres">
            <div className="footer__title">ADDRESS</div>
            <div className="footer__body footer__addressBody">
              <p>Cracker Inc.</p>
              <p>10 Cloverfield Lane Berlin, IL 10928 Germany</p>
            </div>
          </div>
        </div>
        <FooterShareUs />
      </div>
    </footer>
  );
};
Footer.propTypes = {
  footerStyle: PropTypes.shape({
    height: PropTypes.string,
    display: PropTypes.string,
  }),
};
