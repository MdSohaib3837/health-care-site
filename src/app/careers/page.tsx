"use client";
import React, { useState } from "react";
import {
  Users,
  Heart,
  Shield,
  Award,
  Stethoscope,
  MapPin,
  Clock,
  TrendingUp,
  CheckCircle,
  Mail,
  FileText,
  Send,
  Star,
  Target,
  Briefcase,
  GraduationCap,
  Car,
  Building,
  DollarSign,
  UserCheck,
  Calendar,
  AlertCircle,
  ArrowRight,
  Globe,
  Phone,
} from "lucide-react";
import Image from "next/image";

const CareersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const positions = [
    {
      id: "rn",
      title: "Registered Nurses (RNs)",
      icon: Stethoscope,
      color: "blue",
      requirements: [
        "Preferably with 5+ years experience",
        "Background in home health and/or wound care",
        "Comfortable working independently in the field",
        "Reliable personal vehicle, valid driver's license, and current auto insurance",
        "Must be able to travel to patient homes",
      ],
      description:
        "Join our team of skilled nurses providing exceptional home healthcare services.",
    },
    {
      id: "coordinator",
      title: "Care Coordinators and Case Managers",
      icon: Users,
      color: "teal",
      requirements: [
        "Must be a licensed registered nurse",
        "Experience in coordinating patient care in a home health setting",
        "Wound care experience preferred",
        "Strong organizational and communication skills",
      ],
      description:
        "Lead patient care coordination and ensure seamless healthcare delivery.",
    },
    {
      id: "coder",
      title: "Medical Coders",
      icon: FileText,
      color: "green",
      requirements: [
        "Prior experience in home health coding",
        "OASIS review experience",
        "Regulatory compliance knowledge",
        "Familiarity with current PDGM guidelines",
        "Best practices in clinical documentation required",
      ],
      description:
        "Ensure accurate coding and compliance in our healthcare documentation.",
    },
    {
      id: "auditor",
      title: "Clinical Auditors",
      icon: Shield,
      color: "purple",
      requirements: [
        "Prior experience in home health documentation auditing",
        "Well-versed in regulatory compliance",
        "Quality assurance standards knowledge",
        "Attention to detail and analytical skills",
      ],
      description:
        "Maintain our high standards through thorough quality assurance reviews.",
    },
    {
      id: "administrator",
      title: "Home Health Administrators",
      icon: Building,
      color: "orange",
      requirements: [
        "Must be a licensed registered nurse",
        "Experience in clinical operations",
        "Compliance and leadership experience",
        "Strong management and organizational skills",
      ],
      description:
        "Lead our operations and ensure excellence in patient care delivery.",
    },
    {
      id: "cfo",
      title: "Chief Financial Officer (CFO)",
      icon: DollarSign,
      color: "red",
      requirements: [
        "Experience in home health finance",
        "Well-versed in budgeting and forecasting",
        "Revenue cycle management expertise",
        "Strategic financial planning experience",
      ],
      description:
        "Drive our financial strategy and ensure sustainable growth.",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Compassionate Culture",
      description:
        "Work in an environment built on integrity, compassion, and clinical excellence.",
    },
    {
      icon: Award,
      title: "Professional Growth",
      description:
        "Advance your career with continuing education and leadership opportunities.",
    },
    {
      icon: Users,
      title: "Nurse-Led Leadership",
      description:
        "Be part of a team led by experienced nurses who understand your challenges.",
    },
    {
      icon: Shield,
      title: "Quality Focus",
      description:
        "Deliver highly personalized care with a strong focus on safety and healing.",
    },
    {
      icon: TrendingUp,
      title: "Growing Company",
      description:
        "Join a expanding organization serving the growing Austin area.",
    },
    {
      icon: Star,
      title: "Excellence Recognition",
      description:
        "Be recognized for your contributions to exceptional patient outcomes.",
    },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "Every patient deserves care delivered with kindness and understanding.",
      color: "red",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our interactions.",
      color: "blue",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Clinical precision backed by advanced certifications and expertise.",
      color: "green",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working together as partners in our patients' healing journey.",
      color: "purple",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4 mr-2" />
              Join Our Mission-Driven Team
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Careers at
              <span className="text-blue-600"> All Nurses</span>
              <br />
              Home Health
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              As a nurse-owned and operated home health company, we understand
              what it takes to provide excellent care—and how important it is to
              support the people who deliver it.
            </p>

            {/* Current Status */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    Current Hiring Status
                  </h3>
                  <p className="text-yellow-800 mb-4">
                    We are currently <strong>not actively hiring</strong>, but
                    we welcome resumes from qualified professionals who share
                    our mission to improve lives through reliable,
                    compassionate, high-quality care.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:referrals@allnurseshomehealth.com?subject=Resume Submission&body=Please attach your resume."
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Submit Your Resume
                    </a>
                    <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                      Join Our Talent Network
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are always looking to connect with compassionate, skilled
              professionals who share our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 bg-${value.color}-50 rounded-xl border border-${value.color}-100`}
                >
                  <div
                    className={`bg-${value.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent
                      className={`h-8 w-8 text-${value.color}-600`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-xl text-blue-100 mb-6">
                To improve the lives and outcomes of every individual we serve
                one home at a time.
              </p>
              <p className="text-lg text-blue-200">
                "Led by Nurses. Trusted by Families"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Position Types */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Positions We're Building For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While we're not actively hiring, we're always interested in
              connecting with exceptional professionals in these key areas.
              Submit your resume to be considered for future opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {positions.map((position) => {
              const IconComponent = position.icon;
              const isExpanded = selectedPosition === position.id;

              return (
                <div
                  key={position.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-visible relative"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div
                        className={`bg-${position.color}-100 p-3 rounded-xl flex-shrink-0`}
                      >
                        <IconComponent
                          className={`h-6 w-6 text-${position.color}-600`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <p className="text-gray-600">{position.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setSelectedPosition(isExpanded ? null : position.id)
                      }
                      className={`w-full flex items-center justify-between p-3 bg-${position.color}-50 rounded-lg font-medium text-${position.color}-700 hover:bg-${position.color}-100 transition-colors duration-200`}
                    >
                      <span>View Requirements</span>
                      <ArrowRight
                        className={`h-4 w-4 transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="absolute left-0 mt-2 w-full bg-white rounded-xl shadow-lg border-b border-gray-100 p-6 space-y-3 z-50">
                        <h4 className="font-semibold text-gray-900">
                          Requirements:
                        </h4>
                        {position.requirements.map((req, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle
                              className={`h-4 w-4 text-${position.color}-600 flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-gray-700 text-sm">{req}</span>
                          </div>
                        ))}

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a
                            href="mailto:referrals@allnurseshomehealth.com"
                            className={`text-${position.color}-600 font-medium hover:text-${position.color}-700 flex items-center text-sm`}
                          >
                            Submit Resume for This Position
                            <Send className="ml-2 h-4 w-4" />
                          </a>
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

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work With All Nurses Home Health?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working for a company that truly
              understands healthcare professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Culture & Environment
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We are nurse-owned, locally based, and patient-driven. Our
                culture is built on integrity, compassion, and clinical
                excellence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Nurse-Led Leadership
                    </h3>
                    <p className="text-gray-600">
                      Our leadership team consists of experienced registered
                      nurses who understand the challenges and rewards of
                      healthcare delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Advanced Certifications
                    </h3>
                    <p className="text-gray-600">
                      Our nurses are wound care certified and hold advanced
                      certifications in specialized areas of home healthcare.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Local Focus
                    </h3>
                    <p className="text-gray-600">
                      Proudly serving Austin, TX and surrounding counties with a
                      deep understanding of our local community's needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Patient-Centered Care
                    </h3>
                    <p className="text-gray-600">
                      We deliver highly personalized care with a strong focus on
                      safety, comfort, and healing outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Picture7.jpg"
                alt="Healthcare team collaboration"
                width={500}
                height={600}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Join Our Growing Team
                </h3>
                <p className="text-lg opacity-90">
                  Be part of the future of home healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Where We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team serves patients across Austin, TX and surrounding
              counties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Travis County",
              "Bastrop County",
              "Caldwell County",
              "Williamson County",
              "Hays County",
              "Burnet County",
              "Blanco County",
            ].map((county, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center"
              >
                <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="font-medium text-gray-900">{county}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Resume Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Submit your resume today to be considered for future opportunities.
            We'll keep your information on file and reach out when positions
            become available.
          </p>

          <div className="bg-white/10 rounded-2xl p-8 max-w-3xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">What to Include:</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Current resume with experience details</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Relevant certifications and licenses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Cover letter expressing interest</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Position of interest (if specific)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Next Steps:</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Resume review by our team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Added to our talent network</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Contact when positions open</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Priority consideration for roles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:referrals@allnurseshomehealth.com?subject=Career Interest - Resume Submission"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Your Resume
            </a>
            <a
              href="tel:8005532892"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (800) 553-2892
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-100 text-sm">
              Send resumes to:{" "}
              <span className="font-semibold">
                referrals@allnurseshomehealth.com
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
