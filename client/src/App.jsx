import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import Leaves from "./pages/Leaves";
import Note from "./pages/Note";
import Send from "./pages/Send";
import ViewBouquet from "./pages/ViewBouquet";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/note" element={<Note />} />
        <Route path="/send" element={<Send />} />
        <Route path="/bouquet/:id" element={<ViewBouquet />} />
      </Routes>
    </BrowserRouter>
  );
}