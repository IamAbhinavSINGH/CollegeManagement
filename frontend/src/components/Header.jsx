'use client'

import { Facebook, Instagram, Linkedin, Phone, Twitter, Youtube } from 'lucide-react'
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#f8f9fa] text-sm border-b">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="bg-yellow-500 px-2 py-1 rounded text-xs font-semibold">NAAC Grade A Certified College</span>
            <span className="text-xs">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hover:text-blue-600">Virtual Tour</Link>
            <Link to="/login" className="hover:text-blue-600">Alumni</Link>
            <Link to="/login" className="hover:text-blue-600">ERP-Login</Link>
            <Link to="/login" className="hover:text-blue-600">Careers</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#003366] text-white">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link to="/login" className="flex items-center space-x-2">
              <img 
                src="/pics/rkgitlogo.png" 
                alt="RKGIT Logo" 
                className="h-15"
              />
              <div className="text-lg font-bold">
                RAJ KUMAR GOEL<br />
                INSTITUTE OF TECHNOLOGY
              </div>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5" />
            <span>TOLL FREE: 18001207777</span>
            <div className="flex space-x-3">
              <Link to="/login" className="hover:text-yellow-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="/login" className="hover:text-yellow-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="/login" className="hover:text-yellow-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="/login" className="hover:text-yellow-400">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="/login" className="hover:text-yellow-400">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#003366] text-white border-t border-blue-800">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap">
            {[
              "Home",
              "About",
              "Courses",
              "Facilities",
              "Placement",
              "Admission",
              "Academics",
              "R&D",
              "IQAC",
              "EII",
              "Gallery",
              "Contact"
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/login"
                  className="block px-4 py-3 hover:bg-blue-800 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

