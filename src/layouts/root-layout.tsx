import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import DotPattern from '@/components/ui/dot-pattern'

function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative size-full bg-black flex min-h-dvh flex-col text-white">
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
      />
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <DotPattern dotSize={2} className="fixed inset-0" />
      <main className="relative z-10 mx-auto flex w-full flex-1 flex-col px-4">
        <Outlet />
      </main>
    </div>
  )
}

export { RootLayout }
export default RootLayout
