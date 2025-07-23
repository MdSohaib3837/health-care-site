export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Welcome to{" "}
          <span className="text-blue-600">All Nurses Home Health</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Led by Nurses. Trusted by Families. Expert home healthcare services in
          Austin, TX and surrounding counties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">Skilled Nursing</h3>
          <p className="text-gray-600 text-sm">
            Comprehensive nursing care and health assessments
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">Wound Care</h3>
          <p className="text-gray-600 text-sm">
            Expert wound management and healing support
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">Post-Surgical Care</h3>
          <p className="text-gray-600 text-sm">
            Recovery support and surgical site monitoring
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">Medication Management</h3>
          <p className="text-gray-600 text-sm">
            Safe medication administration and education
          </p>
        </div>
      </div>
    </div>
  );
}
