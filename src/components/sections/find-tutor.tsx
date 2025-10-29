
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Star, Book, User, Tv, Home } from 'lucide-react';
import { tutorsData, filterOptions, type Tutor } from '@/lib/tutors-data';
import Link from 'next/link';

function TutorCard({ tutor }: { tutor: Tutor }) {
  const rating = tutor.rating ?? 0;
  return (
    <Card className="transform transition-transform hover:scale-105 hover:shadow-xl">
      <CardHeader className="flex flex-row items-start gap-4">
        <Image src={tutor.avatar} alt={tutor.name} width={80} height={80} className="rounded-full border-4 border-primary/20" />
        <div className="w-full">
          <CardTitle className="text-2xl">{tutor.name}</CardTitle>
          <div className="flex items-center gap-2 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-muted-foreground font-semibold">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <User className="h-5 w-5" /> <span>{tutor.experience} experience</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{tutor.description}</p>
        <div className="flex flex-wrap gap-2">
            {tutor.specialties.slice(0, 3).map(specialty => (
                <div key={specialty} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    <Book className="h-4 w-4" /> {specialty}
                </div>
            ))}
        </div>
         <div className="flex flex-wrap gap-2">
            {tutor.modes.map(mode => (
                <div key={mode} className="flex items-center gap-2 text-sm font-semibold text-primary">
                    {mode === 'Online' ? <Tv className="h-4 w-4" /> : <Home className="h-4 w-4" />}
                    <span>{mode} Tutoring Available</span>
                </div>
            ))}
        </div>
        <Button asChild className="mt-4 w-full">
            <Link href="#contact">Request This Tutor</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function FindTutorSection() {
  const [filters, setFilters] = useState({
    class: 'All',
    subject: 'All',
    mode: 'All',
  });
  
  const [filteredTutors, setFilteredTutors] = useState<Tutor[]>(tutorsData);

  useEffect(() => {
    let result = tutorsData;

    if (filters.class !== 'All') {
      result = result.filter(tutor => tutor.classes.includes(filters.class));
    }
    if (filters.subject !== 'All') {
      result = result.filter(tutor => tutor.specialties.includes(filters.subject));
    }
    if (filters.mode !== 'All') {
      result = result.filter(tutor => tutor.modes.includes(filters.mode as 'Home' | 'Online'));
    }

    setFilteredTutors(result);

  }, [filters]);

  const availableSubjects = useMemo(() => {
    if (filters.class === 'All') {
      return filterOptions.subjects;
    }
    const subjects = new Set<string>(['All']);
    tutorsData.forEach(tutor => {
      if (tutor.classes.includes(filters.class)) {
        tutor.specialties.forEach(sub => subjects.add(sub));
      }
    });
    return Array.from(subjects).sort();
  }, [filters.class]);

  const handleFilterChange = (filterType: 'class' | 'subject' | 'mode') => (value: string) => {
    setFilters(prev => ({...prev, [filterType]: value}));
  };

  return (
    <section id="find-tutor" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find Your Perfect Tutor
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Filter our expert tutors to find the perfect match for your needs.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Filter Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Filter Tutors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                    <label className="text-sm font-medium">Class / Course</label>
                    <Select onValueChange={handleFilterChange('class')} value={filters.class}>
                        <SelectTrigger><SelectValue placeholder="Select Class" /></SelectTrigger>
                        <SelectContent>
                        {filterOptions.classes.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <label className="text-sm font-medium">Subject</label>
                    <Select onValueChange={handleFilterChange('subject')} value={filters.subject}>
                        <SelectTrigger><SelectValue placeholder="Select Subject" /></SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                            <div className="overflow-y-auto">
                                {availableSubjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </div>
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <label className="text-sm font-medium">Mode</label>
                    <Select onValueChange={handleFilterChange('mode')} value={filters.mode}>
                        <SelectTrigger><SelectValue placeholder="Select Mode" /></SelectTrigger>
                        <SelectContent>
                        {filterOptions.modes.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tutors List */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-8">
              {filteredTutors.length > 0 ? (
                filteredTutors.map(tutor => <TutorCard key={tutor.id} tutor={tutor} />)
              ) : (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold">No Tutors Found</h3>
                    <p className="text-muted-foreground mt-2">Try adjusting your filters to find more tutors.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
