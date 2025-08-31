'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight, ChevronDown, Building2, Users, TreePine } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  const clientGroups = [
    { name: 'Government Agencies & Contractors', href: '#who-we-serve', icon: Building2 },
    { name: 'Legislative Organizations', href: '#who-we-serve', icon: Users },
    { name: 'Advocacy & Nonprofit Organizations', href: '#who-we-serve', icon: TreePine },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-primary/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side - navigation items */}
          <div className="hidden lg:flex items-center space-x-8 w-1/3">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            
            {/* Who We Serve Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group flex items-center">
                Who We Serve
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              
              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: isDropdownOpen ? 1 : 0, 
                  y: isDropdownOpen ? 0 : 10,
                  pointerEvents: isDropdownOpen ? 'auto' : 'none'
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-lg shadow-lg"
              >
                <div className="py-2">
                  {clientGroups.map((group, index) => (
                    <Link
                      key={index}
                      href={group.href}
                      className="flex items-center px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                    >
                      <group.icon className="h-4 w-4 mr-3 text-primary" />
                      {group.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Center - Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/legismaker-logo.svg"
                alt="Legismaker Logo"
                width={200}
                height={40}
                className="h-10 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Right side */}
          <div className="hidden lg:flex items-center justify-end space-x-8 w-1/3">
            <Link
              href="#platform"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#team"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            
            <Button 
              asChild
              className="ml-4"
            >
              <Link href="#team" className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-primary/20"
          >
            <div className="py-6 space-y-4">
              <Link
                href="#features"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#who-we-serve"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who We Serve
              </Link>
              <Link
                href="#platform"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </Link>
              <Link
                href="#team"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="#faq"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="px-4 pt-4">
                <Button 
                  asChild
                  className="w-full"
                >
                  <Link href="#team" className="flex items-center justify-center">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation