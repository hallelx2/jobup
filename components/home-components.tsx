import { Card } from "./ui/card";
import React from "react";


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
