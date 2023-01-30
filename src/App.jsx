import "./App.scss";
import HomePage from "./pages/00. HomePage/HomePage";
import ExperiencePage from "./pages/01. ExperiencePage/ExperiencePage";
import EducationPage from "./pages/02. EducationPage/EducationPage";

import React, { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (

    <div className="App">

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="education" element={<EducationPage />} />
      </Routes>

    </div>
  );
}


export default App;
