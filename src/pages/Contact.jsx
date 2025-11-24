import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-20 text-white">
      {/* --------------------------- HEADING --------------------------- */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Contact <span className="text-skyup-teal">Us</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-white/70 max-w-2xl mx-auto mb-16 text-lg"
      >
        Have questions, need help, or want to join SkyUp?  
        We're here to support you on your learning journey.
      </motion.p>

      {/* --------------------------- GRID WRAPPER --------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* --------------------------- LEFT: CONTACT INFO --------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl backdrop-blur-md shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-skyup-teal">
            Get In Touch
          </h2>

          <p className="text-white/70 mb-10 leading-relaxed">
            Feel free to reach out anytime. Our team will respond within 24 hours.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-skyup-teal/20 p-3 rounded-xl">
                <i className="fas fa-map-marker-alt text-skyup-teal text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-white/70 text-sm mt-1">
                  SkyUp Campus, Colombo, Sri Lanka
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-skyup-teal/20 p-3 rounded-xl">
                <i className="fas fa-phone-alt text-skyup-teal text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-white/70 text-sm mt-1">+94 71 234 5678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-skyup-teal/20 p-3 rounded-xl">
                <i className="fas fa-envelope text-skyup-teal text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-white/70 text-sm mt-1">support@skyupcampus.lk</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* --------------------------- RIGHT: FORM --------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl backdrop-blur-md shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-skyup-teal">
            Send Us a Message
          </h2>

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Full Name</label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-skyup-teal outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Email</label>
              <input
                type="email"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-skyup-teal outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Phone Number</label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-skyup-teal outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Message</label>
              <textarea
                rows="5"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-skyup-teal outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-lg shadow-lg hover:shadow-skyup-teal/40"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
