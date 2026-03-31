import { useContext } from "react";
import { BouquetContext } from "../context/BouquetContext";
import { useNavigate } from "react-router-dom";

const emojis = ["❤️", "😍", "😘", "🌹", "💖", "💘"];

export default function Note() {
  const { note, setNote } = useContext(BouquetContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 text-center">
      <h2 className="text-4xl font-romantic mb-6">Write Your Love Note 💌</h2>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your message here..."
        className="w-full md:w-2/3 h-60 p-4 rounded-xl border-2 border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-500 resize-none mb-4"
      />

      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {emojis.map((e) => (
          <button
            key={e}
            onClick={() => setNote(note + e)}
            className="text-2xl hover:scale-125 transition-transform"
          >
            {e}
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/send")}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg font-bold transition-transform transform hover:scale-105"
      >
        Send 💖
      </button>
    </div>
  );
}