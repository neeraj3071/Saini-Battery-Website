
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  brand: string;
  description: string;
  features?: string[];
}

const ProductCard = ({ image, title, brand, description, features = [] }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="p-4">
        <div className="aspect-square overflow-hidden bg-gray-100 rounded-md mb-4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mb-2">
          <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-1 rounded">{brand}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {features.length > 0 && (
          <ul className="space-y-1 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="mr-2 text-brand-red">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="mt-auto p-4 pt-0">
        <Button asChild className="w-full bg-brand-red hover:bg-red-700">
          <a href="tel:+919822436042" className="flex items-center justify-center">
            <Phone className="mr-2 h-4 w-4" />
            Enquire Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
