
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import CTAButtons from "@/components/CTAButtons";

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      name: "Rahul Sharma",
      content: "Excellent service! They replaced my car battery promptly and at a reasonable price. The staff was knowledgeable and helped me choose the right battery for my vehicle. Highly recommended for all battery needs.",
      rating: 5,
      source: "Google",
    },
    {
      name: "Priya Patel",
      content: "The team at Saini Battery solved my car's electrical issues quickly. Very knowledgeable and professional staff. Their prices are fair and the service quality is excellent. Will definitely return for future services.",
      rating: 5,
      source: "JustDial",
    },
    {
      name: "Vikram Singh",
      content: "Great service and fair pricing. I've been a customer for years and they never disappoint. The owner is honest and gives good advice without trying to upsell unnecessary products.",
      rating: 4,
      source: "Google",
    },
    {
      name: "Anil Kumar",
      content: "Had an emergency battery failure and they came to my rescue quickly. Professional service with transparent pricing. The battery they installed is working perfectly even after a year.",
      rating: 5,
      source: "IndiaMART",
    },
    {
      name: "Meera Desai",
      content: "Visited for inverter battery replacement. They provided detailed information about different options and helped me make the right choice. Installation was done professionally and they even took away the old battery for recycling.",
      rating: 5,
      source: "JustDial",
    },
    {
      name: "Suresh Joshi",
      content: "Honest and reliable service. I had issues with my car's electrical system and they diagnosed and fixed the problem quickly. Very satisfied with their work.",
      rating: 4,
      source: "Google",
    },
    {
      name: "Neha Gupta",
      content: "Great experience with Saini Battery. They replaced my two-wheeler battery at a competitive price. The service was quick and professional. Will recommend to friends and family.",
      rating: 5,
      source: "JustDial",
    },
    {
      name: "Raj Mehta",
      content: "Best battery shop in Nigdi area. Fair prices, quality products, and excellent service. I've been coming here for all my battery needs for the past 3 years.",
      rating: 5,
      source: "Google",
    },
    {
      name: "Sanjay Patil",
      content: "Had my truck battery replaced here. The service was excellent and they offered a good warranty on the battery. Very professional and knowledgeable team.",
      rating: 4,
      source: "IndiaMART",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Customer Testimonials</h1>
            <p className="text-lg text-gray-600">
              Read what our satisfied customers have to say about our services
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>
      
      {/* Rating Stats */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Ratings" 
            subtitle="Trusted by hundreds of satisfied customers"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-brand-blue mb-2">4.8</div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">Google</h3>
              <p className="text-gray-600">Based on 120+ reviews</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-brand-blue mb-2">4.7</div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-yellow-500 fill-yellow-500'}`} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">JustDial</h3>
              <p className="text-gray-600">Based on 80+ reviews</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-brand-blue mb-2">4.9</div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">IndiaMART</h3>
              <p className="text-gray-600">Based on 50+ reviews</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leave a Review */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Share Your Experience" 
              subtitle="Had a good experience? Leave us a review!"
              center
            />
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="https://g.page/r/saini-battery-review" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white border border-gray-200 hover:border-brand-blue text-gray-800 px-6 py-3 rounded-md flex items-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Review on Google
              </a>
              
              <a 
                href="https://www.justdial.com/rate-business/saini-battery" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white border border-gray-200 hover:border-brand-blue text-gray-800 px-6 py-3 rounded-md flex items-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Review on JustDial
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Our Service Yourself</h2>
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

export default Testimonials;
