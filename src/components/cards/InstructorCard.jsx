export default function InstructorCard({ name, role, img }) {
  return (
    <div className="glass rounded-3xl overflow-hidden backdrop-blur-md hover:scale-[1.03] transition-all">
      <div className="h-56 w-full overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover rounded-t-3xl" />
      </div>

      <div className="p-6 text-center">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="text-white/60 text-sm mt-1">{role}</p>
      </div>
    </div>
  );
}
