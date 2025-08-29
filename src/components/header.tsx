// components/Header.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Clock, MapPin, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>(800) 553-2892</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>24/7 On-Call Support</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="italic text-yellow-200">
                This platform is currently in its beta phase — thank you for
                your patience as we continue to improve your experience.
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Serving Austin, TX & Surrounding Counties</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl">
                <Image
                  src="/favicon.png"
                  alt="Logo"
                  width={65}
                  height={65}
                  className="w-full h-full rounded-md"
                />
                {/* <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-xl">
                <Stethoscope className="h-8 w-8 text-white" />
              </div> */}
                {/* <Stethoscope className="h-8 w-8 text-white" /> */}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  All Nurses Home Health
                </h1>
                <p className="text-sm text-blue-600 font-medium">
                  "Led by Nurses. Trusted by Families"
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About Us
              </a>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <a
                      href="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Compression Therapy
                    </a>
                    <a
                      href="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Coordination of Care
                    </a>
                    <a
                      href="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Home Safety Evaluation
                    </a>
                    <a
                      href="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Pain Management
                    </a>
                    <a
                      href="/services"
                      className="border-t border-gray-100 flex items-center justify-center px-4 py-2 text-blue-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      View All
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </a>
              {/* <a
                href="#referrals"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Referrals
              </a> */}
              <a
                href="/careers"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Career
              </a>

              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-md">
                Schedule Care
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 py-4">
              <div className="space-y-4">
                <a
                  href="#home"
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  About Us
                </a>
                <div className="space-y-2">
                  <div className="font-medium text-gray-900">Services</div>
                  <div className="pl-4 space-y-2">
                    <a
                      href="#skilled-nursing"
                      className="block text-gray-600 hover:text-blue-600"
                    >
                      Skilled Nursing Services
                    </a>
                    <a
                      href="#wound-care"
                      className="block text-gray-600 hover:text-blue-600"
                    >
                      Complex Wound Management
                    </a>
                    <a
                      href="#medication"
                      className="block text-gray-600 hover:text-blue-600"
                    >
                      Medication Management
                    </a>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contact
                </a>
                <a
                  href="#referrals"
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Referrals
                </a>
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Schedule Care
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
