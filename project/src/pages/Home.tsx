import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Creative
                <span className="text-purple-600 block">Design Solutions</span>
                for Your Brand
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm Emily Smith, a passionate graphic designer with over 8 years of experience 
                creating stunning visual identities, marketing materials, and digital designs 
                that help businesses stand out and connect with their audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 text-lg font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Design workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-2xl font-bold text-purple-600">200+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, label: 'Happy Clients', value: '150+' },
              { icon: Award, label: 'Awards Won', value: '25+' },
              { icon: Star, label: 'Years Experience', value: '8+' },
              { icon: ArrowRight, label: 'Projects Done', value: '200+' }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <stat.icon className="h-8 w-8 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do Best</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I specialize in creating compelling visual stories that resonate with your audience 
              and drive meaningful engagement for your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Identity',
                description: 'Complete visual identity systems including logos, color palettes, and brand guidelines.',
                image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Print Design',
                description: 'Brochures, business cards, posters, and other marketing materials that make an impact.',
                image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Digital Design',
                description: 'Web graphics, social media content, and digital marketing assets.',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's collaborate to create something extraordinary that truly represents your brand 
            and connects with your audience.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 text-lg font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;