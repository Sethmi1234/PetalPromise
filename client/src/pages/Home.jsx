import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-pink-100">
      <h1 className="text-3xl font-bold text-pink-600">
        Welcome to Love Garden 🌸
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Create a bouquet for your special one 💖
      </p>

      <button
        onClick={() => navigate("/flowers")}
        className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-lg"
      >
        Start 💐
      </button>
    </div>
  );
}