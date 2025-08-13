import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string;
}

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Modern Tech Startup Brand',
      category: 'branding',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete brand identity for innovative tech company',
      details: 'A comprehensive branding project for a cutting-edge tech startup, including logo design, color palette, typography system, and brand guidelines. The design reflects innovation and trustworthiness.'
    },
    {
      id: 2,
      title: 'Organic Food Packaging',
      category: 'packaging',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Sustainable packaging design for organic products',
      details: 'Eco-friendly packaging design that communicates the brand\'s commitment to sustainability while maintaining shelf appeal and functionality.'
    },
    {
      id: 3,
      title: 'Fashion Magazine Layout',
      category: 'print',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Editorial design for luxury fashion publication',
      details: 'A sophisticated layout design for a high-end fashion magazine, featuring elegant typography, strategic white space, and compelling visual hierarchy.'
    },
    {
      id: 4,
      title: 'Restaurant Website Design',
      category: 'digital',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern web interface for fine dining establishment',
      details: 'A responsive website design that captures the restaurant\'s ambiance through carefully chosen imagery, typography, and color schemes that reflect the culinary experience.'
    },
    {
      id: 5,
      title: 'Fitness Brand Campaign',
      category: 'branding',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Energetic brand identity for fitness center',
      details: 'Dynamic branding that motivates and inspires, using bold colors and strong typography to convey energy, strength, and achievement.'
    },
    {
      id: 6,
      title: 'Art Gallery Poster Series',
      category: 'print',
      image: 'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Contemporary poster design for art exhibition',
      details: 'A series of promotional posters for a contemporary art gallery, balancing artistic expression with clear information hierarchy and visual impact.'
    }
  ];

  const categories = ['all', 'branding', 'print', 'digital', 'packaging'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of my recent work spanning brand identity, 
            print design, digital experiences, and packaging solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2 uppercase tracking-wide">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="text-sm text-purple-600 font-medium mb-2 uppercase tracking-wide">
                  {selectedItem.category}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedItem.details}</p>
                
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;