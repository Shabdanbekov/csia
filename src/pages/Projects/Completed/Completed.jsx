import React, { useEffect, useState } from "react";
import style from "./Completed.module.css";

const CompletedProjects = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/subcategory_file/");
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

  const filteData = data.filter((item) => item.subcategory === 2);

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Завершенные проекты</h1>
      {filteData.map((item, i) => (
        <div key={i}>
          <li>{item.title}</li>
        </div>
      ))}
    </div>
  );
};

export default CompletedProjects;
