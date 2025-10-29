import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, HeartHandshake, BadgeCheck, Clock } from 'lucide-react';

const stats = [
  { icon: Users, text: "2500+ Expert Tutors" },
  { icon: HeartHandshake, text: "500+ Happy Families" },
  { icon: BadgeCheck, text: "100% Result Guarantee" },
  { icon: Clock, text: "48hrs Service Time" },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12">
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About RK Home & Online Tutors
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
                Rooting Knowledge in every student through personalized education and expert guidance.
              </p>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                At RK Tutors, we believe that every student has the potential to excel. Our mission is to provide high-quality, personalized education that caters to the unique learning style of each individual. We connect students with a vast network of experienced and dedicated tutors who are committed to fostering academic growth and building confidence.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
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
        </div>
      </div>
    </section>
  );
}
