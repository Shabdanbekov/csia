import React, { useEffect, useState } from "react";
import s from "./Reports.module.css";

const Reports = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/category_file/");
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
  const filterData = data.filter((item) => item.category === 9);

  const handleDownload = (imageURL) => {
    fetch(imageURL)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "";
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.log("Ошибка при скачивании файла:", error));
  };

  return (
    <div className={s.reports}>
      <div className={s.reportsList}>
        {filterData.map((report, i) => (
          <h4 key={i}>
            <a
              href="/"
              className={`${s.report} ${s.downloadLink}`}
              onClick={() => handleDownload(report.image)}
            >
              <div style={{ display: "flex" }}>
                <span>{report.title}</span>
                <span className={s.downloadText}>(Скачать)</span>
              </div>
            </a>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Reports;
