export default function FlowerCard({ flower }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img src={flower.img} alt={flower.name} className="w-24 h-24 mb-2" />
      <p className="text-pinkRomantic font-semibold">{flower.name}</p>
    </div>
  );
}