import { Rocket } from "lucide-react";

const navItems = ["Home", "About us", "Our interests", "Values", "Current Projects"];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-5 h-[76px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold text-gray-900">Excursy</span>
        </div>
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}