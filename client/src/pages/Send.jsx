import { useContext, useState } from "react";
import { BouquetContext } from "../context/BouquetContext";
import axios from "axios";

export default function Send() {
  const { flowers, leaf, note } = useContext(BouquetContext);
  const [link, setLink] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post("http://localhost:5000/bouquet/save", {
        flowers,
        leaf,
        note,
      });

      const id = res.data.id;
      const shareLink = `http://localhost:3000/bouquet/${id}`;
      setLink(shareLink);
    } catch (error) {
      console.error("Error saving bouquet:", error);
      alert("Failed to save bouquet. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 text-center flex flex-col items-center justify-center">
      <button
        onClick={handleSend}
        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg font-bold transition-transform transform hover:scale-105 mb-6"
      >
        Generate Love Link 💖
      </button>

      {link && (
        <div className="text-center bg-white p-4 rounded-xl shadow-lg">
          <p className="mb-2">Share this link with your partner 💌</p>
          <a href={link} className="text-blue-500 hover:underline break-all">{link}</a>
        </div>
      )}
    </div>
  );
}