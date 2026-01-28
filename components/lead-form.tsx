'use client'

import React from "react"

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface LeadFormProps {
  servicePreselected?: string
  onSuccess?: () => void
}

export function LeadForm({ servicePreselected, onSuccess }: LeadFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceNeeded: servicePreselected || 'Web Development',
    budget: '',
    timeline: '',
    description: '',
  })

  const services = [
    'Web Development',
    'Digital Marketing',
    'Website Rebuilding',
    'UI/UX Design',
    'SEO Optimization',
    'Maintenance & Support',
  ]

  const budgetOptions = [
    '5k - 10k',
    '10k - 25k',
    '25k - 50k',
    '50k - 100k',
    '$100k+',
  ]

  const timelineOptions = [
    'ASAP (0-2 weeks)',
    'Urgent (2-4 weeks)',
    'Standard (1-2 months)',
    'Flexible (3+ months)',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        serviceNeeded: servicePreselected || 'Web Development',
        budget: '',
        timeline: '',
        description: '',
      })
      onSuccess?.()

      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Get Your Free Quote</h2>
        <p className="text-foreground/60 mb-8">Tell us about your project and we'll get back to you within 24 hours.</p>

        {isSuccess && (
          <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300">
            <p className="font-medium">Thank you! Your project details have been received. We'll be in touch soon.</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
            <p className="font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="ZYLO"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="ZYLO@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+Z"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="serviceNeeded" className="block text-sm font-medium mb-2">
                Service Needed *
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select budget range</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium mb-2">
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Project Description / Requirements *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Tell us about your project, goals, and any specific requirements..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Project Details'
              )}
            </button>
            <button
              type="button"
              className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
            >
              Schedule a Call
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
