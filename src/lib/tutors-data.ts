
export type Tutor = {
  id: string;
  name: string;
  avatar: string;
  experience: string;
  rating: number;
  specialties: string[];
  classes: string[];
  modes: ('Online' | 'Home')[];
  description: string;
};

export const tutorsData: Tutor[] = [
  {
    id: "tutor1",
    name: "Ms. Anjali Rao",
    experience: "8+ years",
    rating: 4.8,
    specialties: ["Mathematics", "Science"],
    classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"],
    modes: ["Home", "Online"],
    description: "Expert in building strong foundational skills in Math and Science for young learners.",
    avatar: "https://picsum.photos/seed/tutor1/80/80"
  },
  {
    id: "tutor2",
    name: "Mr. Vikram Singh",
    experience: "10+ years",
    rating: 4.9,
    specialties: ["English", "Social Studies"],
    classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    modes: ["Home", "Online"],
    description: "Passionate about making languages and humanities engaging and understandable.",
    avatar: "https://picsum.photos/seed/tutor2/80/80"
  },
  {
    id: "tutor3",
    name: "Ms. Sunita Sharma",
    experience: "6+ years",
    rating: 4.7,
    specialties: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Hindi", "Social Studies", "Computer Science"],
    classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
    modes: ["Home"],
    description: "Dedicated to providing holistic education for primary and middle school students.",
    avatar: "https://picsum.photos/seed/tutor3/80/80"
  },
  {
    id: "tutor4",
    name: "Mr. Rajesh Gupta",
    experience: "15+ years",
    rating: 5.0,
    specialties: ["Physics", "Mathematics"],
    classes: ["Class 11", "Class 12", "B.Tech"],
    modes: ["Online"],
    description: "Specializes in JEE Mains preparation with a focus on problem-solving techniques in Physics.",
    avatar: "https://picsum.photos/seed/tutor4/80/80"
  },
  {
    id: "tutor5",
    name: "Ms. Priya Desai",
    experience: "12+ years",
    rating: 4.9,
    specialties: ["Chemistry", "Biology"],
    classes: ["Class 11", "Class 12"],
    modes: ["Home", "Online"],
    description: "NEET expert with a proven track record of helping students excel in medical entrance exams.",
    avatar: "https://picsum.photos/seed/tutor5/80/80"
  },
  {
    id: "tutor6",
    name: "Mr. Anand Kumar",
    experience: "14+ years",
    rating: 4.8,
    specialties: ["Accountancy", "Economics", "Business Studies"],
    classes: ["Class 11", "Class 12", "Degree"],
    modes: ["Online"],
    description: "Experienced commerce tutor, making complex financial concepts easy to understand.",
    avatar: "https://picsum.photos/seed/tutor6/80/80"
  },
  {
    id: "tutor7",
    name: "Dr. Karthik Iyer",
    experience: "20+ years",
    rating: 5.0,
    specialties: ["Data Structures", "Algorithms", "DBMS", "C, C++, Java, Python"],
    classes: ["B.Tech"],
    modes: ["Online"],
    description: "PhD in Computer Science with a passion for teaching advanced programming and database concepts.",
    avatar: "https://picsum.photos/seed/tutor7/80/80"
  },
  {
    id: "tutor8",
    name: "Mr. Sameer Reddy",
    experience: "18+ years",
    rating: 4.9,
    specialties: ["Mechanical, Civil, ECE Subjects"],
    classes: ["B.Tech"],
    modes: ["Home"],
    description: "A seasoned engineer providing practical and theoretical knowledge for core engineering subjects.",
    avatar: "https://picsum.photos/seed/tutor8/80/80"
  },
  {
    id: "tutor9",
    name: "Ms. Divya Nair",
    experience: "16+ years",
    rating: 4.8,
    specialties: ["Engineering Mathematics", "Electronics & Communication"],
    classes: ["B.Tech"],
    modes: ["Home", "Online"],
    description: "Simplifies complex electronics and communication topics for B.Tech students.",
    avatar: "https://picsum.photos/seed/tutor9/80/80"
  },
  {
    id: "tutor10",
    name: "Prof. Meera John",
    experience: "25+ years",
    rating: 5.0,
    specialties: ["Corporate Accounting", "Financial Management", "Business Law"],
    classes: ["Degree"],
    modes: ["Online"],
    description: "University professor with extensive experience in Commerce and Finance for degree students.",
    avatar: "https://picsum.photos/seed/tutor10/80/80"
  },
  {
    id: "tutor11",
    name: "Mr. Naveen Patel",
    experience: "12+ years",
    rating: 4.7,
    specialties: ["Calculus & Analysis", "Physics"],
    classes: ["Degree", "Class 11", "Class 12"],
    modes: ["Home", "Online"],
    description: "Dedicated to helping B.Sc students master advanced Physics and Mathematics.",
    avatar: "https://picsum.photos/seed/tutor11/80/80"
  },
  {
    id: "tutor12",
    name: "Ms. Aishwarya Menon",
    experience: "9+ years",
    rating: 4.8,
    specialties: ["Business Administration", "Statistics"],
    classes: ["Degree"],
    modes: ["Online"],
    description: "Guides BBA students through the nuances of business administration and statistical analysis.",
    avatar: "https://picsum.photos/seed/tutor12/80/80"
  },
  {
    id: "tutor13",
    name: "Mr. Sanjay Verma",
    experience: "7+ years",
    rating: 4.6,
    specialties: ["Social Studies", "History"],
    classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"],
    modes: ["Online"],
    description: "Makes history come alive with engaging stories and a focus on critical thinking.",
    avatar: "https://picsum.photos/seed/tutor13/80/80"
  },
  {
    id: "tutor14",
    name: "Ms. Fatima Khan",
    experience: "5+ years",
    rating: 4.9,
    specialties: ["Biology", "Environmental Science"],
    classes: ["Class 9", "Class 10", "Class 11", "Class 12"],
    modes: ["Home", "Online"],
    description: "Inspires a love for life sciences with hands-on examples and exam-focused preparation.",
    avatar: "https://picsum.photos/seed/tutor14/80/80"
  },
  {
    id: "tutor15",
    name: "Mr. David Lee",
    experience: "11+ years",
    rating: 4.8,
    specialties: ["Computer Science", "C, C++, Java, Python"],
    classes: ["Class 11", "Class 12", "B.Tech"],
    modes: ["Online"],
    description: "Software developer turned educator, focused on practical coding skills and project-based learning.",
    avatar: "https://picsum.photos/seed/tutor15/80/80"
  },
  {
    id: "tutor16",
    name: "Mrs. Lakshmi Iyer",
    experience: "22+ years",
    rating: 5.0,
    specialties: ["Hindi", "Sanskrit"],
    classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"],
    modes: ["Home"],
    description: "A veteran language teacher dedicated to preserving and teaching Indian languages with patience and expertise.",
    avatar: "https://picsum.photos/seed/tutor16/80/80"
  }
];

export const filterOptions = {
  classes: ["All", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "B.Tech", "Degree"],
  subjects: ["All", "Mathematics", "Science", "Physics", "Chemistry", "Biology", "English", "Hindi", "Sanskrit", "Social Studies", "History", "Computer Science", "Environmental Science", "Economics", "Accountancy", "Data Structures", "Algorithms", "DBMS", "C, C++, Java, Python", "Mechanical, Civil, ECE Subjects", "Engineering Mathematics", "Electronics & Communication", "Corporate Accounting", "Financial Management", "Business Law", "Calculus & Analysis", "Business Administration", "Statistics"],
  modes: ["All", "Home", "Online"]
};
