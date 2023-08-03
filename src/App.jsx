import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Round from "./components/Round/Round";
import Projects from "./pages/Projects/Projects";
import s from "./App.module.css";
import Main from "./pages/Main/Main";
import News from "./pages/News/News";
import Contacts from "./pages/Contacts/Contacts";
import Research from "./pages/Research/Research";
import Reports from "./pages/Reports/Reports";
import Activ from "./pages/Projects/Active/Activ";
import Completed from "./pages/Projects/Completed/Completed";
import Galery from "./pages/Galery/Galery";

function App() {
  return (
    <div>
      <Header />
      <div className={s.pages}>
        <Routes>
          <Route path="/ru" element={<Main />} />
          <Route path="/ru/about-us" element={<AboutUs />} />
          <Route path="/ru/projects" element={<Projects />} />
          <Route path="/ru/news" element={<News />} />
          <Route path="/ru/contacts" element={<Contacts />} />
          <Route path="/ru/research" element={<Research />} />
          <Route path="/ru/reports" element={<Reports />} />
          <Route path="/ru/active-projects" element={<Activ />} />
          <Route path="/ru/completed-projects" element={<Completed />} />
          <Route path="/ru/gallery" element={<Galery />} />
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts/ru" element={<Contacts />} />
          <Route path="/research" element={<Research />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/active-projects" element={<Activ />} />
          <Route path="/completed-projects" element={<Completed />} />
          <Route path="/gallery" element={<Galery />} />
        </Routes>
      </div>
      <Round />
      <Footer />
    </div>
  );
}
export default App;
