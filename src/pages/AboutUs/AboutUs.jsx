import React, { useEffect, useState } from "react";
import s from "./AboutUs.module.css";

const AboutUs = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
  const filterData = data.filter((items) => items.category === 5);

  return (
    <div className={s.aboutUs}>
      {filterData.map((item, i) => (
        <div key={i}>
          <h1>{item.title}</h1>
          <p> {item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
