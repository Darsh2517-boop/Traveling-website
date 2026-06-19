function Button({ children }) {
  return (
    <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.01] hover:shadow-blue-500/30">
      {children}
    </button>
  );
}

export default Button;
