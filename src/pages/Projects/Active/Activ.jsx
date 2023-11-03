import React, { useEffect, useState } from "react";
import style from "./Activ.module.css";

const ActivProjects = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/subcategory_file/");
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
          <li> {item.title}</li>
        </div>
      ))}
    </div>
  );
};

export default ActivProjects;
