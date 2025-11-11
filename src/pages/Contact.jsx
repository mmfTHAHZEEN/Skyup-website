import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Get in <span className="text-skyup-teal">Touch</span>
      </motion.h1>

      <div className="glass grid md:grid-cols-2 gap-8 p-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
          <p className="text-white/80">
            No. 331, Trincomalee, Sri Lanka<br />
            <strong>Phone:</strong> +94 760007822<br />
            <strong>Email:</strong> skyup.official08@gmail.com
          </p>
          <div className="mt-6 space-x-4 text-xl">
            <a href="#" className="hover:text-skyup-teal">🌐</a>
            <a href="#" className="hover:text-skyup-teal">📘</a>
            <a href="#" className="hover:text-skyup-teal">📷</a>
            <a href="#" className="hover:text-skyup-teal">🐦</a>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
          ></textarea>
          <button className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
}
