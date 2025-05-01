
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Ways Technology Can Transform Your Business",
      excerpt: "Discover how the latest technological innovations can help your business stay ahead in a competitive market.",
      date: "May 1, 2025",
      author: "Michael Johnson",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Technology"
    },
    {
      id: 2,
      title: "The Future of Cloud Computing: What to Expect",
      excerpt: "Explore the emerging trends in cloud computing and how they will impact businesses in the coming years.",
      date: "April 25, 2025",
      author: "Sarah Williams",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Cloud"
    },
    {
      id: 3,
      title: "Why Data Security Should Be Your Top Priority",
      excerpt: "Learn about the importance of data security in today's digital landscape and how to protect your business.",
      date: "April 18, 2025",
      author: "David Chen",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Security"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-motech-primary">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest trends and insights in technology and business.
          </p>
          <div className="w-20 h-1 bg-motech-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-motech-primary text-white text-xs py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-gray-500 mx-2"></div>
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-motech-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-0 px-6 pb-6">
                <Button variant="link" className="p-0 text-motech-primary font-medium hover:text-motech-secondary">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-motech-primary hover:bg-motech-secondary">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
