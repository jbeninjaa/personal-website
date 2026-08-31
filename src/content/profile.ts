export type Profile = {
  name: string;
  tagline: string;
  bio: string;
  skills: string[];
  currentRole: {
    title: string;
    organization: string;
    dates: string;
    description?: string;
  };
  contacts: {
    email: string;
    linkedIn: string;
    gitHub: string;
  };
};

export const profile: Profile = {
  name: "Jayven Lupera",
  tagline: "Software engineer focused on secure, maintainable web systems.",
  bio: "Jayven Lupera is a software engineer focused on building secure, maintainable web applications. His background includes Python, JavaScript, Frappe, ERPNext, Django, and Flask, with hands-on work in access control, refactoring, code review, and developer workflows.",
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "C#",
    "PHP",
    "Frappe Framework",
    "ERPNext",
    "Frappe HR",
    "Django",
    "Flask",
    "Docker",
    "Git",
    "AWS",
    "Postman",
    "SQL Server",
    "SQL",
    "Code review",
    "System refactoring",
    "Secure access design",
  ],
  currentRole: {
    title: "TDP Software Engineer",
    organization: "Optum",
    dates: "July 2026 - Present",
  },
  contacts: {
    email: "mailto:reachjayven@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jayven-lupera",
    gitHub: "https://github.com/jbeninjaa",
  },
};