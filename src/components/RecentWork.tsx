import React, { useEffect, useRef } from 'react';
import { ExternalLink, Tag } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  image: string;
  category: 'ecommerce' | 'business' | 'portfolio';
  url: string;
}

const projects: Project[] = [
  {
    name: "Modern E-commerce Platform",
    description: "A fully responsive online store with seamless checkout experience",
    image: "/src/assets/images/mockups/MacBook iPhone 8 Mockup (4).png",
    category: "ecommerce",
    url: "https://example.com/store"
  },
  {
    name: "Corporate Website Redesign",
    description: "Clean and professional design for a leading consulting firm",
    image: "/src/assets/images/mockups/MacBook iPhone 8 Mockup (7).png",
    category: "business",
    url: "https://example.com/consulting"
  },
  {
    name: "Creative Portfolio",
    description: "Stunning portfolio website for a digital agency",
    image: "/src/assets/images/mockups/MacBook iPhone 8 mockup (6).png",
    category: "portfolio",
    url: "https://example.com/portfolio"
  },
  {
    name: "Tech Startup Landing Page",
    description: "High-converting landing page with modern aesthetics",
    image: "/src/assets/images/mockups/iMac Backdrop.png",
    category: "business",
    url: "https://example.com/startup"
  },
  {
    name: "Fashion Boutique",
    description: "Elegant e-commerce solution for luxury fashion brand",
    image: "/src/assets/images/mockups/MacBook iPhone 8 Mockup (7).png",
    category: "ecommerce",
    url: "https://example.com/fashion"
  },
  {
    name: "Artist Showcase",
    description: "Dynamic portfolio with immersive gallery experience",
    image: "/src/assets/images/mockups/MacBook iPhone 8 mockup (6).png",
    category: "portfolio",
    url: "https://example.com/artist"
  }
];

const RecentWork = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  const categories = Array.from(new Set(projects.map(project => project.category)));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest website designs and digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 ${
                isIntersecting
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} website design`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-indigo-200 transition-colors"
                    >
                      Visit Site <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 capitalize">
                      <Tag className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;