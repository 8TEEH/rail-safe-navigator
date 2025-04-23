
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-blue-600 text-xl font-bold">
              Smart Railway Navigator
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/facilities" className="px-3 py-2 text-slate-600 hover:text-blue-600">
              Facilities
            </Link>
            <Link to="/chatbot" className="px-3 py-2 text-slate-600 hover:text-blue-600">
              Health Assistant
            </Link>
            <Link to="/about" className="px-3 py-2 text-slate-600 hover:text-blue-600">
              About
            </Link>
            <button className="p-2 text-slate-600 hover:text-blue-600 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
