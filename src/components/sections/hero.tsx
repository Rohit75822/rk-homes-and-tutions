import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { UsersRound, Award, TrendingUp, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-tutoring-scene');

  return (
    <section id="home" className="relative w-full overflow-hidden bg-primary pt-24 md:pt-32">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(214,100%,60%)] to-accent opacity-90"
      />
      <div className="container relative mx-auto grid grid-cols-1 items-center gap-8 px-4 pb-12 md:grid-cols-2 md:gap-16 md:px-6 lg:pb-24">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Welcome to Hyderabad's No.1 Home & Online Tuitions
          </h1>
          <p className="text-xl text-blue-100 md:text-2xl">
            by RK Home & Online Tutors (Rooting Knowledge)
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Badge variant="secondary" className="gap-2 bg-secondary/90 py-2 px-4 text-sm font-semibold text-primary">
              <UsersRound className="h-5 w-5" />
              2500+ Expert Tutors
            </Badge>
            <Badge variant="secondary" className="gap-2 bg-secondary/90 py-2 px-4 text-sm font-semibold text-primary">
              <Award className="h-5 w-5" />
              500+ Happy Parents
            </Badge>
            <Badge variant="secondary" className="gap-2 bg-secondary/90 py-2 px-4 text-sm font-semibold text-primary">
              <TrendingUp className="h-5 w-5" />
              100% Results Within a Month
            </Badge>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z"/><path d="M12 12 8 8"/><path d="m12 12 4 4"/></svg>
                Book Your Free Demo Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0_0_24_24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M13.4 2H6.6l1.7 1.7L4 8l4 4.3.3-3.3 1.7-1.7 1.7 1.7-.3 3.3 4-4.3-4.3-4.3L13.4 2zM3.5 8.8 8 13.2l4.5-4.5"/><path d="m12 15 5 5m-5-5-5 5"/></svg>
                Find Your Perfect Tutor Today
              </Link>
            </Button>
          </div>
          <p className="flex items-center justify-center gap-2 text-sm text-white/80 md:justify-start">
            <MessageCircle className="h-4 w-4" />
            Free Registration | Service Within 48 Hours | Trusted by Parents Across Hyderabad
          </p>
        </div>
        <div className="relative h-64 md:h-auto md:self-stretch">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="rounded-lg object-cover shadow-2xl"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
