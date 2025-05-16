
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all group">
      <div className="text-brand-red mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-brand-red transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
