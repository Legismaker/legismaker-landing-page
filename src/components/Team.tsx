'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const Team = () => {
  const teamMembers = [
    {
      name: "Nick Harty",
      role: "Co-Founder & Technical Lead",
      bio: "Nick leads product and engineering—turning dense policy into structured strategy using machine learning and intuitive design. He's presented at the Congressional Hackathon and built tools trusted by student policy labs and civic tech teams alike.",
      image: "/profiles/nickharty.jpeg",
      linkedin: "https://www.linkedin.com/in/nicksheaharty/"
    },
    {
      name: "Aum Dhruv", 
      role: "Co-Founder & Head of Business Development",
      bio: "Aum leads Legismaker's outreach, pilots, and partnerships—bridging the gap between engineering and political reality. He turns frontline staffer pain points into scalable solutions—driven by a belief that Congress doesn't need disruption. It needs tools that work.",
      image: "/profiles/aumdhruv.jpeg",
      linkedin: "https://www.linkedin.com/in/aumdhruv/"
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="team">
      {/* Blended background that flows from previous section and into next */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-background/95" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/8 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
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
              Our Founders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The strategists behind the platform. Our team combines deep technical expertise with political experience to create tools that truly understand the needs of modern staffers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full group">
                <CardHeader className="items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-6"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary/30 group-hover:border-primary/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                  </motion.div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-background/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team 