import React from "react";
import {
  Shield,
  Users,
  Heart,
  Phone,
  Mail,
  FileText,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Globe,
  Accessibility,
  Volume2,
  Eye,
  Languages,
  Scale,
  Building,
  Clock,
  MapPin,
} from "lucide-react";

const NondiscriminationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Scale className="h-4 w-4 mr-2" />
              Federal Civil Rights Compliance
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Nondiscrimination
              <span className="text-blue-600"> Notice</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              All Nurses Home Health is committed to providing equal access to
              healthcare services for all patients, regardless of race, color,
              national origin, age, disability, or sex.
            </p>
          </div>
        </div>
      </section>

      {/* Main Notice Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Our Commitment */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <Shield className="h-8 w-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Our Commitment to Equal Access
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  All Nurses Home Health complies with applicable Federal civil
                  rights laws and does not discriminate on the basis of race,
                  color, national origin, age, disability, or sex.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Discrimination Principles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="h-8 w-8 mr-3 text-blue-600" />
              Our Principles
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Equal Treatment
                    </h3>
                    <p className="text-gray-700">
                      We do not exclude people or treat them differently because
                      of race, color, national origin, age, disability, or sex.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Inclusive Care
                    </h3>
                    <p className="text-gray-700">
                      All patients receive the same high-quality, compassionate
                      healthcare services regardless of their background or
                      circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Accessibility className="h-8 w-8 mr-3 text-teal-600" />
              Accessibility Services
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                We provide free aids and services to people with disabilities to
                communicate effectively with us:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    Communication Assistance
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Qualified sign language interpreters
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Written information in other formats
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-teal-600" />
                    Alternative Formats
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Eye className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Large print materials
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Volume2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Audio formats</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Accessible electronic formats
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FileText className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Other accessible formats
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Language Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Languages className="h-8 w-8 mr-3 text-green-600" />
              Language Services
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                We provide free language services to people whose primary
                language is not English:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Languages className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Qualified Interpreters
                      </h3>
                      <p className="text-gray-700">
                        Professional interpreters available for medical
                        consultations and care discussions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Translated Materials
                      </h3>
                      <p className="text-gray-700">
                        Important healthcare information and documents available
                        in other languages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Request Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Phone className="h-8 w-8 mr-3 text-purple-600" />
              Request These Services
            </h2>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                If you need these services, contact All Nurses Home Health:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Phone
                      </h3>
                      <p className="text-blue-600 font-medium">
                        (800) 553-2892
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Available 24/7 for accessibility requests
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <FileText className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Fax
                      </h3>
                      <p className="text-teal-600 font-medium">
                        (844) 788-6070
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Secure fax line for written requests
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Filing a Grievance */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <AlertCircle className="h-8 w-8 mr-3 text-orange-600" />
              Filing a Grievance
            </h2>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                If you believe that All Nurses Home Health has failed to provide
                these services or discriminated in another way on the basis of
                race, color, national origin, age, disability, or sex, you can
                file a grievance with our Corporate Compliance Officer.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  We're Here to Help
                </h3>
                <p className="text-gray-700 mb-4">
                  If you need help filing a grievance, we are available to help
                  you. Please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      Phone: <strong>(800) 553-2892</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">
                      Fax: <strong>(844) 788-6070</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Federal Complaint Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Building className="h-8 w-8 mr-3 text-red-600" />
              Federal Civil Rights Complaint
            </h2>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                You can also file a civil rights complaint with the U.S.
                Department of Health and Human Services, Office for Civil
                Rights:
              </p>

              <div className="space-y-6">
                {/* Online Filing */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Globe className="h-6 w-6 mr-2 text-blue-600" />
                    Online Filing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    File electronically through the Office for Civil Rights
                    Complaint Portal:
                  </p>
                  <a
                    href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    https://ocrportal.hhs.gov/ocr/portal/lobby.jsf
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>

                {/* Mail/Phone Contact */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Mail className="h-6 w-6 mr-2 text-teal-600" />
                    Mail or Phone
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">
                          U.S. Department of Health and Human Services
                        </p>
                        <p>200 Independence Avenue, SW</p>
                        <p>Room 509F, HHH Building</p>
                        <p>Washington, D.C. 20201</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>
                        Phone: <strong>1-800-368-1019</strong>
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-purple-600" />
                      <span>
                        TDD: <strong>800-537-7697</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Complaint Forms */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-green-600" />
                    Complaint Forms
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Complaint forms are available at:
                  </p>
                  <a
                    href="http://www.hhs.gov/ocr/office/file/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    http://www.hhs.gov/ocr/office/file/index.html
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Summary */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Questions About Our Nondiscrimination Policy?
            </h2>
            <p className="text-blue-100 text-lg text-center mb-8">
              We're committed to ensuring equal access to healthcare for all.
              Contact us if you have questions or need assistance with
              accessibility services.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-blue-100">(800) 553-2892</p>
                <p className="text-sm text-blue-200">Available 24/7</p>
              </div>

              <div>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fax</h3>
                <p className="text-blue-100">(844) 788-6070</p>
                <p className="text-sm text-blue-200">Secure line</p>
              </div>

              <div>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-blue-100">
                  referrals@allnurseshomehealth.com
                </p>
                <p className="text-sm text-blue-200">Quick response</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NondiscriminationPage;
