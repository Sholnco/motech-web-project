
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Layout, Code, Database, Server, BarChart } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code size={40} className="text-motech-primary mb-4" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and challenges."
    },
    {
      icon: <Layout size={40} className="text-motech-primary mb-4" />,
      title: "Web Development",
      description: "Responsive, user-friendly websites and web applications that engage your audience."
    },
    {
      icon: <Database size={40} className="text-motech-primary mb-4" />,
      title: "Data Management",
      description: "Comprehensive data solutions to help you store, process, and analyze your valuable information."
    },
    {
      icon: <Server size={40} className="text-motech-primary mb-4" />,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and services to enhance your operational efficiency."
    },
    {
      icon: <BarChart size={40} className="text-motech-primary mb-4" />,
      title: "Business Intelligence",
      description: "Data analytics and reporting tools to help you make data-driven decisions."
    },
    {
      icon: <Settings size={40} className="text-motech-primary mb-4" />,
      title: "IT Consulting",
      description: "Expert guidance to help you navigate technology challenges and leverage opportunities."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-motech-primary">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital landscape.
          </p>
          <div className="w-20 h-1 bg-motech-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div>{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
