export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 border-t border-white/5 flex justify-between items-center text-sm text-white/30">
      <div>
        © {new Date().getFullYear()} Alex Morgan
      </div>
      <div>
        Designed & Developed in React
      </div>
    </footer>
  );
}
