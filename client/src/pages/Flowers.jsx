import { useContext } from "react";
import { BouquetContext } from "../context/BouquetContext";
import { useNavigate } from "react-router-dom";

const flowerList = [
  "Rose", "Tulip", "Lily", "Sunflower", "Daisy",
  "Orchid", "Lotus", "Lavender", "Peony"
];

export default function Flowers() {
  const { flowers, setFlowers } = useContext(BouquetContext);
  const navigate = useNavigate();

  const total = Object.values(flowers).reduce((a, b) => a + b, 0);

  const handleClick = (flower) => {
    if (total >= 3) return;
    setFlowers({ ...flowers, [flower]: (flowers[flower] || 0) + 1 });
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 text-center">
      <h2 className="text-4xl font-romantic mb-6">Select up to 3 flowers 🌸</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {flowerList.map((f) => (
          <div
            key={f}
            onClick={() => handleClick(f)}
            className="p-6 bg-white rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform font-semibold text-pink-600"
          >
            {f} ({flowers[f] || 0})
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/leaves")}
        className="mt-8 bg-green-400 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Next 🍃
      </button>
    </div>
  );
}