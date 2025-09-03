export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} Pradip Yadav</p>
        <p>Built with React, Tailwind & MongoDB</p>
      </div>
    </footer>
  )
}
