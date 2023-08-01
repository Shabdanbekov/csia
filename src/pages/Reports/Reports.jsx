import React, { useEffect, useState } from "react";
import s from "./Reports.module.css";

const Reports = () => {
  // const arr = [
  //   {
  //     title: "Аналитический отчет по оценке Инструкции 2019",
  //     pdfLink: "link-to-pdf-1.pdf",
  //   },
  //   {
  //     title: "Оценка исполнения Инструкции 2020 для ПРООН",
  //     pdfLink: "link-to-pdf-2.pdf",
  //   },
  //   {
  //     title:
  //       "Отчет Оценка распространенности употребления психоактивных веществ среди подростков в Кыргызской Республике",
  //     pdfLink: "link-to-pdf-3.pdf",
  //   },
  //   {
  //     title:
  //       "Операционное исследование «Вовлечение частных провайдеров в диагностику туберкулеза в Кыргызстане»",
  //     pdfLink: "link-to-pdf-4.pdf",
  //   },
  // ];
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.0.229:8000/category_file/"
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
  const filterData = data.filter((item) => item.category === 6);

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
              href="#"
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
