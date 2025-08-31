'use client'

import { motion } from 'framer-motion'
import { Upload, Eye, FileText, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Platform = () => {
  const steps = [
    {
      title: "1. Discovery & Requirements",
      description: "We work closely with your team to understand your unique challenges, workflows, and objectives. Every solution starts with deep understanding.",
      icon: Upload,
    },
    {
      title: "2. Custom Development", 
      description: "Our experienced developers build tailored solutions using modern technologies and best practices. We prioritize security, scalability, and user experience.",
      icon: Eye,
    },
    {
      title: "3. Deployment & Support",
      description: "We handle implementation, training, and provide ongoing support and maintenance. Your success is our long-term commitment.",
      icon: FileText,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="platform">
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collaborative approach that ensures your custom software solution meets your exact needs and exceeds your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full group">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                      <item.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Philosophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
                Government Technology Expertise
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Secure. Scalable. Purpose-built. We understand the unique requirements of government technology: compliance, reliability, and mission-critical performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Button asChild>
                <Link href="#team" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Platform 