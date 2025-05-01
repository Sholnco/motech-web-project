
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-motech-light rounded-full -mr-40 -mb-40"></div>
        <div className="absolute left-0 top-32 w-[300px] h-[300px] bg-motech-light/60 rounded-full -ml-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Innovative <span className="text-motech-primary">Tech Solutions</span> for Your Business
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              We help businesses transform their digital presence with cutting-edge technology solutions that drive growth and efficiency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-motech-primary hover:bg-motech-secondary text-white px-8 py-6 text-lg h-auto">
                Get Started
              </Button>
              <Button variant="outline" className="border-motech-primary text-motech-primary hover:bg-motech-primary hover:text-white px-8 py-6 text-lg h-auto">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tech professional working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-motech-primary rounded-lg"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-motech-secondary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
