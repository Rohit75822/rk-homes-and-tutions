"use client";

import { useState, useEffect, useRef } from 'react';
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
  { href: '#classes', label: 'Classes' },
  { href: '#find-tutor', label: 'Find a Tutor' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [activePillStyle, setActivePillStyle] = useState({});
  const [hoverPillStyle, setHoverPillStyle] = useState({});

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 10);
        
        if (currentScrollY > lastScrollY && currentScrollY > 80) { // if scroll down hide the navbar
          setIsVisible(false);
          setIsMobileMenuOpen(false); // Close mobile menu on scroll
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
             const href = `#${entry.target.id}`;
             // Check if the link exists in our navlinks to avoid setting active link for other sections
             if (navLinks.some(link => link.href === href)) {
                setActiveLink(href);
             }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const elements = navLinks
        .map(link => document.querySelector(link.href))
        .filter(el => el) as Element[];

    elements.forEach((element) => {
        observer.observe(element);
    });

    return () => {
        elements.forEach((element) => {
            observer.unobserve(element);
        });
    };
  }, []);

  const updatePills = () => {
    if (!navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    
    // Active Pill
    const activeIndex = navLinks.findIndex(link => link.href === activeLink);
    const activeLinkEl = linkRefs.current[activeIndex];
    if (activeLinkEl) {
      const { left, width } = activeLinkEl.getBoundingClientRect();
      setActivePillStyle({
        width: `${width}px`,
        transform: `translateX(${left - navRect.left}px)`,
      });
    }

    // Hover Pill
    const hoverIndex = navLinks.findIndex(link => link.href === hoveredLink);
    const hoverLinkEl = linkRefs.current[hoverIndex];
    if (hoverLinkEl) {
      const { left, width } = hoverLinkEl.getBoundingClientRect();
      setHoverPillStyle({
        width: `${width}px`,
        transform: `translateX(${left - navRect.left}px)`,
        opacity: 1,
      });
    } else {
      setHoverPillStyle({ ...hoverPillStyle, opacity: 0 });
    }
  };

  useEffect(() => {
    updatePills();
    window.addEventListener('resize', updatePills);
    return () => window.removeEventListener('resize', updatePills);
  }, [activeLink, hoveredLink, isMobileMenuOpen]);


  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full text-white transition-all duration-300',
        !isVisible && '-translate-y-full',
        isScrolled ? 'bg-black/80 shadow-md backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src="https://raw.githubusercontent.com/Rohit75822/rk-homes/main/logo-i1RTvjfS.jpg"
              alt="Rk Home & Online tuitions Logo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <span className="text-xl font-bold">Rk Home & Online tuitions</span>
        </Link>

        <nav 
          ref={navRef}
          className="hidden items-center gap-2 md:flex relative rounded-full p-1 bg-black/30"
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div
            className="absolute top-1 left-0 h-[calc(100%-0.5rem)] rounded-full bg-white/10 transition-all duration-300 ease-in-out"
            style={hoverPillStyle}
          />
          <div
            className="absolute top-1 left-0 h-[calc(100%-0.5rem)] rounded-full bg-white/20 shadow-md ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 ease-in-out"
            style={activePillStyle}
          />
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={el => linkRefs.current[index] = el}
              onMouseEnter={() => setHoveredLink(link.href)}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                setActiveLink(link.href);
              }}
              className={cn(
                "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeLink === link.href ? "text-white" : "text-gray-300 hover:text-white"
              )}
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
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                      src="https://raw.githubusercontent.com/Rohit75822/rk-homes/main/logo-i1RTvjfS.jpg"
                      alt="Rk Home & Online tuitions Logo"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-xl font-bold">Rk Home & Online tuitions</span>
                </Link>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetElement = document.querySelector(link.href);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "rounded-md px-3 py-2 text-lg font-medium transition-colors",
                        activeLink === link.href ? 'bg-white/20 text-white' : 'text-gray-300 hover:bg-white/10'
                      )}
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
