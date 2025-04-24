import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, MapPin, Info } from "lucide-react";
import VoiceSearch from "../components/VoiceSearch";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Railway Navigator</h1>
              <p className="text-xl mb-8">Your Intelligent Railway Travel Companion</p>
              
              {/* Search Box */}
              <Card className="max-w-3xl mx-auto bg-white/95 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="From Station"
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="To Station"
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="date"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <VoiceSearch />
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Search className="mr-2 h-4 w-4" /> Search Trains
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/facilities" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700" />
                  <h3 className="text-lg font-semibold mb-2">Station Facilities</h3>
                  <p className="text-gray-600">Explore available facilities and amenities</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/chatbot" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700" />
                  <h3 className="text-lg font-semibold mb-2">Health Assistant</h3>
                  <p className="text-gray-600">Get instant medical assistance</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/about" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Info className="h-12 w-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700" />
                  <h3 className="text-lg font-semibold mb-2">About Us</h3>
                  <p className="text-gray-600">Learn more about our services</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white mt-auto border-t">
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
