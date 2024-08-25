import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  App,
  Globe
} from "./src/pages/index.js";
import Snake from "./src/sections/Snake.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/globe" element={<Globe />} />
        <Route path="/snake" element={<Snake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;