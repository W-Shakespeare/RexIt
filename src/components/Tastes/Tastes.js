import React from "react";
import PropTypes from "prop-types";

export const Tastes = ({ styleBtn }) => {
  return (
    <section className="tastes">
      <div className="tastes__row">
        <div className="tastes__description">
          <div className="containerText">
            <div className="text tastes__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet,
            </div>
          </div>
        </div>
        <div className="tastes__column">
          <div className="title tastes__title">MOSTLY TASTES WITH FRESHES</div>
          <div className="tastes__button" style={styleBtn}>
            <button>TASTE IT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

Tastes.propTypes = {
  styleBtn: PropTypes.shape({
    display: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
};
