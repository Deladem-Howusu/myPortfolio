function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        px-7 py-3 text-[14px]
        text-white font-medium
        rounded-4xl 
        bg-linear-to-br from-[#7b3cff] to-[#44225e]
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        overflow-hidden
        transition-all duration-500

        hover:shadow-[0_6px_25px_rgba(123,60,255,0.5)]
        hover:scale-[1.03]
      "
    >
      {/* Edge mirror/glass highlight */}
      <span
        className="
        absolute inset-0 rounded-2xl
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        pointer-events-none
      "
      />

      {/* Inner glossy highlight */}
      <span
        className="
        absolute top-0 left-0 right-0 h-1/2
        bg-white/10 
        rounded-t-2xl
        pointer-events-none
      "
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default Button;
