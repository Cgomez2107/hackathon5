import React from "react";

const exploreLinks = [
  "Find Experiences",
  "Specialty Stays",
  "Coffee Routes",
  "Sustainability Map",
];
const operatorLinks = [
  "Host a Farm Tour",
  "Operator Dashboard",
  "Resources & Guides",
  "Success Stories",
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6 text-white">
            <span className="material-symbols-outlined text-3xl">eco</span>
            <h2 className="text-2xl font-bold">Cumanday</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Empowering the coffee heritage of Colombia through technology and
            direct human connection. Join our community of explorers and
            growers.
          </p>
          <div className="flex gap-4">
            {["social_leaderboard", "photo_camera", "alternate_email"].map(
              (icon) => (
                <span
                  key={icon}
                  className="material-symbols-outlined cursor-pointer hover:text-white transition-colors"
                >
                  {icon}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Explore links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
            Explore
          </h4>
          <ul className="space-y-4 text-sm">
            {exploreLinks.map((label) => (
              <li key={label}>
                <a className="hover:text-white transition-colors" href="#">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Operator links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
            For Operators
          </h4>
          <ul className="space-y-4 text-sm">
            {operatorLinks.map((label) => (
              <li key={label}>
                <a className="hover:text-white transition-colors" href="#">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
            Newsletter
          </h4>
          <p className="text-sm mb-4">
            Get the latest brewing tips and travel updates.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-slate-800 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary w-full px-3 py-2 text-white placeholder:text-slate-500 outline-none"
              placeholder="Email"
              type="email"
            />
            <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase font-bold tracking-widest">
        <p>
          © 2024 Cumanday. Supporting the Coffee Cultural Landscape of Colombia.
        </p>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((label) => (
            <a
              key={label}
              className="hover:text-white transition-colors"
              href="#"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
