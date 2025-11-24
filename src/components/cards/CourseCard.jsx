import { motion } from "framer-motion";
export default function CourseCard({img, title, tag="Digital Academy", duration="2 Months", price="$69"}){
  return (
    <motion.article whileHover={{y:-6}} className="rounded-2xl bg-white p-4 shadow-lg">
      <img src={img} alt={title} className="h-40 w-full object-cover rounded-xl" />
      <div className="mt-3 text-slate-700">
        <div className="text-xs flex justify-between opacity-60">
          <span>{tag}</span><span>{duration}</span>
        </div>
        <h3 className="font-semibold mt-2">{title}</h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold">{price}</span>
          <button className="btn btn-primary text-sm">Buy Now</button>
        </div>
      </div>
    </motion.article>
  )
}
