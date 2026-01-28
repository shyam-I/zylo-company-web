'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowRight } from 'lucide-react'

export default function SEOPage() {
  const benefits = [
    'Higher search engine rankings',
    'More organic traffic',
    'Better user experience',
    'Long-term sustainable growth',
    'Cost-effective marketing',
    'Increased credibility and trust',
  ]

  const processSteps = [
    {
      number: '01',
      title: 'SEO Audit',
      description: 'Comprehensive technical and content audit of your website.',
    },
    {
      number: '02',
      title: 'Keyword Research',
      description: 'Identify high-value keywords your audience is searching for.',
    },
    {
      number: '03',
      title: 'On-Page Optimization',
      description: 'Optimize content, meta tags, and site structure.',
    },
    {
      number: '04',
      title: 'Technical SEO',
      description: 'Fix technical issues affecting search engine crawling.',
    },
    {
      number: '05',
      title: 'Link Building',
      description: 'Build quality backlinks from authoritative sources.',
    },
    {
      number: '06',
      title: 'Monitoring & Reporting',
      description: 'Track rankings and provide monthly performance reports.',
    },
  ]

  const deliverables = [
    'SEO audit report',
    'Keyword strategy',
    'On-page optimization',
    'Technical SEO fixes',
    'Content optimization',
    'Link building campaign',
    'Local SEO (if applicable)',
    'Monthly rankings report',
  ]

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-background to-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              SEO Optimization
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              Rank higher on Google and reach more customers searching for your services.
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
                If you're not on the first page of Google, you're losing customers. Your competitors are capturing search traffic that could be yours.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                DIY SEO attempts often lead to wasted time and ineffective strategies that don't produce results.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We use proven SEO strategies to improve your rankings and drive qualified organic traffic. Our approach combines technical optimization, content strategy, and link building.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We focus on sustainable, long-term results rather than shortcuts that can hurt your site.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Dominate Search Results?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's improve your search rankings and drive more qualified traffic.
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
          <LeadForm servicePreselected="SEO Optimization" />
        </section>
      </main>
      <Footer />
    </>
  )
}
