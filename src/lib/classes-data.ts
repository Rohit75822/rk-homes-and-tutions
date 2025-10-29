import { School, Book, Laptop, GraduationCap, User } from "lucide-react";

export const classesData = [
  {
    slug: "classes-1-10",
    icon: School,
    title: "Classes 1-10",
    shortDescription: "Strong foundation for young learners across all subjects.",
    fullDescription: "Our tutoring for classes 1 through 10 focuses on building a strong academic foundation. We provide personalized attention to help students grasp core concepts in all subjects, ensuring they develop a love for learning and are well-prepared for higher classes.",
    subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "English", "Hindi", "Telugu", "Computer Science"],
    tutors: [
      { name: "Ms. Anjali Rao", experience: "8+ years", specialty: "Mathematics & Science", avatar: "https://picsum.photos/seed/tutor1/80/80" },
      { name: "Mr. Vikram Singh", experience: "10+ years", specialty: "English & Social Studies", avatar: "https://picsum.photos/seed/tutor2/80/80" },
      { name: "Ms. Sunita Sharma", experience: "6+ years", specialty: "Primary All Subjects", avatar: "https://picsum.photos/seed/tutor3/80/80" },
    ]
  },
  {
    slug: "classes-11-12",
    icon: Book,
    title: "Classes 11-12",
    shortDescription: "Specialized coaching for Science, Commerce, and Arts streams.",
    fullDescription: "We offer specialized coaching for students in classes 11 and 12, covering Science (MPC, BiPC), Commerce (MEC, CEC), and Arts streams. Our expert tutors help students excel in their board exams and prepare for competitive entrance tests.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics", "Business Studies", "Political Science", "History"],
    tutors: [
      { name: "Mr. Rajesh Gupta", experience: "15+ years", specialty: "Physics & JEE Mains", avatar: "https://picsum.photos/seed/tutor4/80/80" },
      { name: "Ms. Priya Desai", experience: "12+ years", specialty: "Chemistry & NEET", avatar: "https://picsum.photos/seed/tutor5/80/80" },
      { name: "Mr. Anand Kumar", experience: "14+ years", specialty: "Accountancy & Commerce", avatar: "https://picsum.photos/seed/tutor6/80/80" },
    ]
  },
  {
    slug: "b-tech",
    icon: Laptop,
    title: "B.Tech",
    shortDescription: "Expert guidance for all engineering branches and subjects.",
    fullDescription: "Our B.Tech tutoring program provides expert guidance for all branches of engineering. Whether you need help with core subjects, programming languages, or preparing for semester exams, our experienced tutors are here to help you succeed.",
    subjects: ["Engineering Mathematics", "Data Structures", "Algorithms", "DBMS", "Operating Systems", "C, C++, Java, Python", "Mechanical, Civil, ECE Subjects"],
    tutors: [
      { name: "Dr. Karthik Iyer", experience: "20+ years", specialty: "Computer Science", avatar: "https://picsum.photos/seed/tutor7/80/80" },
      { name: "Mr. Sameer Reddy", experience: "18+ years", specialty: "Mechanical Engineering", avatar: "https://picsum.photos/seed/tutor8/80/80" },
      { name: "Ms. Divya Nair", experience: "16+ years", specialty: "Electronics & Communication", avatar: "https://picsum.photos/seed/tutor9/80/80" },
    ]
  },
  {
    slug: "degree",
    icon: GraduationCap,
    title: "Degree",
    shortDescription: "Comprehensive support for various undergraduate courses.",
    fullDescription: "We provide comprehensive support for various undergraduate degree courses like B.Sc, B.Com, and BBA. Our tutors help students understand complex topics, prepare for exams, and achieve academic excellence in their chosen field.",
    subjects: ["Calculus & Analysis", "Corporate Accounting", "Financial Management", "Organic Chemistry", "Business Law", "Statistics"],
    tutors: [
      { name: "Prof. Meera John", experience: "25+ years", specialty: "Commerce & Finance", avatar: "https://picsum.photos/seed/tutor10/80/80" },
      { name: "Mr. Naveen Patel", experience: "12+ years", specialty: "B.Sc Physics & Maths", avatar: "https://picsum.photos/seed/tutor11/80/80" },
      { name: "Ms. Aishwarya Menon", experience: "9+ years", specialty: "Business Administration", avatar: "https://picsum.photos/seed/tutor12/80/80" },
    ]
  },
];
