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
    <div className="p-6 text-center">
      <button
        onClick={handleSend}
        className="bg-pink-500 text-white px-6 py-2 rounded"
      >
        Generate Love Link 💖
      </button>

      {link && (
        <div className="mt-4">
          <p>Share this link with your partner 💌</p>
          <a href={link} className="text-blue-500">{link}</a>
        </div>
      )}
    </div>
  );
}