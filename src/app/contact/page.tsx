"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  Stethoscope,
  Heart,
  Calendar,
  MessageSquare,
  Loader2,
  User,
} from "lucide-react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    patientName: "",
    relationship: "",
    message: "",
    urgency: "routine",
    preferredContact: "phone",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [errors, setErrors] = useState<any>({});

  const serviceTypes = [
    "Skilled Nursing Services",
    "Wound Care Management",
    "IV Therapy & Infusion",
    "Medication Management",
    "Diabetic Education",
    "Pain Management",
    "Home Safety Evaluation",
    "General Inquiry",
  ];

  const relationships = [
    "Self",
    "Spouse/Partner",
    "Parent",
    "Child",
    "Sibling",
    "Healthcare Provider",
    "Other Family Member",
    "Friend",
    "Other",
  ];

  const urgencyLevels = [
    { value: "urgent", label: "Urgent (Same Day)", color: "red" },
    { value: "priority", label: "Priority (24-48 Hours)", color: "orange" },
    { value: "routine", label: "Routine (2-3 Business Days)", color: "green" },
  ];

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.serviceType)
      newErrors.serviceType = "Please select a service type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "Please agree to terms";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9]?[\d\s\-\(\)]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success: Reset form
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: "",
          patientName: "",
          relationship: "",
          message: "",
          urgency: "routine",
          preferredContact: "phone",
          agreeToTerms: false,
        });
      } else {
        // Error: Show error message
        const result = await response.json();
        console.error("Error from API:", result.message);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Phone className="h-4 w-4 mr-2" />
              24/7 Support Available
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Contact
              <br />
              <span className="text-blue-600">All Nurses</span> Home Health
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to get started? We're here to help. Contact us today to
              learn more about our services or to schedule a consultation. We
              typically respond within hours.
            </p>

            {/* Quick Contact Options */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-blue-600 font-medium">(800) 553-2892</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>

              {/* <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Mail className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-teal-600 font-medium text-sm">
                  referrals@allnurseshomehealth.com
                </p>
                <p className="text-sm text-gray-600">Response within hours</p>
              </div> */}

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Fax</h3>
                <p className="text-green-600 font-medium">(844) 788-6070</p>
                <p className="text-sm text-gray-600">24/7 secure fax line</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-xl">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you promptly
                    </p>
                  </div>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-medium">
                        Message sent successfully!
                      </p>
                      <p className="text-green-700 text-sm">
                        We'll contact you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-red-800 font-medium">
                        Error sending message
                      </p>
                      <p className="text-red-700 text-sm">
                        Please try again or call us directly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <User className="h-5 w-5 mr-2 text-blue-600" />
                      Your Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === "phone"}
                            onChange={handleInputChange}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">Phone</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === "email"}
                            onChange={handleInputChange}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">Email</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Service Information */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Stethoscope className="h-5 w-5 mr-2 text-teal-600" />
                      Service Request
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.serviceType
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a service...</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.serviceType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency Level
                      </label>
                      <div className="space-y-2">
                        {urgencyLevels.map((level) => (
                          <label
                            key={level.value}
                            className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="urgency"
                              value={level.value}
                              checked={formData.urgency === level.value}
                              onChange={handleInputChange}
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span
                              className={`ml-3 font-medium text-${level.color}-600`}
                            >
                              {level.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Patient Information */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-green-600" />
                      Patient Information (Optional)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Patient Name
                        </label>
                        <input
                          type="text"
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Patient's full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Relationship to Patient
                        </label>
                        <select
                          name="relationship"
                          value={formData.relationship}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select relationship...</option>
                          {relationships.map((rel) => (
                            <option key={rel} value={rel}>
                              {rel}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Please describe your healthcare needs, any specific conditions, or questions you have about our services..."
                      />
                      {errors.message && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="pt-6 border-t border-gray-200">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className={`mt-1 text-blue-600 focus:ring-blue-500 ${
                          errors.agreeToTerms ? "border-red-500" : ""
                        }`}
                      />
                      <span className="text-sm text-gray-700">
                        I agree to be contacted by All Nurses Home Health
                        regarding my inquiry and understand that my information
                        will be handled according to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          HIPAA Notice
                        </a>
                        . *
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.agreeToTerms}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5 mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information & Additional Details */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-blue-100 mb-8">
                  Ready to experience nurse-led home healthcare? We're here to
                  answer your questions and help you get started with the care
                  you deserve.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-blue-100 mb-1">(800) 553-2892</p>
                      <p className="text-sm text-blue-200">
                        Available 24/7 for urgent concerns
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-blue-100 mb-1">
                        referrals@allnurseshomehealth.com
                      </p>
                      <p className="text-sm text-blue-200">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Fax</h3>
                      <p className="text-blue-100 mb-1">(844) 788-6070</p>
                      <p className="text-sm text-blue-200">
                        Secure 24/7 fax line
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Service Area
                      </h3>
                      <p className="text-blue-100 mb-1">
                        Austin, TX & Surrounding Counties
                      </p>
                      <p className="text-sm text-blue-200">
                        Travis, Bastrop, Caldwell, Williamson, Hays, Burnet,
                        Blanco
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Office Hours
                      </h3>
                      <p className="text-blue-100 mb-1">
                        Monday - Friday: 9am - 5pm
                      </p>
                      <p className="text-sm text-blue-200">
                        24/7 on-call nurse support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                  What to Expect
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Initial Contact
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We'll respond to your inquiry within hours, typically
                        the same business day.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-teal-600 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Eligibility Verification
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We'll verify your insurance benefits and help coordinate
                        with your physician.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Care Planning
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We'll schedule your first visit and create a
                        personalized care plan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-purple-600 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Expert Care Delivery
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Our certified nurses begin providing exceptional care in
                        your home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">
                      Medical Emergency Notice
                    </h3>
                    <p className="text-red-800 text-sm mb-3">
                      We are not an emergency medical provider. If you are
                      experiencing a life-threatening emergency, call 911 or go
                      to the nearest emergency room immediately.
                    </p>
                    <p className="text-red-700 text-sm">
                      Our on-call staff is here to support issues related to
                      your current care plan, such as wound condition changes,
                      IV therapy concerns, or unexpected symptoms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about getting started with our home healthcare
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need a referral from my doctor?
              </h3>
              <p className="text-gray-600">
                Yes, home health requires a referral from your physician.
                However, we can help coordinate this for you. Contact our
                office, and we'll guide you through the process from start to
                finish.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can services start?
              </h3>
              <p className="text-gray-600">
                Once we receive your referral, we can usually verify eligibility
                on the same business day. Some insurance plans require
                authorization, which may take 24-48 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What insurance do you accept?
              </h3>
              <p className="text-gray-600">
                We accept most commercial insurance plans and private pay. We do
                not accept Medicare or Medicaid at this time. We'll verify your
                benefits before service begins.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are you available 24/7?
              </h3>
              <p className="text-gray-600">
                Our office hours are Monday-Friday 9am-5pm, but we provide 24/7
                on-call nurse availability to support our active patients with
                urgent clinical concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step toward professional, compassionate home
            healthcare. Our team is standing by to help you get the care you
            deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8005532892"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (800) 553-2892
            </a>
            <a
              href="mailto:referrals@allnurseshomehealth.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-100 text-sm">
              Response time: Within hours • Available 24/7 for urgent concerns
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
