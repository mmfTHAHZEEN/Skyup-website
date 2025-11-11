export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass p-8 grid md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-2xl font-bold">SkyUp</div>
            <p className="opacity-80 mt-2">
              Top learning experiences that create more talent in the world.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/tools">Tools</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="opacity-90">
              +94 760007822<br />No.331, Trincomalee, Sri Lanka<br />
              skyup.official08@gmail.com
            </p>
          </div>
        </div>
        <p className="text-white/70 text-center py-6">
          ©2025 SkyUp Campus | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
