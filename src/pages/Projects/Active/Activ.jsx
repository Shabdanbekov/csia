import React, { useEffect, useState } from "react";
import style from "./Activ.module.css";

const ActivProjects = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.0.229:8000/subcategory_file/"
        );
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
    return <div>Загрузка данных</div>;
  }
  const filterData = data.filter((item) => item.subcategory === 1);

  return (
    <div className={style.container}>
      <h1 className={style.h1}> Действующие проекты </h1>

      {filterData.map((item, i) => (
        <div key={i}>
          <p> {item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivProjects;
