
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTAButtons from "@/components/CTAButtons";
import { Battery, Wrench, Truck, Car, Zap, Clock } from "lucide-react";

const Services = () => {
  // Service data
  const services = [
    {
      icon: <Battery />,
      title: "Battery Replacement",
      description: "Professional battery replacement service for cars, trucks, and two-wheelers with proper installation and testing."
    },
    {
      icon: <Wrench />,
      title: "Starter Motor Repair",
      description: "Expert diagnosis and repair of starter motors for all vehicle types, restoring reliable starting performance."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>,
      title: "Alternator Repair",
      description: "Complete alternator repair and replacement services to ensure your vehicle's electrical system charges properly."
    },
    {
      icon: <Zap />,
      title: "Auto Electrical Wiring",
      description: "Professional electrical wiring services for both light and heavy vehicles, fixing electrical issues and preventing future problems."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>,
      title: "UPS & Inverter Installation",
      description: "Complete setup and installation of UPS and inverter systems for homes and offices, including battery replacement."
    },
    {
      icon: <Clock />,
      title: "Emergency Battery Service",
      description: "Quick roadside battery replacement service for stranded vehicles, available when you need it most."
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Call us or visit our shop to discuss your battery or electrical needs."
    },
    {
      number: "02",
      title: "Diagnosis",
      description: "Our experts will diagnose the issue with your vehicle or electrical system."
    },
    {
      number: "03",
      title: "Recommendation",
      description: "We'll provide honest recommendations and transparent pricing."
    },
    {
      number: "04",
      title: "Service",
      description: "Our trained technicians will perform the necessary repairs or replacements."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Our Services</h1>
            <p className="text-lg text-gray-600">
              Professional automotive and electrical services for all your needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Comprehensive battery and auto electrical services"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Process" 
            subtitle="How we deliver quality service every time"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-4 -left-4 bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vehicle Types */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="We Service All Vehicle Types" 
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <Car className="h-12 w-12 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passenger Cars</h3>
              <p className="text-gray-600">
                From compact cars to luxury sedans, we service all passenger vehicles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <Truck className="h-12 w-12 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Commercial Vehicles</h3>
              <p className="text-gray-600">
                Heavy-duty solutions for trucks, buses, and other commercial vehicles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 15h12M6 12h12m-4-3v6m-2-5l4-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Two-Wheelers</h3>
              <p className="text-gray-600">
                Specialized services for motorcycles, scooters, and other two-wheelers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Why Choose Our Services?" />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Experienced Technicians</h4>
                    <p className="text-gray-600 text-sm">Our team has years of experience in auto electrical systems and battery services.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Quality Parts & Products</h4>
                    <p className="text-gray-600 text-sm">We use only genuine parts and products for all repairs and replacements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Quick Service Turnaround</h4>
                    <p className="text-gray-600 text-sm">We understand the importance of getting your vehicle back on the road quickly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">No hidden costs or surprise fees. We provide clear estimates before any work begins.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">After-Sales Support</h4>
                    <p className="text-gray-600 text-sm">We stand behind our work with excellent post-service support.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <CTAButtons />
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="/placeholder.svg" 
                alt="Auto Electrical Service" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Frequently Asked Questions" 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">How do I know when my car battery needs replacement?</h3>
              <p className="text-gray-600">
                Common signs include slow engine cranking, dimming headlights, electrical issues, battery warning light, swollen battery case, or if the battery is over 3-4 years old.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">Do you offer emergency roadside battery service?</h3>
              <p className="text-gray-600">
                Yes, we provide emergency battery replacement services. Call our helpline, and our technician will reach your location to help get you back on the road.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">What warranty is provided on batteries?</h3>
              <p className="text-gray-600">
                All our batteries come with manufacturer-backed warranties that typically range from 18 to 48 months, depending on the battery type and brand.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">Can you service commercial fleet vehicles?</h3>
              <p className="text-gray-600">
                Yes, we offer specialized services for commercial fleet vehicles, including regular maintenance contracts and priority emergency service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Auto Electrical Services?</h2>
            <p className="text-lg mb-8">
              Contact us today for quick, reliable service from experienced technicians.
            </p>
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
