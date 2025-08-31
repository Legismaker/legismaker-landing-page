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
      title: "Policy Analysis Systems",
      description: "We build comprehensive legislative analysis platforms that transform complex bills into actionable insights. Custom-built for your organization's specific needs and workflows.",
      icon: FileText,
      items: [
        "Custom analysis frameworks",
        "Real-time bill tracking", 
        "Automated reporting systems",
        "Integration with existing tools"
      ]
    },
    {
      title: "Predictive Analytics Platforms",
      description: "Advanced data science solutions that forecast legislative outcomes using historical voting patterns, stakeholder analysis, and political dynamics modeling.",
      icon: Vote,
      items: [
        "Machine learning models",
        "Historical data integration",
        "Real-time prediction updates",
        "Custom confidence scoring"
      ]
    },
    {
      title: "Strategic Decision Support",
      description: "Intelligent systems that identify compromise opportunities and strategic pathways. Built using legislative precedent analysis and stakeholder mapping algorithms.",
      icon: GitMerge,
      items: [
        "Amendment recommendation engines",
        "Stakeholder influence modeling",
        "Coalition building tools",
        "Strategic pathway analysis"
      ]
    },
    {
      title: "Stakeholder Management Systems",
      description: "Comprehensive platforms for tracking, analyzing, and engaging with key decision-makers. Integrated CRM functionality designed specifically for government relations.",
      icon: Users,
      items: [
        "Contact management systems",
        "Influence mapping tools",
        "Engagement tracking",
        "Automated outreach workflows"
      ]
    },
    {
      title: "Risk Assessment Tools",
      description: "Early warning systems that identify potential roadblocks and contentious issues before they become problems. Proactive risk management for legislative strategy.",
      icon: AlertTriangle,
      items: [
        "Automated risk detection",
        "Issue escalation systems",
        "Stakeholder sentiment analysis",
        "Strategic contingency planning"
      ]
    },
    {
      title: "Data Visualization & Reporting",
      description: "Interactive dashboards and comprehensive reporting systems that make complex political data accessible and actionable for decision-makers at all levels.",
      icon: Network,
      items: [
        "Custom dashboard development",
        "Interactive data visualization",
        "Automated report generation",
        "Real-time monitoring systems"
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
              Our Service Capabilities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build custom software solutions that transform how government organizations analyze policy, engage stakeholders, and make strategic decisions.
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
              Ready to Transform Your Operations?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss how our custom software solutions can enhance your organization&apos;s capabilities.
            </p>
            <Button asChild>
              <Link href="#team" className="flex items-center">
                Contact Our Team
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