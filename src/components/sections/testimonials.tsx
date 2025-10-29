import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mrs. Priya Sharma",
    avatar: "PS",
    comment: "RK Tutors has been a game-changer for my son's Mathematics grades. The personalized attention and expert guidance from his tutor made all the difference. We saw a 100% improvement within a month!",
  },
  {
    name: "Mr. Rajesh Kumar",
    avatar: "RK",
    comment: "The online classes are fantastic! My daughter enjoys the interactive sessions, and the flexibility is a huge plus for our busy schedule. Highly recommended for any parent.",
  },
  {
    name: "Mrs. Anitha Reddy",
    avatar: "AR",
    comment: "Thanks to RK Tutors, my son successfully cleared his JEE entrance exam. The exam preparation course was rigorous and very well-structured. The teachers are simply the best.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Parents Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Hear from families who have trusted us with their children's education.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
              </CardContent>
              <div className="flex items-center gap-4 border-t bg-secondary/30 p-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
