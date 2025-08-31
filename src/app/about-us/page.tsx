"use client";
import React from "react";
import {
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle,
  Star,
  Target,
  Clock,
  MapPin,
  UserCheck,
  BookOpen,
  Phone,
  Quote,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutUsPage = () => {
  const router = useRouter();
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
                  Nurse-Owned & Operated Since Day One
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  About
                  <span className="text-blue-600"> All Nurses</span>
                  <br />
                  Home Health
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're proud to be owned and operated by registered nurses.
                  Founded and led by experienced clinicians with a passion for
                  excellence, our mission is to bring both clinical precision
                  and compassion into every home we serve.
                </p>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    "Led by Nurses. Trusted by Families"
                  </p>
                  <p className="text-sm text-gray-600">
                    Our commitment to excellence in every home
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <Image
                  src="/images/Picture6.jpg"
                  alt="Professional nursing team at All Nurses Home Health"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg shadow-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">Nurse-Led</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-600 font-light leading-relaxed mb-12">
              Together, we are on a mission to improve the lives and outcomes of
              every individual we serve{" "}
              <span className="text-blue-600 font-medium">
                one home at a time.
              </span>
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Compassion
                </h3>
                <p className="text-gray-600">
                  Every patient deserves care delivered with kindness and
                  understanding
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Clinical precision backed by advanced certifications and
                  expertise
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partnership
                </h3>
                <p className="text-gray-600">
                  We're not just providers—we're partners in your healing
                  journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are nurse owned, locally based, and patient-driven. Our culture
              is built on integrity, compassion, and clinical excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nurse Owned Leadership
                  </h3>
                  <p className="text-gray-600">
                    As registered nurses ourselves, we understand what patients
                    need and what it takes to deliver exceptional care. Our
                    leadership comes from clinical experience, not just
                    business.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Advanced Wound Care Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our nurses are wound care certified with advanced training
                    in infusion therapy, ostomy management, and selective sharp
                    debridement skills that set us apart.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Local Austin Focus
                  </h3>
                  <p className="text-gray-600">
                    Proudly serving Austin, TX and surrounding counties: Travis,
                    Bastrop, Caldwell, Williamson, Hays, Burnet, and Blanco. We
                    know our community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    24/7 Clinical Support
                  </h3>
                  <p className="text-gray-600">
                    We provide 24/7 on call nurse availability to support our
                    active patients with urgent clinical concerns because
                    healing doesn't wait for business hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Picture8.jpg"
                alt="Nurse providing compassionate care"
                width={500}
                height={600}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Growing with Austin */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/Picture7.jpg"
                alt="Austin Texas healthcare growth"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-64">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">7</div>
                  <div className="text-sm text-gray-600">Counties Served</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Austin & Surrounding Areas
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Growing with Austin
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As the Austin area grows, so does the demand for skilled,
                reliable home healthcare. Our dedicated team meets that need
                with advanced certifications and compassionate care.
              </p>
              <p className="text-lg text-gray-600">
                Our model empowers nurses to provide care with confidence
                delivering thoughtful, personalized services that meet patients
                where they are, both physically and emotionally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Serving 7 counties across Central Texas
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Locally owned and operated
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Understanding of community needs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Committed to Austin's health and wellness
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the families who have
              experienced the All Nurses Home Health difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "I'm very happy with the care and patience that we've
                experienced with All Nurses Home Health. They are very
                knowledgeable and helpful with explaining the healing course and
                what to watch out for."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    Satisfied Patient
                  </div>
                  <div className="text-sm text-gray-600">Austin, TX</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "All Nurses Home Health took care of me after a major surgery. I
                was very impressed with their professionalism & knowledge. I
                plan to request their services again."
              </p>
              <div className="flex items-center">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    Post-Surgery Patient
                  </div>
                  <div className="text-sm text-gray-600">Austin, TX</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "This Nurse owned company is the best for Home Health Care! The
                Nurses are compassionate, caring, and super knowledgeable! I
                would highly recommend this company."
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    Family Member
                  </div>
                  <div className="text-sm text-gray-600">Austin, TX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Now Accepting New Referrals!
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-4">
                <Image
                  src="/images/Picture23.png"
                  alt="Professional nursing team at All Nurses Home Health"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <p className="text-2xl text-gray-600 font-light leading-relaxed">
                "We accept most commercial insurance plans and
                <span className="text-blue-600 font-medium"> private pay"</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Whether you're recovering from surgery, managing a chronic
              condition, or navigating a new diagnosis, we're here to provide
              the expert care and support you need.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalized Care Plans
                    </h3>
                    <p className="text-gray-600">
                      Every care plan is tailored to your specific needs,
                      conditions, and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Safety First
                    </h3>
                    <p className="text-gray-600">
                      Your health, safety, and comfort are always our highest
                      priorities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Patient Education
                    </h3>
                    <p className="text-gray-600">
                      We believe in empowering you with knowledge about your
                      condition and care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Family Support
                    </h3>
                    <p className="text-gray-600">
                      We include your family in the care process and provide
                      them with the support they need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Nurse-Led Care?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the families who trust All Nurses Home Health for professional,
            compassionate care in the comfort of home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/contact")}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              Schedule a Consultation
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

export default AboutUsPage;
