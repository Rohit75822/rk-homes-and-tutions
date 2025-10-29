import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { classesData } from "@/lib/classes-data";
import { cn } from "@/lib/utils";

const cardGradients = [
  "from-[#fed1c7] to-[#fe8dc6]", // New gradient for "Classes 1-10"
  "from-purple-100 to-indigo-100",
  "from-green-100 to-cyan-100",
  "from-amber-100 to-yellow-100",
];


export default function ClassesSection() {
  return (
    <section id="classes" className="w-full bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Classes We Teach
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Expert tutoring for every stage of your academic journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {classesData.map((classItem, index) => (
            <Link key={classItem.slug} href={`/classes/${classItem.slug}`} className="group">
              <Card className={cn(
                "parallax-card flex h-full flex-col justify-center text-center transition-all",
                "bg-gradient-to-br backdrop-blur-sm",
                cardGradients[index % cardGradients.length]
              )}>
                <CardHeader className="items-center">
                  <div className="mb-4 rounded-full bg-white/30 p-4">
                    <classItem.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{classItem.title}</CardTitle>
                  <CardDescription className="text-card-foreground/80">{classItem.shortDescription}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
