export default function BlogCard({img,title,meta="Sunilra smooth • March 28, 2025"}){
  return (
    <div className="rounded-2xl bg-white p-3 shadow-md">
      <img src={img} className="h-48 w-full object-cover rounded-xl"/>
      <div className="mt-3">
        <div className="text-xs text-slate-500">{meta}</div>
        <h3 className="font-semibold mt-2">{title}</h3>
        <button className="btn btn-primary mt-3 text-sm">Read More</button>
      </div>
    </div>
  )
}
