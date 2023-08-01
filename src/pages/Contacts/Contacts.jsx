import React from "react";
import style from "./Contacts.module.css";
import { Link } from "react-router-dom";

const Contacts = () => {
  const contacts = [
    {
      url: "https://kirgiz-index.5balov.net/gorod/bishkek-720047/",
      text: "720047, Кыргызстан",
    },
    {
      url: "https://2gis.kg/bishkek/firm/70000001033286481",
      text: "г. Бишкек, Фрунзе 300/3, 97",
    },
    { text: "Тел./Факс: +996 312 ХХХХХХ, ХХХХХХ" },
    { text: "Email: csraa.kg@gmail.com" },
  ];

  return (
    <div>
      <p className={style.h4}>Контакты</p>

      <div className={style.tools}>
        <div className={style.toolsScroll}>
          {contacts.map((tool, i) => (
            <Link to={tool.url} key={i}>
              {tool.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
