import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Users, HeartHandshake, BadgeCheck, Clock } from 'lucide-react';

const stats = [
  { icon: Users, text: "2500+ Expert Tutors" },
  { icon: HeartHandshake, text: "500+ Happy Families" },
  { icon: BadgeCheck, text: "100% Result Guarantee" },
  { icon: Clock, text: "48hrs Service Time" },
];

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-professional-tutor');

  return (
    <section id="about" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About RK Home & Online Tutors
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Rooting Knowledge in every student through personalized education and expert guidance.
            </p>
            <p className="text-muted-foreground">
              At RK Tutors, we believe that every student has the potential to excel. Our mission is to provide high-quality, personalized education that caters to the unique learning style of each individual. We connect students with a vast network of experienced and dedicated tutors who are committed to fostering academic growth and building confidence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="transform transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.text}</CardTitle>
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] w-full md:h-[550px]">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
