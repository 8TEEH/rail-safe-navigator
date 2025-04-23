
import { LucideIcon } from "lucide-react";

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FacilityCard = ({ icon: Icon, title, description }: FacilityCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <Icon className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
