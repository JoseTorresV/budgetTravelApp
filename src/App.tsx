import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.page";
import MapPage from "./pages/MapPage.page";
import FormPage from "./pages/FormPage.page";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/form" element={<FormPage />} />

      {/* Puoi aggiungere altre pagine qui */}
      {/* <Route path="/another-page" element={<AnotherPage />} /> */}
    </Routes>
  );
};

export default App;
