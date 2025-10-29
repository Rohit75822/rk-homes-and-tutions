import Link from 'next/link';
import { BookHeart, Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '../ui/separator';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="#home" className="mb-4 inline-flex items-center gap-2">
              <BookHeart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">RK Home & Online Tuitions</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              by RK Home & Online Tutors (Rooting Knowledge)
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm text-muted-foreground hover:underline">About Us</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:underline">Our Services</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:underline">Find Tutors</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm text-muted-foreground hover:underline">Home Tutoring</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:underline">Online Classes</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:underline">Exam Preparation</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:underline">Group Classes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground"><Phone size={16} /> +91 98765 43210</li>
              <li className="flex items-center gap-2 text-muted-foreground"><Mail size={16} /> info@rktutors.com</li>
              <li className="flex items-center gap-2 text-muted-foreground"><MapPin size={16} /> Hyderabad, Telangana</li>
              <li className="flex items-center gap-2 text-muted-foreground">24/7 Support</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-xs text-muted-foreground">
          <p>© 2024 RK Home & Online Tutors. All rights reserved.</p>
          <p className="mt-1">Free Registration | Service Within 48 Hours | Trusted by Parents Across Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
