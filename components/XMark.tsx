export function XMark({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
    >
      <path d="M4.5 4.5L19.5 19.5" />
      <path d="M19.5 4.5L4.5 19.5" />
    </svg>
  );
}
