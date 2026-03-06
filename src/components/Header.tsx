function LogoIcon() {
  return (
    <svg viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[76px] h-[76px]">
      <circle cx="38" cy="38" r="38" fill="#FF6600" />
      <path
        d="M23 30L38 45L53 30"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 40L38 55L53 40"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navItems = [
  { name: "Home", active: true },
  { name: "About us", active: false },
  { name: "Our interests", active: false },
  { name: "Values", active: false },
  { name: "Current Projects", active: false },
];

export function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-[1200px] mx-auto h-[76px] flex items-center justify-between px-5">
        {/* Logo */}
        <div className="flex items-center gap-[21px]">
          <LogoIcon />
          <span className="text-[30px] font-bold text-[#2B2B2B]">Excursy</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-[48px]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-lg transition-colors ${
                item.active
                  ? "text-[#FF6600] font-bold"
                  : "text-[#2B2B2B] font-normal hover:text-[#FF6600]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Sign Up Button */}
        <button className="w-[146px] h-[55px] bg-[#FF6600] text-white text-base font-bold rounded-lg hover:bg-[#e65c00] transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
}