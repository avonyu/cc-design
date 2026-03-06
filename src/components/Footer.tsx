interface IconProps {
  className?: string;
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27 18C27 12.201 22.299 7.5 16.5 7.5C10.701 7.5 6 12.201 6 18C6 23.799 10.701 28.5 16.5 28.5L16.5 21H14.25V18H16.5V15.75C16.5 13.679 18.179 12 20.25 12H22.5V15H21C20.172 15 19.5 15.672 19.5 16.5V18H22.5L21.75 21H19.5V28.5C23.865 27.471 27 23.172 27 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TwitchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 6L6 12V30H13.5V34.5H18L22.5 30H28.5L33 25.5V6H9ZM27 24L22.5 28.5H18L13.5 33V28.5H9V9H27V24ZM22.5 13.5V21H25.5V13.5H22.5ZM16.5 13.5V21H19.5V13.5H16.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 15V25.5M12 10.5V10.509M18 25.5V18C18 16.343 19.343 15 21 15C22.657 15 24 16.343 24 18V25.5M18 25.5V15M7.5 6H28.5C29.328 6 30 6.672 30 7.5V28.5C30 29.328 29.328 30 28.5 30H7.5C6.672 30 6 29.328 6 28.5V7.5C6 6.672 6.672 6 7.5 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6C11.373 6 6 11.373 6 18C6 23.247 9.387 27.719 14.102 29.319C14.689 29.432 14.883 29.064 14.883 28.75C14.883 28.469 14.872 27.731 14.867 26.753C11.588 27.465 10.896 25.173 10.896 25.173C10.356 23.801 9.574 23.434 9.574 23.434C8.495 22.695 9.656 22.709 9.656 22.709C10.849 22.793 11.476 23.938 11.476 23.938C12.536 25.777 14.27 25.246 14.949 24.938C15.057 24.165 15.359 23.635 15.692 23.333C13.078 23.031 10.334 22.021 10.334 17.382C10.334 16.06 10.805 14.98 11.498 14.136C11.374 13.831 10.956 12.6 11.613 10.943C11.613 10.943 12.627 10.62 14.852 12.18C15.806 11.914 16.833 11.782 17.854 11.777C18.874 11.782 19.901 11.914 20.856 12.18C23.079 10.62 24.091 10.943 24.091 10.943C24.75 12.6 24.332 13.831 24.208 14.136C24.903 14.98 25.37 16.06 25.37 17.382C25.37 22.034 22.621 23.027 19.999 23.325C20.418 23.685 20.791 24.395 20.791 25.485C20.791 27.048 20.777 28.31 20.777 28.7C20.777 29.017 20.967 29.389 21.563 29.268C26.276 27.715 29.66 23.246 29.66 18C29.66 11.373 24.287 6 18 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoIcon() {
  return (
    <svg viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[63px] h-[63px]">
      <circle cx="31.5" cy="31.5" r="31.5" fill="#FF6600" />
      <path
        d="M19 25L31.5 37.5L44 25"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 33L31.5 45.5L44 33"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navItems = ["Home", "About us", "Our interests", "Values", "Current Projects"];

export function Footer() {
  return (
    <footer className="bg-[#2B2B2B] py-14">
      <div className="max-w-[1440px] mx-auto px-5 flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-10">
          <LogoIcon />
          <span className="text-white text-[30px] font-bold">Excursy</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-[52px]">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <FacebookIcon className="w-9 h-9" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <TwitchIcon className="w-9 h-9" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <LinkedInIcon className="w-9 h-9" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <GitHubIcon className="w-9 h-9" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white text-lg hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}