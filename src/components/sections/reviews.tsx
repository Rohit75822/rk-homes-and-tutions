import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const reviews = [
  {
    name: "Mrs. Priya Sharma",
    avatar: "https://picsum.photos/seed/p1/40/40",
    comment: "RK Home & Online tuitions has been a game-changer for my son's Mathematics grades. The personalized attention and expert guidance from his tutor made all the difference. We saw a 100% improvement within a month!",
  },
  {
    name: "Mr. Rajesh Kumar",
    avatar: "https://picsum.photos/seed/p2/40/40",
    comment: "The online classes are fantastic! My daughter enjoys the interactive sessions, and the flexibility is a huge plus for our busy schedule. Highly recommended for any parent.",
  },
  {
    name: "Mrs. Anitha Reddy",
    avatar: "https://picsum.photos/seed/p3/40/40",
    comment: "Thanks to RK Home & Online tuitions, my son successfully cleared his JEE entrance exam. The exam preparation course was rigorous and very well-structured. The teachers are simply the best.",
  },
  {
    name: "Mr. Sameer Rao",
    avatar: "https://picsum.photos/seed/p4/40/40",
    comment: "Finding a good physics tutor was difficult, but RK Tutors connected us with an amazing one. My daughter's confidence and grades have soared. The service was quick and professional.",
  },
  {
    name: "Ms. Sunita Singh",
    avatar: "https://picsum.photos/seed/p5/40/40.webp",
    comment: "I was looking for B.Tech tuition for my son. The tutor provided by them is highly knowledgeable and experienced. The results were visible in his semester exams. Very satisfied with the service.",
  },
  {
    name: "Mr. Anand Varma",
    avatar: "https://picsum.photos/seed/p6/40/40",
    comment: "Their home tutoring service is top-notch. The tutor is very patient and explains concepts clearly. My child is now more interested in studies. Thank you RK Home & Online Tutors!",
  }
];

export default function ReviewsSection() {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Parents Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Hear from families who have trusted us with their children's education.
          </p>
        </div>
      </div>

      <div
        className="relative mt-12 w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex w-max animate-scroll">
          {duplicatedReviews.map((review, index) => (
            <Card key={index} className="w-[350px] shrink-0 mx-4 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{review.comment}"</p>
              </CardContent>
              <div className="flex items-center gap-4 border-t bg-secondary/30 p-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}