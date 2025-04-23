
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Smart Railway Navigator</h1>
              <p className="text-xl mb-8">Navigate your journey with ease</p>
              <Link
                to="/facilities"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Facilities
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-slate-600">
              <p className="mb-2">
                Created by Pranav Gawai, Vinit Kale, Pranav Dhawale, and Sejal Kakani
              </p>
              <p>&copy; 2024 Smart Railway Navigator. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
