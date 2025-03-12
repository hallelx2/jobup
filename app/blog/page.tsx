import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for a Successful Job Interview",
    excerpt: "Master the art of interviewing with these proven strategies that will help you stand out from other candidates...",
    author: "Sarah Johnson",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80",
    category: "Career Tips"
  },
  {
    id: 2,
    title: "The Future of Work: Remote Jobs and Digital Transformation",
    excerpt: "Explore how the workplace is evolving and what skills you need to thrive in the digital age...",
    author: "Michael Chen",
    date: "April 12, 2025",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    category: "Industry Trends"
  },
  {
    id: 3,
    title: "Building a Strong Personal Brand for Career Growth",
    excerpt: "Learn how to create and maintain a professional brand that attracts opportunities...",
    author: "Emma Williams",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80",
    category: "Personal Development"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold">Career Insights & Resources</h1>
            <p className="text-xl text-muted-foreground">
              Expert advice, industry trends, and success stories to help you advance your career
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="aspect-video relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}