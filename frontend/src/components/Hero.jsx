'use client'

import { useEffect, useState } from 'react'
import { ImageCarousel } from './ImageCarousel'

const news = [
  "Recruitment for Various Teaching & Non-Teaching Posts at RKGIT Ghaziabad",
  "Recruitment for Junior Research Fellow (JRF)",
  "Registration open for HackWithIT"
]

export function Hero() {
  const [currentNews, setCurrentNews] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % news.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <ImageCarousel />
      
      {/* News Ticker */}
      <div className="bg-[#003366] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-red-600 px-4 py-1 mr-4 whitespace-nowrap">
              WELCOME TO RKGIT
            </div>
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {news[currentNews]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

