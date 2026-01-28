'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowRight } from 'lucide-react'

export default function MaintenanceSupportPage() {
  const benefits = [
    'Worry-free, always-working website',
    'Proactive issue prevention',
    'Enhanced security and protection',
    'Optimal performance at all times',
    'Priority support and fast response',
    'Predictable monthly costs',
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Initial Assessment',
      description: 'Audit your current website and systems.',
    },
    {
      number: '02',
      title: 'Maintenance Plan',
      description: 'Create a customized maintenance and support plan.',
    },
    {
      number: '03',
      title: 'Regular Monitoring',
      description: 'Continuous monitoring for issues and performance.',
    },
    {
      number: '04',
      title: 'Updates & Patches',
      description: 'Keep all software and plugins up to date.',
    },
    {
      number: '05',
      title: 'Security Management',
      description: 'Regular backups, scans, and security updates.',
    },
    {
      number: '06',
      title: 'Support & Optimization',
      description: 'Ongoing support and performance optimization.',
    },
  ]

  const deliverables = [
    'Regular backups and recovery',
    'Security monitoring and updates',
    'Performance optimization',
    'Software and plugin updates',
    'Bug fixes and troubleshooting',
    'SEO maintenance',
    'Priority email and phone support',
    'Monthly performance reports',
  ]

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-background to-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Maintenance & Support
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              Keep your digital assets secure, updated, and running smoothly with ongoing support.
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
                Websites require constant care and attention. Neglected sites become slow, insecure, and unreliable, hurting your business and reputation.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Managing updates, backups, and security on your own is time-consuming and risky.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We handle all the technical maintenance while you focus on your business. Our proactive approach prevents issues before they become problems.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                With regular updates, backups, security monitoring, and priority support, your website stays healthy and your mind stays at ease.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for Worry-Free Website Management?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let us handle the technical details while you focus on growing your business.
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
          <LeadForm servicePreselected="Maintenance & Support" />
        </section>
      </main>
      <Footer />
    </>
  )
}
