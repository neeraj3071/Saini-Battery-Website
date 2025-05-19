
import { useState } from "react";
import { Image, Images } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAButtons from "@/components/CTAButtons";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const categories = ["All", "Shop", "Products", "Services", "Installations"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Actual gallery images from the user's shop
  const galleryImages = [
    {
      src: "/lovable-uploads/4e013f85-4590-44e8-9f76-c7d3db0e863b.png",
      alt: "Exide Car Batteries on Display",
      category: "Products",
    },
    {
      src: "/lovable-uploads/240e5087-3760-4028-997e-5ff28d65e852.png",
      alt: "Exide Xpress Truck Battery",
      category: "Products",
    },
    {
      src: "/lovable-uploads/8b37b4e7-47f4-4d36-a87a-dee6b40e4733.png",
      alt: "Exide EEZY Car/SUV Battery",
      category: "Products",
    },
    {
      src: "/lovable-uploads/acd6c55d-80a2-4013-a157-e99defd92b3c.png",
      alt: "Exide Xplore Motorcycle Battery",
      category: "Products",
    },
    {
      src: "/lovable-uploads/de4bbf7a-c74e-4d10-955b-a6eb3865e312.png",
      alt: "Battery Repair and Auto Electrical Workbench",
      category: "Services",
    },
    {
      src: "/lovable-uploads/3db28a3e-e072-4efc-bd03-373492539adc.png",
      alt: "Inside View of Saini Battery Workshop",
      category: "Shop",
    },
    {
      src: "/lovable-uploads/29d9cdbf-4518-428a-aae2-197eda527d18.png",
      alt: "Saini Battery Shop Front Signage",
      category: "Shop",
    },
    {
      src: "/lovable-uploads/85ac35a8-6498-461d-a03b-ff5267a610b8.png",
      alt: "Auto Parts and Batteries Stock",
      category: "Shop",
    },
    {
      src: "/lovable-uploads/a4559168-1486-43a3-8ae1-167e978fe816.png",
      alt: "Exide Authorized Dealer Certificate",
      category: "Shop",
    }
  ];
  
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Gallery</h1>
            <p className="text-lg text-gray-600">
              Take a look at our shop, products, and services
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Filter */}
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === category
                    ? "bg-brand-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-ratio-4/3 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-3">
                  <p className="text-gray-800 font-medium">{image.alt}</p>
                  <p className="text-gray-500 text-sm">{image.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Images className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16 mt-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Service?</h2>
            <p className="text-lg mb-8">
              Contact us today for battery replacement, auto electrical repairs, and exceptional customer service.
            </p>
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
