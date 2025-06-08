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
      question: "What kind of bills can I analyze?",
      answer: "Legismaker is designed to analyze any U.S. federal bill draft. You can upload bills in common formats (like PDF or TXT), and our system will parse and analyze the text. We are continuously expanding our support for state-level legislation as well."
    },
    {
      question: "How accurate are the vote predictions?",
      answer: "Our vote prediction models are trained on extensive historical data, including past voting records, caucus alignment, and public statements. While no prediction is perfect, our models provide a highly accurate, data-driven forecast to inform your strategy. We also provide confidence scores for our predictions."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We understand the sensitive nature of legislative data. All uploaded documents and analysis results are encrypted and stored securely. We do not share your data with any third parties. Your privacy and security are our top priorities."
    },
    {
      question: "Who is Legismaker designed for?",
      answer: "Legismaker is built for congressional staffers, legislative analysts, policy advisors, and anyone involved in the federal legislative process. Our tools are designed to be intuitive and provide actionable insights for professionals on Capitol Hill."
    },
    {
      question: "How are compromise suggestions generated?",
      answer: "Our AI identifies sections of a bill that are likely to be contentious and suggests amendments based on legislative precedent and data on lawmaker preferences. These suggestions are designed to help you find common ground and build coalitions without compromising the bill's core objectives."
    },
    {
      question: "Can I use Legismaker for non-partisan analysis?",
      answer: "Absolutely. Our platform is non-partisan and provides objective analysis based on the data. It is designed to be a valuable tool for any office, regardless of party affiliation."
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
            Everything you need to know about our legislative analysis platform.
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
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Access the most powerful legislative analysis tool on the Hill.
            </p>
            <Button asChild>
              <Link href="https://app.legismaker.com/login" className="flex items-center">
                Get Started
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