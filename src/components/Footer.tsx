import { Rocket, Twitter, Github, Linkedin, Mail } from "lucide-react";

const navItems = ["Home", "About us", "Our interests", "Values", "Current Projects"];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">Excursy</span>
          </div>

          <nav className="flex flex-wrap items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
            Sign Up
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Excursy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}