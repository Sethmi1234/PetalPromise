import { useContext } from "react";
import { BouquetContext } from "../context/BouquetContext";
import { useNavigate } from "react-router-dom";

const flowerList = ["Rose", "Tulip", "Lily", "Sunflower", "Daisy", "Orchid", "Lotus", "Lavender", "Peony"];

export default function Flowers() {
  const { flowers, setFlowers } = useContext(BouquetContext);
  const navigate = useNavigate();

  const total = Object.values(flowers).reduce((a, b) => a + b, 0);

  const handleClick = (flower) => {
    if (total >= 3) return;

    setFlowers({
      ...flowers,
      [flower]: (flowers[flower] || 0) + 1,
    });
  };

  return (
    <div className="p-6">
      <h2>Select up to 3 flowers 🌸</h2>

      <div className="grid grid-cols-3 gap-4">
        {flowerList.map((f) => (
          <div
            key={f}
            onClick={() => handleClick(f)}
            className="p-4 bg-pink-200 rounded cursor-pointer"
          >
            {f} ({flowers[f] || 0})
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/leaves")}
        className="mt-6 bg-green-500 text-white px-4 py-2"
      >
        Next 🍃
      </button>
    </div>
  );
}