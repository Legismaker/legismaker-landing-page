'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Landmark, Gavel, Scale, FileText, Users, Vote, ArrowRight, Code, Target, Shield } from 'lucide-react'
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
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-visible">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 transform-style-3d font-heading overflow-visible">
            <motion.span 
              className="block bg-gradient-to-b from-primary to-primary-dark bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <em className="font-kings-caslon">Government</em> software,<br/><em className="font-kings-caslon">Engineered</em> for impact.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          We build custom software solutions for government agencies and legislative offices. From policy analysis tools to administrative systems—we deliver technology that works for public service, not profit margins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild>
            <Link href="#features" className="flex items-center gap-2">
              View Our Services
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button 
            variant="outline" 
            asChild
          >
            <Link href="#team">
              Meet Our Team
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
            { 
              title: "End-to-End", 
              label: "Custom Development",
              icon: Code,
              description: "From concept to deployment"
            },
            { 
              title: "Deep", 
              label: "Government Expertise",
              icon: Target,
              description: "Built for public service"
            },
            { 
              title: "24/7", 
              label: "Mission-Critical Support",
              icon: Shield,
              description: "Always-on reliability"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="text-center relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 w-fit mx-auto">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {stat.description}
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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