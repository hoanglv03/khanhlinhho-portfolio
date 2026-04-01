import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Thị Khánh Linh",
  lastName: "Hồ",
  displayName: "Hồ Thị Khánh Linh",
  username: "khanhlinhho",
  gender: "female",
  pronouns: "she/her",
  bio: "Business Analyst with expertise in requirement analysis, stakeholder management, and product development.",
  flipSentences: [
    "Business Analyst",
    "Requirements Engineer",
    "Product Development",
    "Agile Practitioner",
  ],
  address: "Ha Noi, Viet Nam",
  email: "bHluaC5ob2toYW5oQGdtYWlsLmNvbQ==", // base64 encoded: lynh.hokhanh@gmail.com
  website: "https://khanhlinhho-portfolio.vercel.app",
  jobTitle: "Business Analyst",
  jobs: [
    {
      title: "Business Analyst",
      company: "Newwave Solutions",
      website: "https://newwave.vn",
      experienceId: "newwave",
    },
  ],
  about: `
- **Business Analyst** with 3+ years of experience at Newwave Solutions and NTQ Solution JSC, specializing in **requirement analysis**, stakeholder management, and product development support.
- Experienced in **FSD/SRS documentation, wireframing**, and **UAT coordination** across enterprise software, SaaS platforms, airport management systems, and blockchain/crypto wallet applications.
- Proficient in **Agile/Scrum** methodologies — actively participating in sprint planning, backlog grooming, and daily stand-ups.
- Acts as the bridge between business stakeholders and technical teams, translating complex business needs into clear, actionable system requirements.
- Skilled in **Figma, draw.io/Moqups** for wireframing; **Jira & Confluence** for project tracking and documentation.
`,
  avatar: "/avatar.jpeg",
  ogImage: "/avatar.jpeg",
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: [
    "khanhlinhho",
    "khanh linh",
    "ho thi khanh linh",
    "hồ thị khánh linh",
    "business analyst",
    "ba",
    "newwave solutions",
    "requirements analysis",
  ],
  dateCreated: "2026-04-01",
}
