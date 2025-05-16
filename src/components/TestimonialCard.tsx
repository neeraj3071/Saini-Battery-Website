
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  content: string;
  rating: number;
  source: string;
}

const TestimonialCard = ({ name, content, rating, source }: TestimonialCardProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex mb-4">{renderStars()}</div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex justify-between items-center">
        <p className="font-medium text-gray-800">{name}</p>
        <span className="text-sm text-gray-500">via {source}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
