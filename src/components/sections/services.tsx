import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, GraduationCap, Target, Check, BrainCircuit, Atom, FlaskConical, Dna, Languages, BookText, Globe, Laptop, Briefcase, BarChart2 } from "lucide-react";

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
        description: "From basic arithmetic to advanced calculus, building strong problem-solving skills.",
    },
    {
        icon: Atom,
        title: "Physics",
        description: "Covering mechanics, electricity, magnetism, and modern physics with conceptual clarity.",
    },
    {
        icon: FlaskConical,
        title: "Chemistry",
        description: "Organic, inorganic, and physical chemistry, making complex topics easy to digest.",
    },
    {
        icon: Dna,
        title: "Biology",
        description: "Comprehensive tutoring in botany, zoology, and human physiology for exams.",
    },
    {
        icon: Languages,
        title: "English",
        description: "Focus on grammar, literature, comprehension, and creative writing skills.",
    },
    {
        icon: BookText,
        title: "Hindi",
        description: "Strengthen command of the language with focus on grammar, literature, and conversation.",
    },
    {
        icon: Globe,
        title: "Social Studies",
        description: "Making history, geography, civics, and economics engaging and relevant.",
    },
    {
        icon: Laptop,
        title: "Computer Science",
        description: "From programming fundamentals (Python, Java, C++) to complex algorithms.",
    },
    {
        icon: Briefcase,
        title: "Economics",
        description: "Grasp the principles of micro and macroeconomics and their real-world applications.",
    },
    {
        icon: BarChart2,
        title: "Accountancy",
        description: "Build a strong foundation in financial and corporate accounting with expert tutors.",
    }
];

export default function ServicesSection() {
    const duplicatedSubjects = [...subjects, ...subjects];
  return (
    <section id="services" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services & Courses</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            We offer a wide range of tutoring services to cater to every student's needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-2 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="items-center text-center p-2 md:p-6">
                <div className="mb-2 rounded-full bg-primary/10 p-2 md:p-4">
                  <service.icon className="h-6 w-6 md:h-10 md:w-10 text-primary" />
                </div>
                <CardTitle className="text-base md:text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-xs md:text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-2 md:p-6 pt-0">
                <ul className="space-y-1 md:space-y-3 text-xs md:text-base">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>

        <div className="mt-20 w-full">
          <div className="space-y-4 text-center container mx-auto px-4 md:px-6">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subjects We Cover</h3>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  A glimpse into the wide range of subjects our expert tutors cover.
              </p>
          </div>
            <div
                className="relative mt-12 w-full overflow-hidden"
                style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
            >
                <div className="flex w-max animate-scroll [animation-duration:60s]">
                    {duplicatedSubjects.map((subject, index) => (
                    <Card key={index} className="w-[300px] shrink-0 mx-3 transform transition-transform hover:scale-105 hover:shadow-xl">
                        <CardHeader className="items-center text-center p-4">
                            <div className="mb-3 rounded-full bg-primary/10 p-3">
                                <subject.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{subject.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-sm text-center text-muted-foreground h-20">{subject.description}</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
