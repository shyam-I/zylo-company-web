'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowRight } from 'lucide-react'

export default function DigitalMarketingPage() {
  const benefits = [
    'Increased website traffic and visibility',
    'Higher conversion rates and sales',
    'Cost-effective customer acquisition',
    'Data-driven campaign optimization',
    'Multi-channel strategy for maximum reach',
    'Measurable ROI and transparent reporting',
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Market & Competitor Analysis',
      description: 'We analyze your market, competitors, and target audience.',
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive multi-channel marketing strategy.',
    },
    {
      number: '03',
      title: 'Campaign Setup',
      description: 'Set up campaigns across Google, social media, and email.',
    },
    {
      number: '04',
      title: 'Content Creation',
      description: 'Develop engaging content optimized for conversions.',
    },
    {
      number: '05',
      title: 'Launch & Optimization',
      description: 'Launch campaigns and continuously optimize for performance.',
    },
    {
      number: '06',
      title: 'Reporting & Analysis',
      description: 'Monthly reports with insights and recommendations.',
    },
  ]

  const deliverables = [
    'Marketing strategy document',
    'SEO optimization',
    'Google Ads campaigns',
    'Social media marketing',
    'Email marketing campaigns',
    'Content calendar and creation',
    'Landing page optimization',
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
              Digital Marketing
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              Strategic campaigns that drive traffic, leads, and revenue growth for your business.
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
                Without a strategic marketing approach, you're wasting money on ads with no clear ROI. Most businesses struggle to reach the right audience at the right time.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Scattered marketing efforts across multiple channels without coordination lead to inefficiency and missed opportunities.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We develop integrated marketing strategies that align all channels around your business goals. Our data-driven approach ensures every dollar spent generates measurable results.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                From SEO and paid ads to social media and email marketing, we coordinate everything for maximum impact and efficiency.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create a marketing strategy that drives real results for your business.
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
          <LeadForm servicePreselected="Digital Marketing" />
        </section>
      </main>
      <Footer />
    </>
  )
}
