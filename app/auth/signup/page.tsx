"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add authentication logic here
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-primary/10 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 space-y-6">
        <div className="space-y-2 text-center">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="text-muted-foreground">
            Start your career journey with Job Up
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Full Name"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              required
              disabled={isLoading}
            />
          </div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </Card>
    </div>
  );
}