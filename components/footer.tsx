import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DS</span>
              </div>
              <span className="font-semibold">Digital Solutions</span>
            </div>
            <p className="text-foreground/60 text-sm">ZYLO technology and digital services company delivering exceptional results.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/60">
                <Mail size={16} />
                <a href="mailto:info@digitalsolutions.com" className="hover:text-foreground transition-colors">
                  info@digital.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <Phone size={16} />
                <a href="tel:+1-555-123-4567" className="hover:text-foreground transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <MapPin size={16} />
                <span>Coimbatore, TN</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">&copy; 2024 Digital Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
