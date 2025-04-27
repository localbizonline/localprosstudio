import React from 'react';
import { ArrowRight, BarChart2, TrendingUp, Users } from 'lucide-react';

const caseStudies = [
  {
    company: "Cape Town Coffee Co.",
    industry: "Food & Beverage",
    challenge: "Limited online presence, struggling to compete with larger chains",
    solution: "Targeted social media campaign + Google Ads optimization",
    results: {
      revenue: "247% increase in monthly revenue",
      customers: "5x increase in new customers",
      roi: "856% return on ad spend"
    },
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800"
  },
  {
    company: "Tech Solutions JHB",
    industry: "IT Services",
    challenge: "High cost per lead, inconsistent lead quality",
    solution: "AI-powered lead qualification + Marketing automation",
    results: {
      revenue: "189% increase in qualified leads",
      customers: "3x conversion rate improvement",
      roi: "642% return on investment"
    },
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
  },
  {
    company: "Durban Fresh Foods",
    industry: "Retail",
    challenge: "No e-commerce presence, declining foot traffic",
    solution: "E-commerce website + WhatsApp integration",
    results: {
      revenue: "312% increase in total sales",
      customers: "4x customer base growth",
      roi: "923% return on investment"
    },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
  }
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results for South African Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've helped hundreds of local businesses achieve remarkable growth through data-driven digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <img
                src={study.image}
                alt={study.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                <p className="text-sm text-indigo-600 mb-4">{study.industry}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Results:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="text-sm">{study.results.revenue}</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{study.results.customers}</span>
                    </div>
                    <div className="flex items-center text-purple-600">
                      <BarChart2 className="w-4 h-4 mr-2" />
                      <span className="text-sm">{study.results.roi}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Get Similar Results for Your Business
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;