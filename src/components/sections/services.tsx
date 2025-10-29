import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Target, Check } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Home Tutoring",
    description: "Personalized one-on-one tutoring at the comfort of your home.",
    features: [
      "Individual Attention",
      "Customized Lesson Plans",
      "Flexible Scheduling",
    ],
  },
  {
    icon: GraduationCap,
    title: "Online Classes",
    description: "Interactive and engaging online sessions with expert tutors.",
    features: [
      "Live Interactive Platform",
      "Recorded Sessions for Revision",
      "Global Access to Tutors",
    ],
  },
  {
    icon: Target,
    title: "Exam Preparation",
    description: "Specialized coaching for competitive exams like JEE, NEET, and more.",
    features: [
      "Targeted Exam Strategies",
      "Regular Mock Tests",
      "Doubt Clearing Sessions",
    ],
  },
];

const subjects = [
  "Mathematics", "Physics", "Chemistry", "Biology", "English", "Hindi", 
  "Social Studies", "Computer Science", "Economics", "Accountancy"
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services & Courses</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            We offer a wide range of tutoring services to cater to every student's needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Subjects We Cover</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {subjects.map((subject) => (
              <Badge key={subject} variant="outline" className="px-4 py-2 text-base">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
