import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import TutoringForm from "../tutoring-form";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <TutoringForm
            formType="demo"
            title="Book Your Free Demo"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 text-primary"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z"/><path d="M12 12 8 8"/><path d="m12 12 4 4"/></svg>}
            buttonText="Book Free Demo Now"
            buttonIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>}
            theme="primary"
          />
          <TutoringForm
            formType="register"
            title="Find Your Perfect Tutor"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0_0_24_24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 text-primary"><path d="M13.4 2H6.6l1.7 1.7L4 8l4 4.3.3-3.3 1.7-1.7 1.7 1.7-.3 3.3 4-4.3-4.3-4.3L13.4 2zM3.5 8.8 8 13.2l4.5-4.5"/><path d="m12 15 5 5m-5-5-5 5"/></svg>}
            buttonText="Find My Perfect Tutor"
            buttonIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            theme="accent"
          />
        </div>

        <Card className="mt-16">
          <CardContent className="grid grid-cols-1 gap-6 p-6 text-center md:grid-cols-3 md:text-left">
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">+91 98765 43210</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:info@rktutors.com" className="text-muted-foreground hover:text-primary">info@rktutors.com</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">Hyderabad, Telangana</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
