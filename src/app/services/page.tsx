"use client";

import React, { useState } from "react";
import {
  Stethoscope,
  Heart,
  Shield,
  Target,
  Syringe,
  Activity,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  MapPin,
  Award,
  Users,
  Zap,
  Target as Bandage,
  Droplets,
  AlertCircle,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const toggleService = (serviceId: any) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const primaryServices = [
    {
      id: "skilled-nursing",
      title: "Skilled Nursing Services",
      description:
        "Comprehensive nursing care delivered by experienced registered nurses in the comfort of your home.",
      icon: Stethoscope,
      color: "blue",
      features: [
        "Coordination of Care / Care Plan Management",
        "Comprehensive Physical Assessment / Health Screening",
        "Home Safety Evaluation / Fall Prevention and Emergency Preparedness",
        "Pain Management",
        "Medication Administration, Education, and Management",
        "Diabetic Education and Management",
        "Chronic Disease Education and Management",
      ],
    },
    {
      id: "wound-care",
      title: "Advanced Wound Care Management",
      description:
        "Specialized wound management and healing protocols using evidence-based practices by certified wound care nurses.",
      icon: Target,
      color: "teal",
      features: [
        "Managing Complex Wounds",
        "Compression Therapy",
        "Selective Sharp Debridement",
        "Wound V.A.C. Management",
        "Post-Surgical Recovery / Dressing Changes and Instruction",
        "Complication / Infection Prevention Instruction",
      ],
    },
    {
      id: "iv-therapy",
      title: "IV Therapy & Infusion Services",
      description:
        "Professional intravenous treatments and antibiotic administration in your home by certified nurses.",
      icon: Syringe,
      color: "green",
      features: [
        "IV Antibiotic Administration and Education",
        "Venipuncture/Lab Draws",
        "Instruction and Assistance with Injections",
        "IV line maintenance and monitoring",
        "Infusion therapy management",
      ],
    },
    {
      id: "specialized-care",
      title: "Specialized Care Services",
      description:
        "Comprehensive care for complex medical conditions and specialized medical equipment management.",
      icon: Heart,
      color: "purple",
      features: [
        "Ostomy Care and Instruction",
        "Gastrostomy Care and Instruction",
        "Catheter Care and Maintenance",
        "Tracheostomy care and management",
        "Complex medical equipment training",
      ],
    },
  ];

  const comingSoonServices = [
    { name: "Physical Therapy", icon: Activity },
    { name: "Occupational Therapy", icon: Users },
    { name: "Speech Therapy", icon: BookOpen },
    { name: "Home Health Aides", icon: Heart },
  ];

  const serviceAreas = [
    "Travis County",
    "Bastrop County",
    "Caldwell County",
    "Williamson County",
    "Hays County",
    "Burnet County",
    "Blanco County",
  ];

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Subscription successful!");
        setEmail("");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Advanced Certified Healthcare Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional Healthcare
              <span className="text-blue-600"> Services</span>
              <br />
              at Your Home
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our dedicated team meets the growing demand for skilled, reliable
              home healthcare with advanced certifications in wound care,
              infusion therapy, ostomy management, and selective sharp
              debridement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center">
                <Link href="/contact">Schedule Care Today</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                (800) 553-2892
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver thoughtful, personalized services that meet patients
              where they are, both physically and emotionally. Your health,
              safety, and comfort are our highest priorities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {primaryServices.map((service) => {
              const IconComponent = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-visible relative"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div
                        className={`bg-${service.color}-100 p-4 rounded-xl flex-shrink-0`}
                      >
                        <IconComponent
                          className={`h-8 w-8 text-${service.color}-600`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleService(service.id)}
                      className={`w-full flex items-center justify-between p-4 bg-${service.color}-50 rounded-lg font-medium text-${service.color}-700 hover:bg-${service.color}-100 transition-colors duration-200`}
                    >
                      <span>View Detailed Services</span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="absolute left-0 mt-2 w-full bg-white rounded-xl shadow-lg border-b border-gray-100 p-6 space-y-3 z-50">
                        {service.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle
                              className={`h-5 w-5 text-${service.color}-600 flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}

                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <button
                            className={`text-${service.color}-600 font-medium hover:text-${service.color}-700 flex items-center`}
                          >
                            Learn More About This Service
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Certifications Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Clinical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our nurses hold advanced certifications and specialized training
              to provide the highest level of clinical care in your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Wound Care Certified
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced certification in complex wound management and healing
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Infusion Therapy
              </h3>
              <p className="text-gray-600 text-sm">
                Specialized training in IV therapy and infusion management
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ostomy Management
              </h3>
              <p className="text-gray-600 text-sm">
                Expert care and education for ostomy patients and families
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sharp Debridement
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced selective sharp debridement certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expanding Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are actively working to expand our services and plan to offer
              these additional therapies in the near future. Stay connected for
              updates!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comingSoonServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300"
                >
                  <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">Coming Soon</p>
                  <div className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    <Clock className="h-3 w-3 mr-1" />
                    Coming Soon
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to be notified when these services become available?
            </p>
            <div className="flex justify-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
              >
                {loading ? "Sending..." : "Get Notified"}
              </button>
            </div>
            {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Service Areas
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Proudly serving Austin, TX and surrounding counties. Our local
                focus allows us to provide personalized, community-based care.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-blue-100 rounded-xl">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Not Sure If We Serve Your Area?
                    </h3>
                    <p className="text-blue-800 mb-4">
                      If you're unsure whether you're in our service area, give
                      us a call we're happy to help!
                    </p>
                    {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Check Service Area
                    </button> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Picture1.jpg"
                alt="Austin Texas service area map"
                width={300}
                height={200}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">7 Counties Served</h3>
                <p className="text-lg opacity-90">
                  Comprehensive coverage across Central Texas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept most commercial insurance plans and offer private pay
              options. We'll verify your benefits before services begin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  We Accept
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Most commercial insurance plans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Private pay options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Flexible payment arrangements</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <div className="flex items-center space-x-3 mb-6">
                <AlertCircle className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Please Note
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  {/* <AlertCircle className="h-5 w-5 text-red-600" /> */}
                  <span>We do not accept Medicare at this time</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  Contact us to discuss private pay rates and options if you
                  don't have qualifying insurance coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take two minutes to complete our form or call us directly. We can
            usually verify eligibility on the same business day.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">(800) 553-2892</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">referrals@allnurseshomehealth.com</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="opacity-90">On-call nurse availability</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              <Link href="/contact">Schedule a Consultation</Link>
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Request Information
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
