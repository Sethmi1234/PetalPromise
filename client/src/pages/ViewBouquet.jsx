import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ViewBouquet() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/bouquet/${id}`)
      .then(res => setData(res.data));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  const flowers = data.flowers || {};

  return (
    <div className="p-6 text-center bg-pink-100 min-h-screen">
      <h1 className="text-3xl text-pink-600">Your Special Bouquet 💐</h1>

      <div className="mt-4">
        <h2>Flowers 🌸</h2>
        {Object.keys(flowers).length === 0 ? (
          <p>No flowers selected yet.</p>
        ) : (
          Object.entries(flowers).map(([f, count]) => (
            <p key={f}>{f} x {count}</p>
          ))
        )}
      </div>

      <div className="mt-4">
        <h2>Leaf 🍃</h2>
        <p>{data.leaf}</p>
      </div>

      <div className="mt-4">
        <h2>Message 💌</h2>
        <p>{data.note}</p>
      </div>
    </div>
  );
}