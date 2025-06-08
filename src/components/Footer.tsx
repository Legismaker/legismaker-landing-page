'use client'

import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Instagram, 
  Youtube,
  FileText,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#platform' },
    ],
    Company: [
      { name: 'Team', href: '#team' },
      { name: 'About', href: '#about' }, // Assuming an about section might be added
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ]
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/orabluclub' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/orabluclub/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@OraBluClub' }
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background/95 via-background to-background/95">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 border-b border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Brand & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/assets/legismaker-logo.svg"
                  alt="Legismaker Logo"
                  width={240}
                  height={48}
                  className="mr-4 h-12 w-auto"
                />
                <FileText className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                less <em className="font-kings-caslon">dealbreakers,</em> more <em className="font-kings-caslon">compromise.</em>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                Fast, credible, non-partisan legislative analysis designed for the realities of the Hill.
              </p>
              
              <Button asChild>
                <Link href="https://app.legismaker.com/login" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Right Column - Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-foreground font-semibold mb-4 font-heading">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Legismaker. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-background/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 