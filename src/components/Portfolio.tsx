
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "software", name: "Custom Software" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A full-featured e-commerce solution with integrated payment processing."
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "software",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive patient management and billing system for healthcare providers."
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Secure mobile banking application with integrated authentication."
    },
    {
      id: 4,
      title: "Real Estate Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Property listing and management platform with advanced search capabilities."
    },
    {
      id: 5,
      title: "Inventory Management System",
      category: "software",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Powerful inventory tracking and management system for retailers."
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Mobile application for tracking fitness activities and nutrition."
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-motech-primary">Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped our clients achieve their technology goals.
          </p>
          <div className="w-20 h-1 bg-motech-primary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={cn(
                filter === category.id 
                  ? "bg-motech-primary hover:bg-motech-secondary" 
                  : "text-gray-600 hover:text-motech-primary"
              )}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-motech-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 capitalize mt-1">
                  {project.category === "web" ? "Web Development" : 
                   project.category === "mobile" ? "Mobile Apps" : "Custom Software"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-motech-primary hover:bg-motech-secondary text-lg px-8 py-6 h-auto">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
