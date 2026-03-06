interface IconProps {
  className?: string;
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.6667 9.33333L10.6667 9.33333C8.45753 9.33333 6.66667 11.1242 6.66667 13.3333L6.66667 22.6667C6.66667 24.8758 8.45753 26.6667 10.6667 26.6667L21.3333 26.6667C23.5425 26.6667 25.3333 24.8758 25.3333 22.6667L25.3333 18.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3333 13.3333L25.3333 5.33333M21.3333 9.33333L29.3333 9.33333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 0L18.5643 10.9107H30L20.7178 17.6785L24.2821 28.5893L15 21.8215L5.71785 28.5893L9.2822 17.6785L0 10.9107H11.4357L15 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 16L14 20L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}