"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Briefcase, Building2, LineChart, Users2, CheckCircle, Mail, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter()
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span>Reshaping Careers in Nigeria</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <h1 className="text-6xl font-bold tracking-tight leading-tight">
                Building Nigeria's
                <br />
                <span className="text-primary">Next Generation Talent</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Join our community of 490+ professionals who are developing in-demand skills and becoming the go-to candidates for top employers across Nigeria.
              </p>
              <div className="flex gap-4 items-center">
                <Button size="lg" className="gap-2" onClick={() => router.push('/auth/signup')}>
                  Join Our Community <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => router.push('/blog')}>
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 pt-8 border-t">
                <div>
                  <p className="text-3xl font-bold">490+</p>
                  <p className="text-muted-foreground">Active Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">Weekly</p>
                  <p className="text-muted-foreground">Free Training</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">Direct</p>
                  <p className="text-muted-foreground">Job Connections</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <img
                src="https://plus.unsplash.com/premium_photo-1672997189743-f5cadf5440ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGElMjBncm91cCUyMG9mJTIwYmxhY2slMjBidXNpbmVzcyUyMG9yaWVudGVkJTIwcGVwbGUlMjBpbiUyMGElMjBtZWV0aW5nfGVufDB8fDB8fHww"
                alt="Career Growth"
                className="relative rounded-lg shadow-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span>Our Platforms</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
            <h2 className="text-4xl font-bold">Empowering Nigerian Talent</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We operate three distinct but interconnected platforms to support job seekers in developing skills, finding opportunities, and creating their own businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Briefcase className="h-8 w-8" />}
              title="Job Up Nigeria"
              description="Direct job opportunities sourced from managers, HRs, CEOs, and recruiters with application tracking to monitor your progress."
            />
            <ServiceCard
              icon={<Users2 className="h-8 w-8" />}
              title="Job Up Training"
              description="Access to free Udemy courses and our own weekly training sessions to develop in-demand skills that make you stand out to employers."
            />
            <ServiceCard
              icon={<Building2 className="h-8 w-8" />}
              title="Job Up Marketplace"
              description="Our upcoming WhatsApp-based talent marketplace connecting skilled professionals with businesses needing their services."
            />
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section id="process" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span>Our Approach</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
            <h2 className="text-4xl font-bold">Building Exceptional Talent</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We develop job seekers who consistently exceed employer expectations and become the go-to candidates for businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Skill Development"
              description="Building in-demand expertise through targeted training and resources"
            />
            <ProcessStep
              number="02"
              title="Personal Branding"
              description="Creating outstanding resumes, cover letters, and online profiles"
            />
            <ProcessStep
              number="03"
              title="Interview Mastery"
              description="Developing effective interviewing and networking techniques"
            />
            <ProcessStep
              number="04"
              title="Workplace Excellence"
              description="Demonstrating exceptional work ethic, teamwork, and problem-solving"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="stories" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span>Our Vision</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
            <h2 className="text-4xl font-bold">Transforming Nigeria</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We aim to reshape individual mindsets and create a Nigeria where professional businesses thrive and create more opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Our Job Seekers Mentorship program will provide intensive guidance to a limited number of participants, creating success stories that demonstrate Job Up's effectiveness."
              author="Future Initiative"
              role="Job Seekers Mentorship"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              quote="Imagine if 1000 graduates started their own companies—we could create 500 new businesses generating jobs and significantly reducing unemployment in Nigeria."
              author="Future Initiative"
              role="Campus Tour Program"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              quote="By connecting directly with managers and HR professionals instead of agents who charge fees, we're creating an ethical job marketplace that truly serves Nigerian talent."
              author="Ongoing Initiative"
              role="Direct Employer Connections"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span>Join Our Community</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
            <h2 className="text-4xl font-bold">Be Part of the Change</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community of job seekers, entrepreneurs, and professionals building a stronger Nigeria through skills and opportunity.
            </p>
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded-md border border-input bg-background"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md border border-input bg-background"
                  />
                </div>
                <textarea
                  placeholder="Which of our platforms interests you most? (Job Up Nigeria, Training, or Marketplace)"
                  rows={4}
                  className="w-full p-3 rounded-md border border-input bg-background"
                ></textarea>
                <Button size="lg" className="w-full">
                  Join Our Community
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    );
  }

  // Define prop types for ProcessStep
  interface ProcessStepProps {
    number: number | string;
    title: string;
    description: string;
  }

  function ProcessStep({ number, title, description }: ProcessStepProps) {
    return (
      <div className="text-center group">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold mb-4 group-hover:scale-110 transition-transform">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    );
  }

  // Define prop types for TestimonialCard
  interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    image: string;
  }

  function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
    return (
      <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
        <div className="flex items-start mb-4">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <p className="text-muted-foreground italic">&quot;{quote}&quot;</p>
      </Card>
    );
  }

  export { ServiceCard, ProcessStep, TestimonialCard };
