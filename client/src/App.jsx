import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewBouquet from "./pages/ViewBouquet";

<BrowserRouter>
  <Routes>
    <Route path="/bouquet/:id" element={<ViewBouquet />} />
  </Routes>
</BrowserRouter>