"use client";
import React, { useState } from "react";
import {
  Star,
  Quote,
  Heart,
  Users,
  MapPin,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Stethoscope,
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Testimonials data (same as your testimonials.ts file)
  //   const testimonials = [
  //     {
  //       id: "1",
  //       content:
  //         "I'm very happy with the care and patience that we've experienced with All Nurses Home Health. They are very knowledgeable and helpful with explaining the healing course and what to watch out for. We are grateful to have them guide us through this rehabilitating process.",
  //       author: "Sarah M.",
  //       rating: 5,
  //       location: "Austin, TX",
  //     },
  //     {
  //       id: "2",
  //       content:
  //         "All Nurses Home Health took care of me after a major surgery. I was very impressed with their professionalism & knowledge. My nurse answered all my questions. If she didn't know the answer, she researched & promptly got back to me with an answer. I can't recommend them more highly!!",
  //       author: "Robert K.",
  //       rating: 5,
  //       location: "Round Rock, TX",
  //     },
  //     {
  //       id: "3",
  //       content:
  //         "I cannot say enough wonderful things about All Nurses Home Health and the incredible care they provided me. After undergoing multiple amputations, I was overwhelmed and unsure of how l would manage the road to recovery. From day one, they brought professionalism, compassion, and a level of care that truly went above and beyond anything I ever expected.",
  //       author: "Maria L.",
  //       rating: 5,
  //       location: "Cedar Park, TX",
  //     },
  //     {
  //       id: "4",
  //       content:
  //         "This Nurse owned company is the best for Home Health Care! The Nurses are compassionate, caring, and super knowledgeable! I would highly recommend this company for yourself, a loved one or another person who needs an At Home Nursing Service.",
  //       author: "Jennifer P.",
  //       rating: 5,
  //       location: "Georgetown, TX",
  //     },
  //     {
  //       id: "5",
  //       content:
  //         "The nurse that treated my wounds was outstanding. The way she explained the healing process and preparation to help prevent infection was very thorough. Her soft touch when changing my dressing was very comforting. She had an answer for every question that was asked.",
  //       author: "David R.",
  //       rating: 5,
  //       location: "Pflugerville, TX",
  //     },
  //     {
  //       id: "6",
  //       content:
  //         "My nurse is amazing! She is extremely skilled and has great communication. She always lets me know ahead of time when she will be arriving so I can plan the rest of my day. She cares about her patients and takes the time to explain everything she will be doing that visit.",
  //       author: "Linda S.",
  //       rating: 5,
  //       location: "Leander, TX",
  //     },
  //   ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Auto-advance testimonials
  React.useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const renderStars = (rating: any) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const averageRating =
    testimonials.reduce((acc, curr) => acc + curr.rating, 0) /
    testimonials.length;
  const totalTestimonials = testimonials.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Trusted by Families Across Austin
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              What Our
              <span className="text-blue-600"> Patients</span>
              <br />
              Are Saying
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Don't just take our word for it. Hear from the patients and
              families who have experienced the All Nurses Home Health
              difference firsthand.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {totalTestimonials}+
                </div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-12 text-white">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8">
                  <Quote className="h-24 w-24" />
                </div>
                <div className="absolute bottom-8 right-8 rotate-180">
                  <Quote className="h-24 w-24" />
                </div>
              </div>

              <div className="relative z-10">
                {/* Controls */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold">
                    Featured Patient Stories
                  </h2>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={toggleAutoPlay}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                    >
                      {isAutoPlay ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      onClick={prevTestimonial}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8" />
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-semibold">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="flex items-center space-x-1 opacity-90">
                        <MapPin className="h-4 w-4" />
                        <span>{testimonials[currentTestimonial].location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial
                          ? "bg-white"
                          : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Patient Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read more stories from patients and families who have trusted us
              with their healthcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Patients Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These testimonials reflect our core values and commitment to
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Clinical Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced certifications and specialized training ensure the
                highest quality care
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Compassionate Care
              </h3>
              <p className="text-gray-600 text-sm">
                Every patient is treated with dignity, respect, and genuine
                compassion
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm">
                Around-the-clock availability for urgent clinical concerns and
                questions
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nurse-Owned
              </h3>
              <p className="text-gray-600 text-sm">
                Founded and led by registered nurses who understand patient
                needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Coming Soon */}
      {/* <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Video Testimonials
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Coming soon: Hear directly from our patients in their own words
                about their experience with All Nurses Home Health.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                <Clock className="h-4 w-4 mr-2" />
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ready to Experience CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join the families who trust All Nurses Home Health for
              professional, compassionate care in the comfort of home.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quick Response
                </h3>
                <p className="text-gray-600">
                  Same-day eligibility verification for most insurance plans
                </p>
              </div>

              <div className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Expert Care
                </h3>
                <p className="text-gray-600">
                  Advanced certified nurses with specialized training
                </p>
              </div>

              <div className="text-center">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Compassionate Service
                </h3>
                <p className="text-gray-600">
                  Personalized care that treats you like family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your Story</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Have you received care from All Nurses Home Health? We'd love to
            hear about your experience and how we've made a difference in your
            healthcare journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
              Leave a Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call (800) 553-2892
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
