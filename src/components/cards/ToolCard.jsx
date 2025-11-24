export default function ToolCard({ icon, name }) {
  return (
    <div className="glass p-6 text-center text-white hover:scale-[1.03] transition-all">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg">{name}</h3>
    </div>
  );
}
