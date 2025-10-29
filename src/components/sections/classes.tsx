import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { classesData } from "@/lib/classes-data";


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

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classesData.map((classItem) => (
            <Link key={classItem.slug} href={`/classes/${classItem.slug}`}>
              <Card className="flex h-full transform flex-col justify-center text-center transition-all hover:-translate-y-2 hover:border-primary hover:shadow-xl">
                <CardHeader className="items-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <classItem.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{classItem.title}</CardTitle>
                  <CardDescription>{classItem.shortDescription}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
