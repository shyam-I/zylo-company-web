'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Institutional Event Registration Website',
      category: 'Web',
      image: 'Screenshot 2026-01-28 141613',
      description: 'Full-stack event registration system with payment integration',
      link: 'https://jamboree.kathir.ac.in/',
    },
    {
      id: 2,
      title: 'Marketing Campaign',
      category: 'Marketing',
      image: 'Campaign',
      description: 'Multi-channel marketing campaign that increased leads by 150%',
       link: '',
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'Design',
      image: 'Mobile App',
      description: 'Beautiful and intuitive mobile application design',
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Web',
      image: 'Dashboard',
      description: 'Analytics dashboard for SaaS platform',
    },
    {
      id: 5,
      title: 'Brand Identity',
      category: 'Design',
      image: 'Brand',
      description: 'Complete brand identity redesign and guidelines',
    },
    {
      id: 6,
      title: 'Lead Gen Campaign',
      category: 'Marketing',
      image: 'Lead Gen',
      description: 'Targeted lead generation campaign across multiple platforms',
    },
    {
      id: 7,
      title: 'Corporate Website',
      category: 'Web',
      image: 'Corporate',
      description: 'Enterprise corporate website with CMS integration',
    },
    {
      id: 8,
      title: 'Social Media Strategy',
      category: 'Marketing',
      image: 'Social',
      description: 'Complete social media strategy and content calendar',
    },
    {
      id: 9,
      title: 'UX Research Study',
      category: 'Design',
      image: 'Research',
      description: 'In-depth UX research and competitive analysis',
    },
  ]

  const categories = ['All', 'Web', 'Marketing', 'Design']
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-background to-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Explore the amazing projects we've created for our clients
          </p>
        </section>

        {/* Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const Card = (
                <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer h-full">
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 aspect-video flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-cyan-500/30 transition-all">
                    <span className="text-foreground/40 font-semibold">{project.image}</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground/60">{project.description}</p>
                  </div>
                </div>
              )

              return project.link ? (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {Card}
                </a>
              ) : (
                <div key={project.id}>{Card}</div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Want Similar Results?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve incredible results.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-shadow inline-block"
            >
              Let's Talk
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
