
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-motech-primary">MoTech Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-motech-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team members in a meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-motech-primary/10 rounded-lg"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-motech-secondary/20 rounded-lg"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              MoTech Solutions was founded in 2018 with a mission to help businesses leverage technology to grow and thrive in an increasingly digital world. Our team of experts combines deep technical knowledge with business acumen to deliver solutions that truly make a difference.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that technology should be accessible and effective for businesses of all sizes. Our approach focuses on understanding your unique needs and challenges before developing customized solutions that deliver real results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-xl text-gray-800">15+</h4>
                <p className="text-gray-600">Expert Team Members</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800">100+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800">50+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800">5+</h4>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>

            <Button className="bg-motech-primary hover:bg-motech-secondary">
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
