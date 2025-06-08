'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Landmark, Gavel, Scale, FileText, Users, Vote, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const floatingIcons = [
    { Icon: Landmark, delay: 0, x: "15%", y: "25%" },
    { Icon: Gavel, delay: 0.2, x: "85%", y: "35%" },
    { Icon: Scale, delay: 0.4, x: "10%", y: "75%" },
    { Icon: Users, delay: 0.6, x: "90%", y: "80%" },
    { Icon: FileText, delay: 0.8, x: "20%", y: "60%" },
    { Icon: Vote, delay: 1.0, x: "80%", y: "20%" },
  ]

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"
      />
      
      {/* Glow */}
      <div className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-1/4 right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500" />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y: iconY }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: delay + 1, duration: 1 }}
          className="absolute text-primary/40"
          style={{ left: x, top: iconY }}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon size={48} />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="perspective-2000"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 transform-style-3d font-heading">
            <motion.span 
              className="block bg-gradient-to-b from-primary to-primary-dark bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <em className="font-kings-caslon">Less</em> dealbreakers,<br/><em className="font-kings-caslon">More</em> compromise.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Legismaker helps congressional staffers turn any bill into a legislative game plan. Built for the realities of the Hill—not the hype of Silicon Valley—Legismaker delivers fast, credible insights where it matters most: strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild>
            <Link href="https://app.legismaker.com/login" className="flex items-center gap-2">
              Upload a Bill
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button 
            variant="outline" 
            asChild
          >
            <Link href="#features">
              Learn More
            </Link>
          </Button>
        </motion.div>

        {/* Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { title: "Instant", label: "Bill Summary" },
            { title: "Data-Driven", label: "Predicted Votes" },
            { title: "Strategic", label: "Compromise Suggestions" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 + index * 0.1 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  )
}

export default Hero 