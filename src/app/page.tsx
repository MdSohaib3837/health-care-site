import React from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Shield,
  Users,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Stethoscope,
  Home,
  FileText,
  PhoneCall,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Award,
  UserCheck,
  Clipboard,
  Activity,
  Target,
  Zap,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const HealthcareHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4 mr-2" />
                  Nurse-Owned & Operated
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional Healthcare
                  <span className="text-blue-600"> at Home</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Together, we are on a mission to improve the lives and
                  outcomes of every individual we serve one home at a time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center">
                  Schedule Care Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">On-Call Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">7</div>
                  <div className="text-sm text-gray-600">Counties Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Nurse Led</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <Image
                  src="/images/Picture19.jpg"
                  alt="Professional nurse providing home healthcare"
                  width={900}
                  height={350}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-8 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-48">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Compassionate
                    </div>
                    <div className="text-sm text-gray-600">Expert Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}

      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Trusted Partner
            </h2>
            <p className="text-gray-600">
              Now accepting new referrals from healthcare providers across
              Austin
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            Insurance logos placeholders
            <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">Aetna</span>
            </div>
            <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">Blue Cross</span>
            </div>
            <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">UnitedHealth</span>
            </div>
            <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">Humana</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              *We accept most commercial insurance plans and private pay. We do
              not accept Medicare or Medicaid at this time.
            </p>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Home Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From skilled nursing to specialized wound care, our nurse led team
              provides the expert care you need in the comfort of your own home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <Image
                  src="/images/Picture12.jpg"
                  alt="Skilled nursing services"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Skilled Nursing Services
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive nursing care including assessments, care plan
                  management, and coordination with your healthcare team.
                </p>
                <a
                  href="/services"
                  className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
                <Image
                  src="/images/Picture18.jpg"
                  alt="Wound care management"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Target className="h-6 w-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Complex Wound Management
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Expert wound assessment, treatment, and healing support with
                  advanced certifications in wound care and debridement.
                </p>
                <a
                  href="/services"
                  className="text-teal-600 font-medium hover:text-teal-700 flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                <Image
                  src="/images/Picture11.jpg"
                  alt="Medication management"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Clipboard className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Medication Management
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Safe medication administration, education, and management to
                  ensure optimal therapeutic outcomes.
                </p>
                <a
                  href="/services"
                  className="text-green-600 font-medium hover:text-green-700 flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                <Image
                  src="/images/Picture20.jpg"
                  alt="Chronic disease management"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Activity className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Chronic Disease Management
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Specialized care for diabetes, hypertension, COPD, and other
                  chronic conditions with ongoing education and support.
                </p>
                <a
                  href="/services"
                  className="text-purple-600 font-medium hover:text-purple-700 flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                <Image
                  src="/images/Picture15.jpg"
                  alt="Home safety evaluation"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Home Safety Evaluation
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive safety assessments, fall prevention strategies,
                  and emergency preparedness planning.
                </p>
                <a
                  href="/services"
                  className="text-orange-600 font-medium hover:text-orange-700 flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center">
                <Image
                  src="/images/Picture13.jpg"
                  alt="Pain management"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Zap className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Pain Management
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive pain assessment and management strategies
                  tailored to your individual needs and comfort.
                </p>
                <a
                  href="/services"
                  className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose All Nurses Home Health?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                As the Austin area grows, so does the demand for skilled,
                reliable home healthcare. Our dedicated team meets that need
                with advanced certifications and compassionate care.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Nurse Owned & Operated
                    </h3>
                    <p className="text-gray-600">
                      Founded and led by experienced registered nurses with a
                      passion for excellence and deep understanding of clinical
                      care.
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
                      Our team holds advanced certifications in wound care,
                      infusion therapy, ostomy management, and selective sharp
                      debridement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      24/7 On Call Support
                    </h3>
                    <p className="text-gray-600">
                      Round the clock nurse availability to support our active
                      patients with urgent clinical concerns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalized Care
                    </h3>
                    <p className="text-gray-600">
                      We meet patients where they are, both physically and
                      emotionally, providing thoughtful, individualized
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Picture6.jpg"
                alt="Professional healthcare team"
                width={500}
                height={600}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Partners in Healing</h3>
                <p className="text-lg opacity-90">
                  We're not just providers. We're partners in your journey to
                  better health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the families who trust All Nurses Home Health for professional,
            compassionate care in the comfort of home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Schedule a Consultation
            </button> */}
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Call (800) 553-2892
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareHomepage;
