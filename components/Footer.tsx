export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} GadgetVerse. Designed & Developed by{" "}
      <a
        href="https://aq-portfolio-rose.vercel.app/"
        className="text-cyan-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        PRIMYST
      </a>
      .
    </footer>
  );
}