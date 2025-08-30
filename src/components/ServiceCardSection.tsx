import React from 'react'

interface Service {
    title: string;
    description: string;
    color: string;
}

function ServiceCardSection() {

const mockServices: Service[] = [
    {
        title : "Birth Chart Reading",
        description : "Complete natal chart analysis revealing your personality, strengths, and life path",
        color: 'bg-orange-200'
    },
    {
        title : "Love & Relationships",
        description : " Compatibility analysis and guidance for romantic relationships and marriage",
        color: 'bg-blue-200'
    },
    {
        title : "Career Guidance",
        description : "Professional path analysis and timing for career changes and opportunities",
        color: 'bg-yellow-200'
    },
    {
        title : "Vedic Astrology",
        description : "Traditional Indian astrology with precise calculations and remedial measures",
        color: 'bg-green-200'
    },
    {
        title : "Vastu Consultation",
        description : "Harmonizing your living and working spaces with cosmic energies",
        color: 'bg-purple-200'
    },
    {
        title : "Gemstone Therapy",
        description : "Personalized gemstone recommendations for enhancing positive energies",
        color: 'bg-cyan-200'
    },
    {
        title : "Muhurat Selection",
        description : "Auspicious timing selection for important life events and ceremonies",
        color: 'bg-yellow-200'
    },
    {
        title : "Spiritual Guidance",
        description : "      Meditation practices and spiritual development based on your cosmic blueprint",
        color: 'bg-red-200'
    },
]


  return (
    <div className=' grid grid-cols-2 gap-4 md:grid-cols-4'>
      {mockServices.map((service, idx) => {
        return (
          <div key={idx} className={`p-4 mb-4 bg-background flex flex-col items-center text-center rounded-md`}>
            <div className={`w-16 h-16 rounded ${service.color} mb-3`}></div>
            <h2 className='text-lg font-medium text-md'>{service.title}</h2>
            <p className='text-sm text-muted'>{service.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ServiceCardSection
