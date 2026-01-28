'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowRight } from 'lucide-react'

export default function WebDevelopmentPage() {
  const benefits = [
    'Responsive design works on all devices',
    'Lightning-fast performance and load times',
    'SEO-optimized architecture for search engines',
    'Secure, scalable, and maintainable code',
    'Integration with third-party tools and APIs',
    'Analytics and tracking built-in',
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business goals, target audience, and technical requirements.',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes to visualize the solution.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build your application using modern technologies and best practices.',
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures quality, security, and performance.',
    },
    {
      number: '05',
      title: 'Launch & Deployment',
      description: 'Deploy your application with zero downtime and full support.',
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and optimization for peak performance.',
    },
  ]

  const deliverables = [
    'Fully responsive web application',
    'Mobile-optimized experience',
    'Database design and integration',
    'Admin dashboard (if needed)',
    'API integrations',
    'Security best practices implemented',
    'Performance optimization',
    'Documentation and training',
  ]

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-background to-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Web Development
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              Custom, scalable web applications built with modern technologies to drive your business forward.
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
                Off-the-shelf solutions often don't fit your unique business needs. Generic website builders limit your capabilities and scalability.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Without proper technical foundation, you're stuck with slow performance, security vulnerabilities, and limited growth potential.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We build custom web applications tailored to your exact requirements. Our solutions are built on modern, proven technologies that scale with your business.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                You get a fast, secure, and fully customizable application that gives you competitive advantage in your market.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives results.
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
          <LeadForm servicePreselected="Web Development" />
        </section>
      </main>
      <Footer />
    </>
  )
}
