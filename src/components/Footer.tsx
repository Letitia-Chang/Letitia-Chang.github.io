export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Ting-Ya Chang</p>
        <p>Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  )
}
