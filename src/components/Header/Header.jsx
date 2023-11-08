import React, { useState, useEffect } from "react";
import s from "./Header.module.css";
import russia from "../../assets/images/russia.png";
import england from "../../assets/images/england.webp";
import kyrgyzstan from "../../assets/images/kyrgis.png";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ЦСИА LOGO.svg";

const Header = () => {
  const [language, setLanguage] = useState("ru");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const toggleProjectsDropdown = () =>
    setShowProjectsDropdown(!showProjectsDropdown);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://62.113.98.47:8000/category/");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Произошла ошибка: {error.message}</div>;
  }
  if (!data) {
    return <div>Загрузка данных...</div>;
  }

  const tools = [
    {
      url: "/",
      text: { ru: "ГЛАВНАЯ", en: "HOME", kg: "БАШКЫ" }[language],
    },
    {
      url: "/about-us",
      text: { ru: "ОБ ОРГАНИЗАЦИИ", en: "ABOUT", kg: "УЮМ ЖОНУНДО" }[language],
    },
    {
      url: "/projects",
      text: { ru: "ПРОЕКТЫ", en: "PROJECTS", kg: "ПРОЕКТТЕР" }[language],
      subcategories: [
        {
          url: "/active-projects",
          text: { ru: "Действующие", en: "Active", kg: "Действующие" }[
            language
          ],
        },
        {
          url: "/completed-projects",
          text: { ru: "Завершенные", en: "Completed", kg: "Завершенные" }[
            language
          ],
        },
      ],
    },
    {
      url: "/research",
      text: { ru: "ИССЛЕДОВАНИЯ", en: "RESEARCH", kg: "ИЗИЛДӨӨЛӨР" }[language],
    },
    {
      url: "/news",
      text: { ru: "НОВОСТИ", en: "NEWS", kg: "ЖАНЫЛЫКТАР" }[language],
    },
    {
      url: "/reports",
      text: { ru: "ОТЧЕТЫ", en: "REPORTS", kg: "ЭСЕПТЕР" }[language],
    },
    {
      url: "/gallery",
      text: { ru: "ГАЛЕРЕЯ", en: "GALLERY", kg: "ГАЛЕРЕЯ" }[language],
    },
    {
      url: "/contacts",
      text: { ru: "КОНТАКТЫ", en: "CONTACTS", kg: "БАЙЛАНЫШУУ" }[language],
    },
  ];

  return (
    <div className={s.header}>
      <div style={{ width: "100%" }}>
        <div className={s.logo}>
          <img src={logo} alt="logo" className={s.in_logo} />
        </div>
      </div>
      <div className={s.top}>
        <div className={s.rightTop}>
          <div className={s.name}>
            <h1>Центр стратегических исследований и анализа</h1>
          </div>
          <div className={s.flags}>
            <img
              src={russia}
              alt="RU"
              onClick={() => setLanguage("ru")}
              className={language === "ru" ? s.activeFlag : s.flag}
            />
            <img
              src={england}
              alt="EN"
              onClick={() => setLanguage("en")}
              className={language === "en" ? s.activeFlag : s.flag}
            />
            <img
              src={kyrgyzstan}
              alt="KY"
              onClick={() => setLanguage("kg")}
              className={language === "kg" ? s.activeFlag : s.flag}
            />
          </div>
        </div>
        <div className={s.tools}>
          <div className={s.toolsScroll}>
            {tools.map((item) => (
              <React.Fragment key={item.url}>
                {item.subcategories ? (
                  <div
                    className={s.dropdown}
                    onMouseEnter={toggleProjectsDropdown}
                    onMouseLeave={toggleProjectsDropdown}
                  >
                    <span style={{ color: "var(--gray)" }}>{item.text}</span>
                    {showProjectsDropdown && (
                      <div className={s.dropdownContent}>
                        {item.subcategories.map((subcat) => (
                          <Link
                            to={`/${language}${subcat.url}`}
                            key={subcat.url}
                            onClick={() => setShowProjectsDropdown(false)}
                          >
                            {subcat.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={`/${language}${item.url}`}>{item.text}</Link>
                )}
                <span className={s.separator}>|</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Header;
