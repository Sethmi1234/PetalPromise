const emojis = ["❤️", "😍", "😘", "🌹", "💖", "💘"];

export default function Note() {
  const { note, setNote } = useContext(BouquetContext);
  const navigate = useNavigate();

  return (
    <div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your love message..."
      />

      <div>
        {emojis.map((e) => (
          <button key={e} onClick={() => setNote(note + e)}>
            {e}
          </button>
        ))}
      </div>

      <button onClick={() => navigate("/send")}>Send 💖</button>
    </div>
  );
}