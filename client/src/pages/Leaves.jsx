import { useContext } from "react";
import { BouquetContext } from "../context/BouquetContext";
import { useNavigate } from "react-router-dom";

const leaves = ["Mint", "Palm", "Fern", "Eucalyptus"];

export default function Leaves() {
  const { setLeaf } = useContext(BouquetContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-center">
      <h2 className="text-4xl font-romantic mb-6">Select one leaf 🍃</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {leaves.map((l) => (
          <button
            key={l}
            onClick={() => setLeaf(l)}
            className="bg-green-300 hover:bg-green-400 px-6 py-3 rounded-full shadow-md font-semibold transition-transform transform hover:scale-105"
          >
            {l}
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/note")}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg font-bold transition-transform transform hover:scale-105"
      >
        Next 💌
      </button>
    </div>
  );
}