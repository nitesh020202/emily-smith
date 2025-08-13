import React from 'react';
import { Award, Heart, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'Adobe Creative Suite',
    'Figma & Sketch',
    'Brand Strategy',
    'Typography',
    'Color Theory',
    'Print Production',
    'Web Design',
    'Packaging Design'
  ];

  const services = [
    {
      icon: Lightbulb,
      title: 'Brand Identity Design',
      description: 'Creating memorable logos, color palettes, and comprehensive brand guidelines that establish a strong visual foundation for your business.'
    },
    {
      icon: Heart,
      title: 'Print & Marketing Materials',
      description: 'Designing brochures, business cards, posters, and advertising materials that effectively communicate your message and drive engagement.'
    },
    {
      icon: Users,
      title: 'Digital Design',
      description: 'Crafting web graphics, social media content, and digital marketing assets optimized for online platforms and user engagement.'
    },
    {
      icon: Award,
      title: 'Packaging Design',
      description: 'Developing product packaging that not only protects but also attracts customers and reinforces brand values at the point of sale.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-purple-600">Emily Smith</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate graphic designer with over 8 years of experience helping businesses 
              create compelling visual stories. I believe great design should not only look 
              beautiful but also solve problems and connect with people on an emotional level.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Emily Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="font-bold text-gray-900">Award Winner</div>
                  <div className="text-gray-600 text-sm">Design Excellence 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Story */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Journey</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              My design journey began during my university years studying Visual Communication Design. 
              I was immediately drawn to the power of visual storytelling and how thoughtful design 
              could influence emotions, behaviors, and decision-making.
            </p>
            <p>
              After graduating with honors, I started my career at a creative agency where I honed 
              my skills working with diverse clients across various industries. This experience taught 
              me the importance of understanding each client's unique challenges and translating their 
              vision into compelling visual solutions.
            </p>
            <p>
              In 2018, I took the leap into freelancing to have more creative freedom and work directly 
              with passionate business owners and entrepreneurs. Since then, I've had the privilege of 
              helping over 150 clients bring their brands to life through thoughtful, strategic design.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 text-center hover:from-purple-100 hover:to-purple-200 transition-all duration-200 transform hover:scale-105"
              >
                <div className="font-semibold text-purple-800">{skill}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">What I Offer</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            I provide comprehensive design services tailored to help your business stand out 
            and connect with your target audience effectively.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100 hover:border-purple-200"
              >
                <service.icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">My Design Philosophy</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "Great design is not just about making things look pretty. It's about solving problems, 
            telling stories, and creating meaningful connections between brands and people. Every project 
            is an opportunity to make a positive impact through thoughtful, strategic design."
          </p>
          <div className="mt-8 text-2xl font-semibold">- Emily Smith</div>
        </div>
      </div>
    </div>
  );
};

export default About;