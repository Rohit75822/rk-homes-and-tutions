import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UsersRound, Award, TrendingUp, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-background pt-24 md:pt-32">
      <div className="container relative mx-auto grid grid-cols-1 items-center gap-8 px-4 pb-12 md:gap-16 md:px-6 lg:pb-24">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            Welcome to Hyderabad's No.1 Home & Online Tuitions
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            by RK Home & Online Tutors (Rooting Knowledge)
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Badge variant="secondary" className="gap-2 py-2 px-4 text-sm font-semibold text-secondary-foreground">
              <UsersRound className="h-5 w-5" />
              2500+ Expert Tutors
            </Badge>
            <Badge variant="secondary" className="gap-2 py-2 px-4 text-sm font-semibold text-secondary-foreground">
              <Award className="h-5 w-5" />
              500+ Happy Parents
            </Badge>
            <Badge variant="secondary" className="gap-2 py-2 px-4 text-sm font-semibold text-secondary-foreground">
              <TrendingUp className="h-5 w-5" />
              100% Results Within a Month
            </Badge>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z"/><path d="M12 12 8 8"/><path d="m12 12 4 4"/></svg>
                Book Your Free Demo Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0_0_24_24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M13.4 2H6.6l1.7 1.7L4 8l4 4.3.3-3.3 1.7-1.7 1.7 1.7-.3 3.3 4-4.3-4.3-4.3L13.4 2zM3.5 8.8 8 13.2l4.5-4.5"/><path d="m12 15 5 5m-5-5-5 5"/></svg>
                Find Your Perfect Tutor Today
              </Link>
            </Button>
          </div>
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-center">
            <MessageCircle className="h-4 w-4" />
            Free Registration | Service Within 48 Hours | Trusted by Parents Across Hyderabad
          </p>
        </div>
      </div>
    </section>
  );
}
