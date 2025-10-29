"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 10);
        
        if (window.scrollY > lastScrollY && window.scrollY > 80) { // if scroll down hide the navbar
          setIsVisible(false);
          setIsMobileMenuOpen(false); // Close mobile menu on scroll
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full text-white transition-all duration-300',
        !isVisible && '-translate-y-full',
        isScrolled && 'bg-black/80 shadow-md backdrop-blur-lg'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="https://raw.githubusercontent.com/Rohit75822/rk-homes/main/logo-i1RTvjfS.jpg"
            alt="Rk Home & Online tuitions Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Rk Home & Online tuitions</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-bold transition-colors hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <Button asChild className="hidden bg-black text-white hover:bg-gray-800 md:flex" variant="outline">
            <Link href="#contact">Book Free Demo</Link>
          </Button>
           <Button asChild variant="secondary" className="hidden text-black md:flex">
            <Link href="#contact">Join As Tutor</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-0 bg-black/80 text-white backdrop-blur-lg sm:w-[400px]">
              <div className="flex h-full flex-col gap-8 p-6">
                <Link href="#home" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="https://raw.githubusercontent.com/Rohit75822/rk-homes/main/logo-i1RTvjfS.jpg"
                    alt="Rk Home & Online tuitions Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="text-xl font-bold">Rk Home & Online tuitions</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-gray-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto flex flex-col gap-4">
                   <Button asChild size="lg" variant="outline" className="bg-black text-white hover:bg-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="#contact">Book Free Demo</Link>
                  </Button>
                   <Button asChild variant="secondary" size="lg" className="text-black" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="#contact">Join As Tutor</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
