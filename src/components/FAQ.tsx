'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "What types of government software do you build?",
      answer: "We specialize in custom software solutions for government agencies and legislative offices, including policy analysis systems, stakeholder management platforms, predictive analytics tools, and administrative systems. Each solution is tailored to your organization's specific needs and requirements."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security and compliance are fundamental to everything we build. We implement industry-standard encryption, follow government security protocols, and ensure all systems meet relevant compliance requirements. We understand the sensitive nature of government data and build accordingly."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile, collaborative approach that begins with thorough requirements gathering and stakeholder consultation. Throughout development, we maintain regular communication, provide progress updates, and incorporate feedback to ensure the final solution meets your exact needs."
    },
    {
      question: "Who do you work with?",
      answer: "We partner with government agencies, legislative offices, policy organizations, and civic technology initiatives. Our clients range from individual congressional offices to larger government departments seeking custom technology solutions."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide comprehensive post-deployment support including system maintenance, updates, user training, and technical support. We believe in long-term partnerships and ensuring your software continues to serve your mission effectively."
    },
    {
      question: "How do you handle project timelines and budgets?",
      answer: "We work closely with each client to establish realistic timelines and budgets based on project scope and requirements. We provide transparent pricing, regular progress updates, and maintain open communication throughout the development process to ensure projects stay on track."
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-background/95" />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-xl bg-primary/10 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our government software development services.
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
     
            >
              <Card className='p-0 overflow-hidden'>
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems.includes(index) ? 'auto' : 0,
                    opacity: openItems.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss how we can build the perfect software solution for your organization.
            </p>
            <Button asChild>
              <Link href="#team" className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 