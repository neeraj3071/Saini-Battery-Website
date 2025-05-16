
import SectionTitle from "@/components/SectionTitle";
import BrandLogos from "@/components/BrandLogos";
import CTAButtons from "@/components/CTAButtons";

const About = () => {
  const milestones = [
    {
      year: "Experience",
      title: "Years of Industry Experience",
      description: "Providing trusted battery and auto electrical services to the community."
    },
    {
      year: "Quality",
      title: "Authorized Brand Dealer",
      description: "Offering genuine products with manufacturer warranty."
    },
    {
      year: "Service",
      title: "Professional Service",
      description: "Expert technicians for all battery and electrical issues."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Your trusted partner for automotive batteries and electrical services in Nigdi, Pune
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" />
              <p className="text-gray-600 mb-4">
                Saini Battery & Auto Electrical Works is a trusted family-run business based in Nigdi, Pune. For many years, we've been providing reliable automotive battery solutions and electrical repair services to our community.
              </p>
              <p className="text-gray-600 mb-4">
                Founded by R.S. Saini, our business has grown through word-of-mouth recommendations from satisfied customers who appreciate our honest advice, quality products, and excellent service.
              </p>
              <p className="text-gray-600 mb-6">
                As authorized dealers for leading battery brands such as Exide, Amaron, and Luminous, we provide only genuine products with full manufacturer warranty. Our team of experienced technicians ensures proper installation and after-sales support for all products we sell.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-3 text-brand-blue">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2 font-bold">✓</span>
                    <span>Genuine products with manufacturer warranty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2 font-bold">✓</span>
                    <span>Experienced technicians with specialized knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2 font-bold">✓</span>
                    <span>Competitive pricing and transparent billing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2 font-bold">✓</span>
                    <span>Emergency roadside battery replacement service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2 font-bold">✓</span>
                    <span>Highly rated on Google, JustDial, and IndiaMART</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <img 
                src="/lovable-uploads/29d9cdbf-4518-428a-aae2-197eda527d18.png" 
                alt="Saini Battery & Auto Electrical Works Shop Front" 
                className="rounded-lg shadow-md w-full h-auto"
              />
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                    <h3 className="text-2xl font-bold text-brand-red">{milestone.year}</h3>
                    <p className="text-gray-800 font-medium text-sm mt-2">{milestone.title}</p>
                    <p className="text-gray-600 text-xs mt-1">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Values" 
            subtitle="Experience + Quality + Quick Service"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                We stand behind our products and services with warranties and guarantees that provide peace of mind.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p className="text-gray-600">
                We value your time and provide quick diagnostics and efficient service without cutting corners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Honest Advice</h3>
              <p className="text-gray-600">
                We provide transparent recommendations and never upsell unnecessary products or services.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Authorized Dealer */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Authorized Dealer" 
            subtitle="We partner with leading battery manufacturers to provide genuine products"
            center
          />
          
          <div className="mt-10">
            <BrandLogos />
          </div>
          
          <div className="flex justify-center mt-8">
            <img 
              src="/lovable-uploads/a4559168-1486-43a3-8ae1-167e978fe816.png" 
              alt="Exide Authorized Dealer Certificate" 
              className="max-w-xs md:max-w-sm rounded-lg shadow-md"
            />
          </div>
          
          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            As authorized dealers for Exide, Amaron, and Luminous batteries, we provide genuine products with full manufacturer warranty. We maintain high standards of product quality and customer service to ensure your complete satisfaction.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Service?</h2>
            <p className="text-lg mb-8">
              Contact us today for all your battery and auto electrical needs. We're here to help!
            </p>
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
