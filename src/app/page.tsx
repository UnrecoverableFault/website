import ResumeContent from "@/components/ResumeContent"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Cristian Arendell</h1>
          <ThemeToggle />
        </header>
        <ResumeContent />
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Cristian Arendell. All rights reserved.
        </footer>
      </div>
    </div>
  )
}