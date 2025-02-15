import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FullReport from "./pages/FullReportPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fullreport" element={<FullReport />} />
    </Routes>
  );
}
