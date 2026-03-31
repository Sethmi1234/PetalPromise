import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 text-center p-6">
      <h1 className="text-5xl font-romantic text-pink-600 animate-pulse mb-4">
        Welcome to Love Garden 🌸
      </h1>
      <p className="text-xl text-pink-800 mb-6">
        Create a bouquet for your special one 💖
      </p>
      <button
        onClick={() => navigate("/flowers")}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Start 💐
      </button>
    </div>
  );
}