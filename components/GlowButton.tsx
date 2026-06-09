type GlowButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlowButton({
  children,
  className = "",
}: GlowButtonProps) {
  return (
    <button
      className={`
        rounded-2xl
        bg-gradient-to-r
        from-purple-500
        to-cyan-500
        px-6
        py-3
        font-medium
        text-white
        transition-all
        duration-200
        hover:scale-105
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}