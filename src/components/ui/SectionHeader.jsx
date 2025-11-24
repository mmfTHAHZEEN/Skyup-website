import { motion } from "framer-motion";
export default function SectionHeader({eyebrow,title,subtitle,center}){
  return (
    <motion.div
      initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
      className={`${center?'text-center':''} space-y-2`}>
      {eyebrow && <div className="uppercase tracking-widest text-white/70 text-sm">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
      {subtitle && <p className="text-white/80 max-w-3xl">{subtitle}</p>}
    </motion.div>
  )
}
