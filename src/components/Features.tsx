'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Vote, 
  GitMerge, 
  Users, 
  AlertTriangle,
  Network,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const Features = () => {
  const features = [
    {
      title: "Bill Summary",
      description: "Cuts through legalese to deliver a concise, plain-language overview of the bill's purpose and key provisions. Understand what matters in seconds.",
      icon: FileText,
      items: [
        "Plain-language summaries",
        "Key provision identification", 
        "Purpose and impact analysis",
        "Reduces reading time"
      ]
    },
    {
      title: "Predicted Votes",
      description: "Uses voting records, caucus dynamics, and text analysis to forecast likely support and opposition. Not just red vs. blue—shows where margins are tight.",
      icon: Vote,
      items: [
        "Support & opposition forecasting",
        "Analysis of voting records",
        "Caucus alignment indicators",
        "Identifies tight margins"
      ]
    },
    {
      title: "Compromise Suggestions",
      description: "Identifies potential amendments likely to unlock swing votes without gutting the bill. Backed by model confidence and legislative precedent.",
      icon: GitMerge,
      items: [
        "Amendment recommendations",
        "Swing-vote targeting",
        "Model confidence scores",
        "Based on legislative precedent"
      ]
    },
    {
      title: "Pivotal Lawmakers",
      description: "Flags lawmakers whose support would be decisive—based on district alignment, past votes, and coalition influence. Helps teams focus outreach.",
      icon: Users,
      items: [
        "Key lawmaker identification",
        "District alignment data",
        "Coalition influence mapping",
        "Targeted outreach suggestions"
      ]
    },
    {
      title: "Narrow Margins",
      description: "Automatically detects sections of the bill most likely to cause partisan or intra-party friction. Know where the fault lines are—before markup.",
      icon: AlertTriangle,
      items: [
        "Friction point detection",
        "Partisan & intra-party analysis",
        "Proactive issue flagging",
        "Pre-markup insights"
      ]
    },
    {
      title: "Coalition Mapping (Coming Soon)",
      description: "Visualizes how different policy factions might align—or fracture—on your bill. Build smarter coalitions with data, not guesswork.",
      icon: Network,
      items: [
        "Faction alignment visualization",
        "Coalition-building scenarios",
        "Potential fracture points",
        "Data-driven strategy"
      ]
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Dark background with subtle blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
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
              A Smarter Legislative Toolkit
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to turn a bill into a winning strategy. Professional-grade tools designed for the realities of Capitol Hill.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 group/item"
                      >
                        <div className="flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover/item:bg-primary/30 transition-colors duration-300">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
              Ready to Build Your Game Plan?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the future of legislating with professional tools designed for staffers.
            </p>
            <Button asChild>
              <Link href="https://app.legismaker.com/login" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 