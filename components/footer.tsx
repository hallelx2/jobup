import React from 'react'
import { Logo } from './ui/logo'

function Footer() {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Logo />
              <p className="text-primary-foreground/80">
                Equipping job seekers with exceptional skills and qualities, making them highly sought after by top companies across Nigeria.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Our Platforms</h4>
              <ul className="space-y-3">
                <li className="hover:text-white transition-colors">Job Up Nigeria</li>
                <li className="hover:text-white transition-colors">Job Up Training</li>
                <li className="hover:text-white transition-colors">Job Up Marketplace</li>
                <li className="hover:text-white transition-colors">Mentorship Program</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li className="hover:text-white transition-colors">Free Courses</li>
                <li className="hover:text-white transition-colors">Weekly Training</li>
                <li className="hover:text-white transition-colors">Job Listings</li>
                <li className="hover:text-white transition-colors">Entrepreneurship</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <ul className="space-y-3">
                <li className="hover:text-white transition-colors">WhatsApp Groups</li>
                <li className="hover:text-white transition-colors">LinkedIn</li>
                <li className="hover:text-white transition-colors">Facebook</li>
                <li className="hover:text-white transition-colors">Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p>&copy; 2025 Job Up Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
