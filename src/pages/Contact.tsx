
import SectionTitle from "@/components/SectionTitle";
import MapComponent from "@/components/MapComponent";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Mail, Clock, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Get in touch with us for all your battery and auto electrical needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionTitle title="Get In Touch" />
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        Nirman Arcade, Shop No. 12, Opp. Nigdi Jakat Naka, Nigdi, Pune – 44, Maharashtra, India
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Phone className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Phone Numbers</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919822436042" className="hover:text-brand-red transition-colors">
                          +91 9822436042
                        </a>
                        <br />
                        <a href="tel:+918180801414" className="hover:text-brand-red transition-colors">
                          +91 8180801414
                        </a>
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday – Saturday: 9:00 AM – 7:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-center">
                    <a 
                      href="https://wa.me/919822436042" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600 mr-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Map */}
              <MapComponent />
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionTitle title="Send Us a Message" />
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ContactForm />
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">Looking for immediate assistance?</h3>
                <p className="text-gray-600 mb-4">
                  If you need urgent help with a battery issue or automotive electrical problem, please call us directly for the fastest response.
                </p>
                <div className="flex gap-4">
                  <a
                    href="tel:+919822436042"
                    className="bg-brand-red hover:bg-red-700 text-white px-4 py-2 rounded-md inline-flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" /> Call Now
                  </a>
                  <a
                    href="https://wa.me/919822436042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Frequently Asked Questions" 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">Do you offer doorstep battery replacement?</h3>
              <p className="text-gray-600">
                Yes, we provide emergency doorstep battery replacement services in Nigdi and surrounding areas of Pune. Call us for assistance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">How can I book a service appointment?</h3>
              <p className="text-gray-600">
                You can book an appointment by calling us, sending a WhatsApp message, or filling out the contact form on this page.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">Do you accept online payments?</h3>
              <p className="text-gray-600">
                Yes, we accept UPI payments, online transfers, and traditional cash payments for your convenience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">How do I find your shop location?</h3>
              <p className="text-gray-600">
                We are located at Nirman Arcade, Shop No. 12, opposite Nigdi Jakat Naka. You can use the Google Maps link on this page for directions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
