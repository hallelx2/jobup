// "use server"

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Share2, Bookmark } from "lucide-react";
import Link from "next/link";

// Create proper type definitions for our blog post data
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

// Type our blog posts array
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Tips for a Successful Job Interview",
    content: `
      <p class="mb-4">Preparing for a job interview can be both exciting and nerve-wracking. Here are ten essential tips to help you succeed:</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">1. Research the Company</h2>
      <p class="mb-4">Understanding the company's mission, values, and recent developments shows initiative and genuine interest. Review their website, social media, and recent news.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">2. Practice Common Questions</h2>
      <p class="mb-4">While you can't predict every question, practicing responses to common interview questions builds confidence and helps you articulate your thoughts clearly.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">3. Prepare STAR Examples</h2>
      <p class="mb-4">Use the Situation, Task, Action, Result format to structure your responses to behavioral questions. Have several examples ready that showcase your skills.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">4. Dress Appropriately</h2>
      <p class="mb-4">Research the company culture and dress one level above what employees typically wear. When in doubt, opt for business professional attire.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">5. Arrive Early</h2>
      <p class="mb-4">Plan to arrive 10-15 minutes before your scheduled interview time. This allows for unexpected delays and shows punctuality.</p>
    `,
    author: "Sarah Johnson",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80",
    category: "Career Tips",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Future of Work: Remote Jobs and Digital Transformation",
    content: `
      <p class="mb-4">The workplace is rapidly evolving with digital transformation at its core. Here's what you need to know:</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">1. Remote Work is Here to Stay</h2>
      <p class="mb-4">Companies are embracing flexible work arrangements, making remote work a permanent option for many roles.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">2. Digital Skills are Essential</h2>
      <p class="mb-4">Regardless of your industry, digital literacy and adaptability are becoming crucial for career growth.</p>
    `,
    author: "Michael Chen",
    date: "April 12, 2025",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    category: "Industry Trends",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Building a Strong Personal Brand for Career Growth",
    content: `
      <p class="mb-4">Your personal brand can significantly impact your career trajectory. Here's how to build it:</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">1. Define Your Unique Value Proposition</h2>
      <p class="mb-4">Identify what makes you stand out and how you can provide value to your industry and potential employers.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">2. Maintain a Professional Online Presence</h2>
      <p class="mb-4">Curate your social media profiles and engage with your professional network meaningfully.</p>
    `,
    author: "Emma Williams",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80",
    category: "Personal Development",
    readTime: "7 min read"
  }
];

// Type the parameters for generateStaticParams
export function generateStaticParams(): { id: string }[] {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

// For Next.js server components, use appropriate types
interface BlogPostProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostProps): JSX.Element {
  // Use proper type narrowing with fallback
  const post = blogPosts.find(p => p.id === Number(params.id)) || null;

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Navigation */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>
            </div>

            {/* Header */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.date}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video relative rounded-lg overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content - Using a safer approach with Next.js */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share and Save */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
