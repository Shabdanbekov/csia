import React from "react";
import style from "./Main.module.css";
import AboutUs from "../../pages/AboutUs/AboutUs";
import News from "../../pages/News/News";

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
