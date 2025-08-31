"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Mail,
  MessageSquare,
  Users,
  Heart,
  Stethoscope,
  MapPin,
  CreditCard,
  Star,
  CheckCircle,
  ArrowRight,
  Filter,
  X,
} from "lucide-react";
import { FAQ, faqs } from "@/data/faq";
import Link from "next/link";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Get unique categories
  const categories = ["All", ...new Set(faqs.map((faq) => faq.category))];

  // Category icons mapping
  const categoryIcons = {
    All: HelpCircle,
    General: Users,
    Eligibility: CheckCircle,
    "Getting Started": Star,
    Services: Stethoscope,
    Payment: CreditCard,
    "About Us": Heart,
    "Service Area": MapPin,
  } as const;

  type Category = keyof typeof categoryIcons;

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleFAQ = (faqId: any) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4 mr-2" />
              Get Answers to Your Questions
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Frequently Asked
              <span className="text-blue-600"> Questions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Find answers to common questions about our home healthcare
              services, getting started, insurance coverage, and more.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">
                Filter by category:
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const iconKey =
                category in categoryIcons ? (category as Category) : "All";
              const IconComponent = categoryIcons[iconKey];
              const isActive = selectedCategory === category;
              const count =
                category === "All"
                  ? faqs.length
                  : faqs.filter((faq) => faq.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      isActive ? "bg-blue-500" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {(searchTerm || selectedCategory !== "All") && (
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Showing {filteredFAQs.length} of {faqs.length} questions
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
              {(searchTerm || selectedCategory !== "All") && (
                <button
                  onClick={clearSearch}
                  className="ml-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Questions Found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any questions matching your search. Try
                different keywords or browse all categories.
              </p>
              <button
                onClick={clearSearch}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View All Questions
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq: FAQ, index) => {
                const isExpanded = expandedFAQ === faq.id;
                const IconComponent =
                  categoryIcons[faq.category as Category] ??
                  categoryIcons["All"];

                return (
                  <div
                    key={faq.id}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {faq.question}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6">
                        <div className="ml-14 pt-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is here to help. Get in touch with us for personalized
              assistance with your home healthcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Call Us
              </h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our team for immediate answers to your
                questions.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-2xl font-bold text-blue-600">
                  (800) 553-2892
                </p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              <a
                href="tel:8005532892"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Call Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Email Us
              </h3>
              <p className="text-gray-600 mb-6">
                Send us your questions and we'll respond within hours.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-teal-600">
                  referrals@allnurseshomehealth.com
                </p>
                <p className="text-sm text-gray-500">Response within hours</p>
              </div>
              <a
                href="mailto:referrals@allnurseshomehealth.com"
                className="bg-teal-600 text-white mt-8 px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors inline-flex items-center"
              >
                Send Email
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Schedule Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Book a free consultation to discuss your specific healthcare
                needs.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-lg font-medium text-green-600">
                  Free Consultation
                </p>
                <p className="text-sm text-gray-500">No commitment required</p>
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center">
                {/* Schedule Now
                <ArrowRight className="ml-2 h-4 w-4" /> */}
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Most Popular Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the questions we get asked most frequently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {faqs.slice(0, 6).map((faq: FAQ, index) => {
              const IconComponent =
                categoryIcons[faq.category as Category] ?? categoryIcons["All"];
              return (
                <div
                  key={faq.id}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let questions hold you back from getting the care you deserve.
            Contact us today and let our expert team guide you through the
            process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8005532892"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (800) 553-2892
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
