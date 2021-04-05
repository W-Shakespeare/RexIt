import React from "react";
import { TastesContainer } from "../Tastes";
import { About } from "./About";
import { Constructor } from "./Constructor";

export const Main = ({ mainStyle }) => {
  return (
    <>
      <div
        className="tastesBackground"
        style={{ height: mainStyle == "none" ? "calc(100vh - 61px)" : "949px" }}
      ></div>
      <main className="main" style={{ display: mainStyle }}>
        <TastesContainer />
        <section className="cracker">
          <div className="crackerBackground"></div>
          <section className="cracker__column">
            <About />
            <Constructor />
          </section>
        </section>
      </main>
    </>
  );
};
