// import React, { useRef, useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// const Contact: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await emailjs.sendForm(
//         'service_vzq1mqj',   // 🔹 EmailJS Service ID
//         'template_1r4ufyc',  // 🔹 EmailJS Template ID
//         formRef.current!,
//         'eMznvZG-sRNGQj3JR'    // 🔹 EmailJS Public Key
//       );

//       setIsSubmitted(true);
//       if (formRef.current) formRef.current.reset();
//     } catch (err) {
//       console.error('Email send failed:', err);
//     }

//     setIsSubmitting(false);
//     setTimeout(() => setIsSubmitted(false), 5000);
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Ready to bring your vision to life? I'd love to hear about your project 
//             and discuss how we can create something amazing together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">Send me a message</h2>
            
//             {/* Success Message */}
//             {isSubmitted && (
//               <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
//                 <CheckCircle className="h-6 w-6 text-green-600" />
//                 <div>
//                   <p className="text-green-800 font-semibold">Message sent successfully!</p>
//                   <p className="text-green-600 text-sm">I'll get back to you within 24 hours.</p>
//                 </div>
//               </div>
//             )}

//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
//                     placeholder="Your full name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Subject *
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
//                   placeholder="Tell me about your project, timeline, and any specific requirements..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send className="h-5 w-5" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8">
//             {/* Your contact details remain same */}
//           </div>
//         </div>
//       </div>
//     </div>

//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div className="bg-purple-50 rounded-2xl p-8">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 I'm always excited to discuss new projects and creative challenges. 
//                 Whether you need a complete brand identity or just want to refresh your 
//                 existing materials, let's talk!
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-purple-100 p-3 rounded-xl">
//                     <Mail className="h-6 w-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">Email</div>
//                     <div className="text-gray-600">hello@emilysmith.design</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="bg-purple-100 p-3 rounded-xl">
//                     <Phone className="h-6 w-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">Phone</div>
//                     <div className="text-gray-600">+1 (555) 123-4567</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="bg-purple-100 p-3 rounded-xl">
//                     <MapPin className="h-6 w-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">Location</div>
//                     <div className="text-gray-600">San Francisco, CA</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
//               <h3 className="text-2xl font-bold mb-4">Project Timeline</h3>
//               <p className="text-purple-100 mb-6">
//                 Most projects take 2-4 weeks from concept to completion, depending on scope and complexity.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Initial consultation: 1-2 days</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Concept development: 5-7 days</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Revisions & refinement: 3-5 days</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Final delivery: 1-2 days</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//   );
// };

// export default Contact;








// import React, { useState, useRef } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
// import emailjs from 'emailjs-com';

// const Contact: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await emailjs.sendForm(
//         'service_vzq1mqj',   // 🔹 EmailJS Service ID
//         'template_1r4ufyc',  // 🔹 EmailJS Template ID
//         formRef.current!,
//         'eMznvZG-sRNGQj3JR'    // 🔹 EmailJS Public Key
//       );

//       setIsSubmitted(true);
//       if (formRef.current) formRef.current.reset();
//     } catch (err) {
//       console.error('Email send failed:', err);
//     }

//     setIsSubmitting(false);
//     setTimeout(() => setIsSubmitted(false), 5000);
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Ready to bring your vision to life? I'd love to hear about your project 
//             and discuss how we can create something amazing together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">Send me a message</h2>
            
//             {/* Success Message */}
//             {isSubmitted && (
//               <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
//                 <CheckCircle className="h-6 w-6 text-green-600" />
//                 <div>
//                   <p className="text-green-800 font-semibold">Message sent successfully!</p>
//                   <p className="text-green-600 text-sm">I'll get back to you within 24 hours.</p>
//                 </div>
//               </div>
//             )}

//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
//                     placeholder="Your full name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Subject *
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
//                   placeholder="Tell me about your project, timeline, and any specific requirements..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send className="h-5 w-5" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8">
//             {/* Your contact details remain same */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_vzq1mqj", // 🔹 EmailJS Service ID
        "template_1r4ufyc", // 🔹 EmailJS Template ID
        formRef.current!,
        "eMznvZG-sRNGQj3JR" // 🔹 EmailJS Public Key
      );

      setIsSubmitted(true);
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      console.error("Email send failed:", err);
    }

    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'd love to hear about your
            project and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send me a message
            </h2>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <div>
                  <p className="text-green-800 font-semibold">
                    Message sent successfully!
                  </p>
                  <p className="text-green-600 text-sm">
                    I'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-purple-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to discuss new projects and creative
                challenges. Whether you need a complete brand identity or just
                want to refresh your existing materials, let's talk!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">
                      hello@emilysmith.design
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Project Timeline</h3>
              <p className="text-purple-100 mb-6">
                Most projects take 2-4 weeks from concept to completion,
                depending on scope and complexity.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Initial consultation: 1-2 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Concept development: 5-7 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Revisions & refinement: 3-5 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Final delivery: 1-2 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
