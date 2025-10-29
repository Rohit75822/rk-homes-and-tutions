import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, GraduationCap, Target, Check, BrainCircuit, Atom, Flask, Dna, Languages, BookText, Globe, Laptop, Briefcase, BarChart2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


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
    {
        icon: BrainCircuit,
        title: "Mathematics",
        description: "From basic arithmetic to advanced calculus, our tutors build strong problem-solving skills and a deep understanding of mathematical concepts.",
    },
    {
        icon: Atom,
        title: "Physics",
        description: "Explore the laws of the universe. We cover mechanics, electricity, magnetism, and modern physics with a focus on conceptual clarity and application.",
    },
    {
        icon: Flask,
        title: "Chemistry",
        description: "Dive into the world of molecules and reactions. Our sessions cover organic, inorganic, and physical chemistry, making complex topics easy to digest.",
    },
    {
        icon: Dna,
        title: "Biology",
        description: "Uncover the secrets of life. We offer comprehensive tutoring in botany, zoology, and human physiology, crucial for both board exams and NEET.",
    },
    {
        icon: Languages,
        title: "English",
        description: "Master the global language. We focus on grammar, literature, comprehension, and creative writing to improve fluency and communication skills.",
    },
    {
        icon: BookText,
        title: "Hindi",
        description: "Strengthen your command of the national language with a focus on grammar, literature, and conversational skills for all academic levels.",
    },
    {
        icon: Globe,
        title: "Social Studies",
        description: "Understand the world around you. Our tutors make history, geography, civics, and economics engaging and relevant.",
    },
    {
        icon: Laptop,
        title: "Computer Science",
        description: "From programming fundamentals (Python, Java, C++) to complex algorithms, we prepare students for the digital future.",
    },
    {
        icon: Briefcase,
        title: "Economics",
        description: "Grasp the principles of micro and macroeconomics. We simplify complex theories and help students understand their real-world applications.",
    },
    {
        icon: BarChart2,
        title: "Accountancy",
        description: "Build a strong foundation in financial accounting, corporate accounting, and bookkeeping with our expert commerce tutors.",
    }
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

        <div className="mt-20">
          <div className="space-y-4 text-center">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subjects We Cover</h3>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Click on a subject to learn more about our tailored curriculum.
              </p>
          </div>
          <Card className="mt-8">
            <CardContent className="p-4 md:p-6">
                <Accordion type="single" collapsible className="w-full">
                {subjects.map((subject, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium hover:no-underline">
                        <div className="flex items-center gap-4">
                            <subject.icon className="h-6 w-6 text-primary" />
                            {subject.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-14 text-base text-muted-foreground">
                      {subject.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
