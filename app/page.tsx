'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Star, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom, scalable web applications built with modern technologies.',
      icon: '💻',
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive traffic and conversions.',
      icon: '📈',
    },
    {
      title: 'Website Rebuilding',
      description: 'Modernize your existing website with fresh design and performance.',
      icon: '🔄',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love.',
      icon: '🎨',
    },
    {
      title: 'SEO Optimization',
      description: 'Rank higher and reach more customers on search engines.',
      icon: '🔍',
    },
    {
      title: 'Maintenance & Support',
      description: 'Keep your digital assets secure, updated, and running smoothly.',
      icon: '⚙️',
    },
  ]

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web',
      image: 'Project 1',
    },
    {
      title: 'Marketing Campaign',
      category: 'Marketing',
      image: 'Project 2',
    },
    {
      title: 'Mobile App Design',
      category: 'Design',
      image: 'Project 3',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web',
      image: 'Project 4',
    },
    {
      title: 'Brand Identity',
      category: 'Design',
      image: 'Project 5',
    },
    {
      title: 'Lead Gen Campaign',
      category: 'Marketing',
      image: 'Project 6',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStartup Inc',
      text: 'Digital Solutions transformed our online presence completely. Their team is professional, creative, and delivered beyond expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Pro',
      text: 'Working with them was seamless. They understood our goals and executed perfectly. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      company: 'Fashion Brand Co',
      text: 'The design work was exceptional. Our conversion rate increased by 45% after the redesign. Amazing ROI!',
      rating: 5,
    },
  ]

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Years of experience across all digital disciplines',
      icon: Award,
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality',
      icon: Zap,
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and happy clients',
      icon: TrendingUp,
    },
    {
      title: 'Full Support',
      description: 'Ongoing support and maintenance included',
      icon: Users,
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
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
              Premium technology and digital services that drive real business results. From web development to marketing, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
                <div className="mt-4 text-primary font-medium group-hover:translate-x-2 transition-transform">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="px-8 py-3 bg-foreground/10 text-foreground font-semibold rounded-lg hover:bg-foreground/20 transition-colors inline-block"
            >
              Explore All Services
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-card/50 rounded-3xl border border-border">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Trusted by leading companies for quality, reliability, and results
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const IconComponent = item.icon
              return (
                <div key={item.title} className="bg-secondary border border-border rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/60">{item.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            See the results we've delivered for our clients
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.title}
                href="/projects"
                className="group relative overflow-hidden rounded-xl border border-border hover:border-blue-500 transition-all"
              >
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 aspect-video flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-cyan-500/30 transition-all">
                  <span className="text-foreground/40 font-semibold">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow inline-block"
            >
              View All Projects
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Real feedback from businesses we've helped grow
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-card border border-border rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of businesses that have grown with our digital solutions.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-shadow inline-block"
            >
              Start Your Project Today
            </a>
          </div>
        </section>

        {/* Contact/Lead Capture Section */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <LeadForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
