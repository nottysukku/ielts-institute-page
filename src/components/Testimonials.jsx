import React from 'react'
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.5",
      country: "Canada",
      image: "SJ",
      text: "IELTS Excellence helped me achieve my dream score! The speaking practice sessions were incredibly helpful, and the mock tests prepared me perfectly for the real exam. The teachers are patient and provide excellent feedback.",
      course: "Academic IELTS"
    },
    {
      name: "Raj Patel",
      score: "Band 9.0",
      country: "Australia",
      image: "RP",
      text: "I was struggling with the writing module, but their structured approach and personalized feedback helped me score a perfect 9 in writing. The AI band score predictions were surprisingly accurate!",
      course: "General Training"
    },
    {
      name: "Emma Chen",
      score: "Band 8.0",
      country: "UK",
      image: "EC",
      text: "The flexibility of online classes and the quality of instruction exceeded my expectations. I improved from 6.5 to 8.0 in just 2 months. Highly recommend to anyone serious about IELTS preparation.",
      course: "Academic IELTS"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what our successful students have to say about their IELTS journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-6 text-blue-100">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                          {testimonial.score}
                        </span>
                        <span>• {testimonial.country}</span>
                      </div>
                      <p className="text-xs text-blue-600 font-medium mt-1">{testimonial.course}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tl from-blue-100 to-transparent rounded-full opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Our Track Record Speaks for Itself
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">8.5+</div>
              <div className="text-gray-600 font-medium">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Expert Trainers</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="btn-primary text-lg px-8 py-4">
              Join Our Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;