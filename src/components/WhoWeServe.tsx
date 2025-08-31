'use client'

import { motion } from 'framer-motion'
import { 
  Building2, 
  Users, 
  TreePine,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const WhoWeServe = () => {
  const clientGroups = [
    {
      title: "Government Agencies & Contractors",
      description: "Federal, state, and local agencies, plus private sector organizations working with government clients who need compliant, secure technology solutions.",
      icon: Building2,
      services: [
        "Policy analysis and tracking systems",
        "Administrative workflow automation",
        "Compliance management systems", 
        "Integration with government systems",
        "Data visualization and reporting tools"
      ],
      examples: "Congressional offices, regulatory agencies, defense contractors, consulting firms"
    },
    {
      title: "Legislative Organizations",
      description: "Legislative bodies and policy organizations that need sophisticated tools to analyze, track, and manage complex legislative processes.",
      icon: Users,
      services: [
        "Bill analysis and tracking platforms",
        "Stakeholder management systems",
        "Coalition building tools",
        "Legislative research databases"
      ],
      examples: "State legislatures, policy think tanks, research institutions"
    },
    {
      title: "Advocacy & Nonprofit Organizations",
      description: "Mission-driven organizations like environmental groups, civil rights organizations, and advocacy coalitions that need powerful tools to advance their causes.",
      icon: TreePine,
      services: [
        "Campaign management platforms",
        "Grassroots organizing tools",
        "Impact tracking and reporting",
        "Donor and member engagement systems",
        "Policy monitoring and alerts"
      ],
      examples: "Sierra Club, ACLU, advocacy coalitions, nonprofit organizations"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="who-we-serve">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      
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
              Who We Serve
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with organizations across the public sector to deliver technology solutions that enhance government operations and public service delivery.
          </p>
        </motion.div>

        {/* Client Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {clientGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                      <group.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{group.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Our Solutions:</h4>
                      <div className="space-y-2">
                        {group.services.map((service, serviceIndex) => (
                          <motion.div
                            key={serviceIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (serviceIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {service}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-primary/10">
                      <p className="text-xs text-muted-foreground">
                        <strong>Examples:</strong> {group.examples}
                      </p>
                    </div>
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
              Ready to Discuss Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s explore how our expertise can help your organization achieve its technology goals.
            </p>
            <Button asChild>
              <Link href="#team" className="flex items-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoWeServe
