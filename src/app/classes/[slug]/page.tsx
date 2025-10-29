"use client";

import { notFound, useRouter } from "next/navigation";
import Image from 'next/image';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { classesData } from "@/lib/classes-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star, User, BookOpen, ArrowLeft } from "lucide-react";
import ContactSection from "@/components/sections/contact";

export default function ClassDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const classInfo = classesData.find((c) => c.slug === params.slug);

  if (!classInfo) {
    notFound();
  }

  const { title, fullDescription, subjects, tutors, icon: Icon } = classInfo;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Button variant="outline" onClick={() => router.back()} className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Classes
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    {title}
                  </h1>
                </div>
                <p className="text-lg text-muted-foreground">
                  {fullDescription}
                </p>
              </div>
              <div className="flex justify-center">
                 <Image src="https://picsum.photos/seed/classpage/400/400" alt={title} width={300} height={300} className="rounded-xl shadow-lg" data-ai-hint="education learning" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl">
              Subjects We Cover
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {subjects.map((subject) => (
                <Badge key={subject} variant="outline" className="px-6 py-3 text-lg border-2 rounded-full transition-all hover:bg-primary/10 hover:border-primary">
                  <BookOpen className="mr-2 h-5 w-5" />
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl">
              Our Expert Tutors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutors.map((tutor, index) => (
                <Card key={index} className="transform transition-transform hover:scale-105 hover:shadow-xl text-center">
                  <CardHeader className="items-center">
                    <Image src={tutor.avatar} alt={tutor.name} width={100} height={100} className="rounded-full border-4 border-primary/20" />
                    <CardTitle className="pt-4 text-2xl">{tutor.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-center items-center gap-2 text-muted-foreground">
                       <User className="h-5 w-5" /> <span>{tutor.experience} experience</span>
                    </div>
                     <div className="flex justify-center items-center gap-2 text-muted-foreground">
                       <Star className="h-5 w-5" /> <span>Specialty: {tutor.specialty}</span>
                    </div>
                     <Button asChild className="mt-4 w-full">
                       <Link href="#contact">
                        Request This Tutor
                       </Link>
                     </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
