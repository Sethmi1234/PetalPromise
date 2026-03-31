const leaves = ["Mint", "Palm", "Fern", "Eucalyptus"];

export default function Leaves() {
  const { setLeaf } = useContext(BouquetContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Select one leaf 🍃</h2>

      {leaves.map((l) => (
        <button
          key={l}
          onClick={() => setLeaf(l)}
          className="block m-2 bg-green-200 p-2"
        >
          {l}
        </button>
      ))}

      <button onClick={() => navigate("/note")}>Next 💌</button>
    </div>
  );
}