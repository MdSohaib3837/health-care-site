"use client";
import React, { useEffect, useState } from "react";
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
  Stethoscope,
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";
import ReviewForm from "@/components/reviewForm";

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [openReviewForm, setOpenReviewForm] = useState(false);
  const [dynamicReviews, setDynamicReviews] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(10); // Show 10 initially

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const json = await res.json();
        if (json.success) {
          setDynamicReviews(json.reviews || []);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    }
    fetchReviews();
  }, []);

  const allTestimonials = [
    ...dynamicReviews.map((r) => ({
      id: r.id,
      content: r.message,
      author: `${r.firstname} ${r.lastname}`.trim(),
      rating: r.rating,
      location: r.service_type || r.location || "Austin, TX",
    })),
    ...testimonials,
  ];

  // Calculate actual average rating
  const averageRating =
    allTestimonials.length > 0
      ? (
          allTestimonials.reduce((acc, curr) => acc + (curr.rating || 5), 0) /
          allTestimonials.length
        ).toFixed(1)
      : "5.0";

  const totalTestimonials = allTestimonials.length;

  // Visible testimonials for the grid
  const visibleTestimonials = allTestimonials.slice(0, visibleCount);
  const hasMore = visibleCount < allTestimonials.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, allTestimonials.length));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Auto-advance
  React.useEffect(() => {
    if (isAutoPlay && allTestimonials.length > 0) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, allTestimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  // Render partial stars for average rating display
  const renderAverageStars = (avgRating: number) => {
    const fullStars = Math.floor(avgRating);
    const hasHalfStar = avgRating % 1 >= 0.5;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            );
          } else if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} className="relative">
                <Star className="h-5 w-5 text-gray-300" />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: "50%" }}
                >
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
              </div>
            );
          } else {
            return <Star key={i} className="h-5 w-5 text-gray-300" />;
          }
        })}
        <span className="ml-2 font-semibold text-gray-700">{avgRating}</span>
      </div>
    );
  };

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
                {renderAverageStars(parseFloat(averageRating))}
                <div className="text-sm text-gray-600 mt-2">Average Rating</div>
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
      {allTestimonials.length > 0 && (
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
                      {renderStars(allTestimonials[currentTestimonial].rating)}
                    </div>

                    <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic">
                      "{allTestimonials[currentTestimonial].content}"
                    </blockquote>

                    <div className="flex items-center justify-center space-x-4">
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8" />
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-semibold">
                          {allTestimonials[currentTestimonial].author}
                        </div>
                        <div className="flex items-center space-x-1 opacity-90">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {allTestimonials[currentTestimonial].location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center space-x-2 mt-8">
                    {allTestimonials.map((_, index) => (
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
      )}

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
            {visibleTestimonials.map((testimonial) => (
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

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
              >
                Load More Reviews
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <p className="text-gray-600 mt-4">
                Showing {visibleCount} of {totalTestimonials} reviews
              </p>
            </div>
          )}
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
            <button
              onClick={() => setOpenReviewForm(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
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
      <ReviewForm
        open={openReviewForm}
        onClose={() => setOpenReviewForm(false)}
      />
    </div>
  );
};

export default TestimonialsPage;
