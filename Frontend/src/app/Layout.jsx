import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import { useEffect, useState } from 'react'
import BootSequence from '../components/effects/BootSequence'

export default function Layout() {
  const [showBoot, setShowBoot] = useState(true)

  useEffect(() => {
    const hasSeenBoot = localStorage.getItem('dev404-boot-seen')
    if (hasSeenBoot) {
      setShowBoot(false)
    }
  }, [])

  const handleBootComplete = () => {
    setShowBoot(false)
    localStorage.setItem('dev404-boot-seen', 'true')
  }

  if (showBoot) {
    return <BootSequence onComplete={handleBootComplete} />
  }

  return (
    <div className="min-h-screen bg-deep-black text-text-light overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
