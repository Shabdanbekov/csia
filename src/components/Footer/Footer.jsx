import React from "react";
import s from "../Footer/Footer.module.css";
import call from "../../assets/logo/phone-call.png";

const Footer = () => {
  const tools = [
    {
      url: "/",
      text: "Главная",
    },
    {
      url: "/about-us",
      text: "Об организации",
    },
    {
      url: "/projects",
      text: "Проекты",
    },
    {
      url: "/research",
      text: "Исследования",
    },
    {
      url: "/news",
      text: "Новости",
    },
    {
      url: "/reports",
      text: "Отчеты",
    },
    {
      url: "/publication",
      text: "Публикации",
    },
    {
      url: "/library",
      text: "Библиотека",
    },
    {
      url: "/gallery",
      text: "Галерея",
    },
    {
      url: "/contacts",
      text: "Контакты",
    },
  ];

  return (
    <div className={s.footer}>
      <div className={s.footerContent}>
        <div className={s.top}>
          <h4>Copyright © 2023 ОФ «ЦСИА»</h4>
          <div className={s.tools}>
            {tools.map((tool, i) => (
              <a href={tool.url} key={i}>
                {tool.text}
              </a>
            ))}
          </div>
        </div>
        <div className={s.bottom}>
          <div>
            <span>
              <img src={call} alt="" />
              <p>X (XXX) XX XX XX</p>
            </span>
            <span>
              <img src={call} alt="" />
              <p>X (XXX) XX XX XX</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
