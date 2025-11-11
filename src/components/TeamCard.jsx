export default function TeamCard({ img, name, role }) {
  return (
    <div className="glass overflow-hidden text-center text-white">
      <img src={img} alt={name} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-white/70">{role}</p>
      </div>
    </div>
  );
}
