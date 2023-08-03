import React, { useEffect, useState } from "react";
import style from "./Galery.module.css";

const Galery = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.0.229:8000/ru/category_file/"
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
    return <div>Произошла ошибка:{error.message}</div>;
  }

  if (!data) {
    return <div>Загрузка данных ...</div>;
  }
  const filterData = data.filter((item) => item.category === 10);

  return (
    <div>
      {filterData.map((item, i) => (
        <div key={i}>
          {item.image}
          {/* <div className={style.divImg}>
            <img
              src="http://apifi.com/assets/files/2015/03/img-18.png"
              alt=""
              className={style.img}
            />
            <img
              src="http://apifi.com/assets/files/2015/03/img-15.png"
              alt=""
              className={style.img}
            />
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Galery;
