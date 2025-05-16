
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import BrandLogos from "@/components/BrandLogos";
import CTAButtons from "@/components/CTAButtons";

const Products = () => {
  // Sample product data
  const products = [
    {
      title: "Car Battery",
      brand: "Exide",
      image: "/lovable-uploads/4e013f85-4590-44e8-9f76-c7d3db0e863b.png",
      description: "High-performance car batteries with excellent cranking power and durability.",
      features: ["Maintenance-free", "Long life", "High cranking power", "Warranty available"]
    },
    {
      title: "Truck Battery",
      brand: "Exide",
      image: "/lovable-uploads/240e5087-3760-4028-997e-5ff28d65e852.png",
      description: "Heavy-duty batteries for commercial vehicles with superior vibration resistance.",
      features: ["Heavy-duty", "Vibration resistant", "High reserve capacity", "Commercial warranty"]
    },
    {
      title: "Two-Wheeler Battery",
      brand: "Amaron",
      image: "/lovable-uploads/acd6c55d-80a2-4013-a157-e99defd92b3c.png",
      description: "Reliable motorcycle and scooter batteries with quick start technology.",
      features: ["Sealed design", "Quick start technology", "Low self-discharge", "Vibration resistant"]
    },
    {
      title: "Car/SUV Battery",
      brand: "Exide",
      image: "/lovable-uploads/8b37b4e7-47f4-4d36-a87a-dee6b40e4733.png",
      description: "Dependable power for cars and SUVs with extended warranty and reliable performance.",
      features: ["Deep-cycle design", "Long backup time", "Low maintenance", "Extended warranty"]
    },
    {
      title: "Premium Car Battery",
      brand: "Amaron",
      image: "/lovable-uploads/4e013f85-4590-44e8-9f76-c7d3db0e863b.png",
      description: "Advanced car batteries with silver technology for superior performance.",
      features: ["Silver technology", "Extreme temperature tolerance", "Extra cranking power", "Long service life"]
    },
    {
      title: "Battery Services",
      brand: "Exide",
      image: "/lovable-uploads/de4bbf7a-c74e-4d10-955b-a6eb3865e312.png",
      description: "Smart battery service with protection features for safe and efficient charging.",
      features: ["Diagnostics", "Charging", "Maintenance", "Installation"]
    },
    {
      title: "Auto Electrical Services",
      brand: "Saini Battery",
      image: "/lovable-uploads/3db28a3e-e072-4efc-bd03-373492539adc.png",
      description: "Complete auto electrical services for all your vehicle electrical needs.",
      features: ["Alternator repairs", "Starter motor service", "Wiring solutions", "Diagnostics"]
    },
    {
      title: "Battery Testing",
      brand: "Saini Battery",
      image: "/lovable-uploads/85ac35a8-6498-461d-a03b-ff5267a610b8.png",
      description: "Specialized battery testing services for all vehicle types.",
      features: ["Load testing", "Voltage testing", "Health analysis", "Free inspection"]
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Our Products</h1>
            <p className="text-lg text-gray-600">
              Quality batteries and electrical components for all types of vehicles
            </p>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Authorized Dealer" 
            subtitle="We offer genuine products with full manufacturer warranty"
            center
          />
          
          <BrandLogos />
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Product Range" 
            subtitle="Explore our wide selection of high-quality batteries and accessories"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                brand={product.brand}
                image={product.image}
                description={product.description}
                features={product.features}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Our Products */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Why Choose Our Products?" 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-brand-red text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Genuine Products</h3>
              <p className="text-gray-600">
                All our batteries are 100% genuine with manufacturer serial numbers and warranty cards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-brand-red text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Extended Warranty</h3>
              <p className="text-gray-600">
                Enjoy peace of mind with manufacturer-backed warranties on all our battery products.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-brand-red text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Professional Installation</h3>
              <p className="text-gray-600">
                Expert installation by our trained technicians ensures optimal performance and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Battery?</h2>
            <p className="text-lg mb-8">
              Contact us today for expert advice and find the perfect battery for your vehicle or home power needs.
            </p>
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
