export default function LeafCard({ leaf }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer">
      <img src={leaf.img} alt={leaf.name} className="w-24 h-24 mb-2" />
      <p className="text-softPurple font-semibold">{leaf.name}</p>
    </div>
  );
}