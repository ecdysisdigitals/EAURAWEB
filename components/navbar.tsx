"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "TUNGKOL SA AURORAHAN", href: "/tungkol" },
  { name: "MGA LARAWAN", href: "/larawan" },
  { name: "MGA BARANGAY", href: "/barangay" },
  { name: "TUNGKOL SA AMIN", href: "/amin" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-primary/95 backdrop-blur-sm shadow-md py-2" : "bg-primary py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative overflow-hidden rounded-full">
              <Image
                src="/images/logo.png"
                alt="E-AURA Logo"
                width={40}
                height={40}
                className={cn("transition-all duration-300 group-hover:scale-110", scrolled ? "scale-90" : "scale-100")}
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            <span className="text-accent font-playfair text-2xl font-bold tracking-wide group-hover:text-accent/80 transition-colors">
              E-AURA
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
            className="flex items-center space-x-1"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-primary-foreground hover:text-accent transition-colors group",
                    pathname === item.href && "text-accent",
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={cn(
                      "absolute inset-0 bg-accent/0 group-hover:bg-accent/20 rounded-md transition-colors duration-300",
                      pathname === item.href && "bg-accent/20",
                    )}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 text-primary-foreground hover:text-accent hover:bg-transparent"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2 text-primary-foreground hover:text-accent hover:bg-transparent"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
              </motion.div>
            </AnimatePresence>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:text-accent hover:bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm shadow-md py-4 md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-3 container">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-3 py-2 text-primary-foreground hover:text-accent transition-colors group block",
                        pathname === item.href && "text-accent",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        className={cn(
                          "absolute inset-0 bg-accent/0 group-hover:bg-accent/20 rounded-md transition-colors duration-300",
                          pathname === item.href && "bg-accent/20",
                        )}
                      ></span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
