import React from "react";
import style from "./Main.module.css";
import AboutUs from "../AboutUs/AboutUs";
import News from "../News/News";

const Main = () => {
  return (
    <div className={style.container}>
      <div className={style.newsSection}>
        <News />
      </div>
      <div className={style.newsSection}>
        <AboutUs />
      </div>
    </div>
  );
};

export default Main;
