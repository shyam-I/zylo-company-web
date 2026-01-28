'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowRight } from 'lucide-react'

export default function WebsiteRebuildingPage() {
  const benefits = [
    'Modern, attractive design that impresses visitors',
    'Improved performance and faster load times',
    'Better mobile experience',
    'Increased conversions and sales',
    'Improved SEO rankings',
    'Zero downtime migration',
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Planning & Analysis',
      description: 'Analyze current site and plan the rebuild strategy.',
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Build modern design and functionality on new platform.',
    },
    {
      number: '03',
      title: 'Content Migration',
      description: 'Transfer and optimize all content to new site.',
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Comprehensive testing across all browsers and devices.',
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Seamless launch with zero downtime.',
    },
    {
      number: '06',
      title: 'Support & Training',
      description: 'Full support and training for your team.',
    },
  ]

  const deliverables = [
    'Modern website design',
    'Responsive mobile experience',
    'Complete content migration',
    'Performance optimization',
    'SEO improvements',
    'New features and functionality',
    'Analytics setup',
    'Training and documentation',
  ]

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-background to-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Website Rebuilding
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              Modernize your outdated website with fresh design, better performance, and new capabilities.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow inline-block"
            >
              Get a Quote for This Service
            </a>
          </div>
        </section>

        {/* Problem → Solution */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Outdated websites create a poor impression and drive visitors away. Old technology means slow performance, security risks, and limited functionality.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Patching and updating old sites becomes increasingly expensive and difficult.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We rebuild your website from the ground up using modern technologies and design practices. Your new site will be faster, more secure, and more effective at converting visitors.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We handle the entire process seamlessly, preserving your content and search rankings while giving you a completely fresh website.
              </p>
            </div>
          </div>
        </section>

        {/* Features & Deliverables */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-card border border-border rounded-xl p-6 hover:border-blue-500 transition-all">
                <div className="text-3xl font-bold text-blue-600 mb-3">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 rounded-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <ArrowRight size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-foreground/80">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Modernize Your Website?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's give your website the modern look and performance it deserves.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-shadow inline-block"
            >
              Get a Quote for This Service
            </a>
          </div>
        </section>

        {/* Lead Capture */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <LeadForm servicePreselected="Website Rebuilding" />
        </section>
      </main>
      <Footer />
    </>
  )
}
