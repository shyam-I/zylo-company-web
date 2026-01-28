'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      icon: '💻',
      href: '/services/web-development',
      description: 'Custom, scalable web applications built with modern technologies.',
      benefits: [
        'Responsive design for all devices',
        'Fast performance and optimization',
        'SEO-friendly architecture',
        'Secure and maintainable code',
      ],
      cta: 'Get a Quote for Web Development',
    },
    {
      title: 'Digital Marketing',
      icon: '📈',
      href: '/services/digital-marketing',
      description: 'Strategic campaigns that drive traffic and conversions.',
      benefits: [
        'Multi-channel campaign strategy',
        'Data-driven optimization',
        'Conversion rate optimization',
        'Analytics and reporting',
      ],
      cta: 'Get a Quote for Digital Marketing',
    },
    {
      title: 'Website Rebuilding',
      icon: '🔄',
      href: '/services/website-rebuilding',
      description: 'Modernize your existing website with fresh design and performance.',
      benefits: [
        'Modern design refresh',
        'Performance optimization',
        'New features and functionality',
        'Zero downtime migration',
      ],
      cta: 'Get a Quote for Website Rebuilding',
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      href: '/services/ui-ux-design',
      description: 'Beautiful, intuitive interfaces that users love.',
      benefits: [
        'User research and insights',
        'Wireframing and prototyping',
        'Visual design',
        'User testing and iteration',
      ],
      cta: 'Get a Quote for UI/UX Design',
    },
    {
      title: 'SEO Optimization',
      icon: '🔍',
      href: '/services/seo-optimization',
      description: 'Rank higher and reach more customers on search engines.',
      benefits: [
        'Technical SEO audit',
        'Keyword strategy',
        'On-page optimization',
        'Link building',
      ],
      cta: 'Get a Quote for SEO Optimization',
    },
    {
      title: 'Maintenance & Support',
      icon: '⚙️',
      href: '/services/maintenance-support',
      description: 'Keep your digital assets secure, updated, and running smoothly.',
      benefits: [
        'Regular backups and monitoring',
        'Security updates',
        'Performance optimization',
        'Priority support',
      ],
      cta: 'Get a Quote for Maintenance & Support',
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              Comprehensive digital solutions designed to help your business grow and succeed
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-foreground/70 mb-6">{service.description}</p>

                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <ArrowRight size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.href}
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? Our team can create a custom solution tailored to your specific needs.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-shadow inline-block"
            >
              Discuss Your Custom Needs
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
