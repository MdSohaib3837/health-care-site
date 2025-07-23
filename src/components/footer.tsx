import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-bold">All Nurses Home Health</h3>
              <p className="text-blue-300 italic text-sm">
                &quot;Led by Nurses. Trusted by Families&quot;
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nurse-owned and operated home healthcare company bringing clinical
              precision and compassion into every home we serve.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <svg
                className="h-4 w-4 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-300">Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <nav className="space-y-1">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold">Our Services</h4>
            <nav className="space-y-1">
              {[
                { name: "Skilled Nursing", href: "/services/skilled-nursing" },
                { name: "Wound Care", href: "/services/wound-care" },
                { name: "Post-Surgical Care", href: "/services/post-surgical" },
                {
                  name: "Medication Management",
                  href: "/services/medication-management",
                },
              ].map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg
                  className="h-4 w-4 text-blue-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:8005532892"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  (800) 553-2892
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <svg
                  className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:referrals@allnurseshomehealth.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm break-all"
                >
                  referrals@allnurseshomehealth.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <svg
                  className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-gray-300 text-sm">
                  Austin, TX & Surrounding Counties
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-3">
              <p className="text-sm text-green-400 font-semibold mb-1">
                Now Accepting New Referrals!
              </p>
              <p className="text-xs text-gray-400">
                Most insurance plans accepted
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} All Nurses Home Health PLLC. All
              rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/nondiscrimination"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Nondiscrimination
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
