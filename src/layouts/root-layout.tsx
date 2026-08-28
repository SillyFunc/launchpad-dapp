import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-dvh flex-col bg-black text-white">
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
      />
      <Sidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <main className="mx-auto flex w-full flex-1 flex-col px-4">
        <Outlet />
      </main>
    </div>
  )
}

export { RootLayout }
export default RootLayout
