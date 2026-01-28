'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Users, Target, Lightbulb, Rocket } from 'lucide-react'

export default function AboutPage() {
  const strengths = [
    {
      icon: Users,
      title: 'Talented Team',
      description: 'Our team consists of designers, developers, and marketing experts with years of experience.',
    },
    {
      icon: Target,
      title: 'Focused Approach',
      description: 'We focus on understanding your business goals and delivering solutions that drive results.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay on top of latest technologies and trends to provide cutting-edge solutions.',
    },
    {
      icon: Rocket,
      title: 'Growth Oriented',
      description: 'Your success is our success. We partner with you to achieve ambitious growth targets.',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-background to-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              About ZYLO Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              We're a team of passionate digital experts dedicated to helping businesses succeed in the digital world.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Digital Solutions was founded with a mission to help businesses of all sizes succeed in the digital world. We believe that great design, strategic thinking, and technical excellence go hand in hand.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Our team brings together diverse expertise in web development, digital marketing, UI/UX design, and more. We've worked with startups, small businesses, and enterprises to deliver transformative digital solutions.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                What sets us apart is our commitment to understanding your business, your challenges, and your goals. We don't just build websites or run campaigns – we create strategic partnerships that drive real business value.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-foreground/40 font-semibold">About Image</span>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance their brand presence, and deliver measurable results in an increasingly competitive digital landscape.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To be the trusted partner for digital transformation, known for delivering exceptional results, fostering innovation, and creating lasting relationships with our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength) => {
              const IconComponent = strength.icon
              return (
                <div key={strength.title} className="bg-card border border-border rounded-xl p-6">
                  <div className="mb-4">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
                  <p className="text-foreground/60">{strength.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <p className="text-foreground/70">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-foreground/70">Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-foreground/70">Years Experience</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve its digital transformation goals.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-shadow inline-block"
            >
              Work With Us
            </a>
          </div>
        </section>

        {/* Lead Capture */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <LeadForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
