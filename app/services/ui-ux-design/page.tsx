'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowRight } from 'lucide-react'

export default function UIUXDesignPage() {
  const benefits = [
    'Increased user engagement and satisfaction',
    'Higher conversion rates',
    'Reduced support costs',
    'Competitive advantage in market',
    'Brand consistency and recognition',
    'Improved accessibility for all users',
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Research & Discovery',
      description: 'User research, competitor analysis, and requirements gathering.',
    },
    {
      number: '02',
      title: 'Wireframing & Prototyping',
      description: 'Create low-fidelity wireframes and interactive prototypes.',
    },
    {
      number: '03',
      title: 'Visual Design',
      description: 'Develop high-fidelity designs with brand consistency.',
    },
    {
      number: '04',
      title: 'User Testing',
      description: 'Test designs with real users and gather feedback.',
    },
    {
      number: '05',
      title: 'Iteration & Refinement',
      description: 'Refine designs based on testing and feedback.',
    },
    {
      number: '06',
      title: 'Handoff & Support',
      description: 'Provide design specifications and development support.',
    },
  ]

  const deliverables = [
    'User research report',
    'User personas and journeys',
    'Wireframes and prototypes',
    'Visual design system',
    'High-fidelity mockups',
    'Interaction specifications',
    'Design documentation',
    'Responsive design layouts',
  ]

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-background to-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              UI/UX Design
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              Beautiful, intuitive interfaces that users love and that drive business results.
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
                Poor design and confusing interfaces frustrate users and drive them away. Without proper UX, even great features go unused.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Designing by intuition instead of user research leads to missed opportunities and poor user satisfaction.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We create designs based on real user research and testing. Our approach ensures your interface is not just beautiful, but intuitive and effective.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                From initial research through final delivery, we focus on creating experiences that delight users and achieve your business goals.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Create an Amazing Experience?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's design an interface that your users will love.
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
          <LeadForm servicePreselected="UI/UX Design" />
        </section>
      </main>
      <Footer />
    </>
  )
}
