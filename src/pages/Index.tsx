import BrandLogos from "@/components/BrandLogos";
import CTAButtons from "@/components/CTAButtons";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Battery, Zap, Car, Truck, Wrench } from "lucide-react";

const Index = () => {
  // Sample services for homepage
  const services = [
    {
      icon: <Battery />,
      title: "Battery Replacement",
      description: "Quality battery replacement for cars, trucks, and two-wheelers with professional installation.",
    },
    {
      icon: <Wrench />,
      title: "Starter Motor Repair",
      description: "Expert repair and replacement of starter motors for all vehicle types.",
    },
    {
      icon: <Zap />,
      title: "Auto Electrical Repairs",
      description: "Complete auto electrical services including wiring, alternators, and electrical system diagnostics.",
    },
  ];
  
  // Sample testimonials
  const testimonials = [
    {
      name: "Rahul Sharma",
      content: "Excellent service! They replaced my car battery promptly and at a reasonable price. Highly recommended for all battery needs.",
      rating: 5,
      source: "Google",
    },
    {
      name: "Priya Patel",
      content: "The team at Saini Battery solved my car's electrical issues quickly. Very knowledgeable and professional staff.",
      rating: 5,
      source: "JustDial",
    },
    {
      name: "Vikram Singh",
      content: "Great service and fair pricing. I've been a customer for years and they never disappoint.",
      rating: 4,
      source: "Google",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-brand-blue text-white">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your One-Stop Solution for Batteries & Auto Electrical Repairs
              </h1>
              <p className="text-lg mb-8">
                Serving Nigdi, Pune with quality automotive batteries, electrical repairs, and exceptional customer service.
              </p>
              <CTAButtons />
              
              <div className="flex items-center mt-10">
                <p className="text-sm text-gray-300">Listed & Trusted on</p>
                <div className="flex ml-3 space-x-3">
                  <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-100">IndiaMART</span>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-100">Justdial</span>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-100">Google</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/6dba9c11-e48a-425f-b0ca-b2dbaf617586.png" 
                alt="Saini Battery & Auto Electrical Works Shop Sign" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Shop Image Section - Mobile Only */}
      <section className="md:hidden py-8 px-4">
        <img 
          src="/lovable-uploads/6dba9c11-e48a-425f-b0ca-b2dbaf617586.png" 
          alt="Saini Battery & Auto Electrical Works Shop Sign" 
          className="rounded-lg shadow-md w-full"
        />
      </section>
      
      {/* Brand Logos Section */}
      <section className="bg-gray-50 py-10">
        <div className="container">
          <BrandLogos />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Our Services" 
            subtitle="Professional automotive and electrical solutions for all your needs"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionTitle title="About Us" />
              <p className="text-gray-600 mb-4">
                Saini Battery & Auto Electrical Works is a family-run business providing reliable automotive battery and electrical repair services in Nigdi, Pune for many years.
              </p>
              <p className="text-gray-600 mb-4">
                As an authorized dealer for Exide, Amaron, and Luminous, we offer only the highest quality products with manufacturer warranty and reliable after-sales service.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-brand-blue rounded-full p-3">
                  <Battery className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Experience + Quality + Quick Service</h3>
                  <p className="text-gray-600 text-sm">Our commitment to you</p>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/3db28a3e-e072-4efc-bd03-373492539adc.png" 
                alt="Saini Battery Shop Inside View" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Highlight */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Our Products" 
            subtitle="Quality batteries and electrical components for all vehicles"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all group">
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 rounded-lg">
                <img 
                  src="/lovable-uploads/4e013f85-4590-44e8-9f76-c7d3db0e863b.png" 
                  alt="Car Batteries" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 group-hover:text-brand-red transition-colors">Car Batteries</h3>
              <p className="text-gray-600 text-sm mt-2">Exide, Amaron</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all group">
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 rounded-lg">
                <img 
                  src="/lovable-uploads/240e5087-3760-4028-997e-5ff28d65e852.png" 
                  alt="Commercial Batteries" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 group-hover:text-brand-red transition-colors">Commercial Batteries</h3>
              <p className="text-gray-600 text-sm mt-2">For trucks and heavy vehicles</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all group">
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 rounded-lg">
                <img 
                  src="/lovable-uploads/acd6c55d-80a2-4013-a157-e99defd92b3c.png" 
                  alt="Two-Wheeler Batteries" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 group-hover:text-brand-red transition-colors">Two-Wheeler Batteries</h3>
              <p className="text-gray-600 text-sm mt-2">For bikes and scooters</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all group">
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 rounded-lg">
                <img 
                  src="/lovable-uploads/8b37b4e7-47f4-4d36-a87a-dee6b40e4733.png" 
                  alt="Car/SUV Batteries" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 group-hover:text-brand-red transition-colors">Inverter Batteries</h3>
              <p className="text-gray-600 text-sm mt-2">Luminous, Exide</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Customer Testimonials" 
            subtitle="What our clients say about our services"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                content={testimonial.content}
                rating={testimonial.rating}
                source={testimonial.source}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Battery or Auto Electrical Services?</h2>
            <p className="text-lg mb-8">
              Contact us today for quality batteries, professional installation, and expert auto electrical repairs.
            </p>
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
