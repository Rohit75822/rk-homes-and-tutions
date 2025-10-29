'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, HeartHandshake, BadgeCheck, Clock } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const stats = [
  { icon: Users, text: "2500+ Expert Tutors" },
  { icon: HeartHandshake, text: "500+ Happy Families" },
  { icon: BadgeCheck, text: "100% Result Guarantee" },
  { icon: Clock, text: "48hrs Service Time" },
];

const carouselImages = [
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0058.jpg", alt: "Tutor helping a student", hint: "tutor student" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0057.jpg", alt: "Another tutoring session", hint: "learning environment" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0051.jpg", alt: "Tutoring session", hint: "education learning" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0052.jpg", alt: "Tutoring session", hint: "education learning" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0053.jpg", alt: "Tutoring session", hint: "education learning" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0054.jpg", alt: "Tutoring session", hint: "education learning" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0055.jpg", alt: "Tutoring session", hint: "education learning" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0056.jpg", alt: "Tutoring session", hint: "education learning" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0060.jpg", alt: "Tutoring session", hint: "education learning" },
    { src: "https://raw.githubusercontent.com/Rohit75822/rk-homes/main/IMG-20251028-WA0061.jpg", alt: "Tutoring session", hint: "education learning" },
]

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="w-full bg-secondary/30 py-16 md:py-24 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className={cn("space-y-6 text-center md:text-left transition-all duration-700 ease-out", inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12')}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About RK Home & Online Tutors
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl md:mx-0">
                Rooting Knowledge in every student through personalized education and expert guidance.
              </p>
              <p className="mx-auto max-w-3xl text-muted-foreground md:mx-0">
                At RK Tutors, we believe that every student has the potential to excel. Our mission is to provide high-quality, personalized education that caters to the unique learning style of each individual. We connect students with a vast network of experienced and dedicated tutors who are committed to fostering academic growth and building confidence.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="transform transition-transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                    <CardTitle className="text-sm font-medium">{stat.text}</CardTitle>
                    <stat.icon className="h-5 w-5 text-muted-foreground" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div className={cn("flex justify-center transition-all duration-700 ease-out delay-200", inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12')}>
            <Carousel className="w-full max-w-md mx-auto" opts={{ loop: true }}>
                <CarouselContent>
                    {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                        <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={500}
                                height={500}
                                className="rounded-xl object-cover w-full h-full"
                                data-ai-hint={image.hint}
                            />
                        </CardContent>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2"/>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
