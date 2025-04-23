
import { Ticket, Bath, TrainFront, Utensils } from "lucide-react";
import FacilityCard from "../components/FacilityCard";

const Facilities = () => {
  const facilities = [
    {
      icon: Ticket,
      title: "Ticket Counter",
      description: "Quick and easy ticket booking services",
    },
    {
      icon: Bath,
      title: "Restrooms",
      description: "Clean and well-maintained facilities",
    },
    {
      icon: TrainFront,
      title: "Platforms",
      description: "Easy access to all train platforms",
    },
    {
      icon: Utensils,
      title: "Food Court",
      description: "Various food and beverage options",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.title}
              icon={facility.icon}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
