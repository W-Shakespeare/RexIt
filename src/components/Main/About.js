import React from "react";
import crackerImg1 from "../../img/crackerImg1.png";

export const About = () => {
  return (
    <article className="about">
      <div className="about__img">
        <img src={crackerImg1} alt="cracker" />
      </div>
      <div className="column">
        <h2 className="title about__title">ABOUT CRACKER</h2>
        <div className="about__description">
          <div className="wrapper">
            <div className="about__text">
              <p className="text about__p1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, architecto beatae vitae dicta
                sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </div>
        <div className="about__logo">Cracker</div>
      </div>
    </article>
  );
};
