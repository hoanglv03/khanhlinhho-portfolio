import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "newwave",
    companyName: "Newwave Solutions",
    companyWebsite: "https://newwave.vn",
    positions: [
      {
        id: "1",
        title: "Business Analyst",
        employmentPeriod: {
          start: "07.2024",
        },
        employmentType: "Full-time",
        icon: "business",
        isExpanded: true,
        description: `Worked across 6 projects spanning enterprise software, SaaS, airport services, and blockchain domains.

**Gaming Content Distribution Platform** *(Mar 2026 – Present)*
Centralized platform for product content management and submission workflows across multiple distribution channels.
- Elicited, analyzed, and documented business and system requirements from stakeholders.
- Designed end-to-end workflows for product setup, metadata management, and submission processes.
- Defined validation rules and business logic to ensure data accuracy and platform compliance.
- Collaborated with UI/UX designers on wireframes and with dev/QA teams during implementation.
- Participated in Agile ceremonies: sprint planning, backlog grooming, and daily stand-ups.

**SaaS Engineering Platform** *(Jan 2026 – Mar 2026)*
Transformed a legacy corrosion calculation tool into a scalable SaaS platform for Oil & Gas, CCS, and Hydrogen industries.
- Translated complex engineering concepts into clear functional specifications (FSD).
- Defined input/output rules, validation logic, evaluation workflows, and batch processing logic.
- Supported UAT and coordinated feedback between business, engineering, and design teams.

**Airport Lounges Distribution System — Phase 2.1** *(Oct 2025 – Jan 2026)*
End-to-end airport service management covering booking, validation, operations, and customer experience.
- Defined workflows for booking, assignment, execution, voucher/combo validation, and penalty rules.
- Established credit limit validation logic for B2B agents and coordinated UAT.

**Airport Lounges Distribution System — Phase 2** *(Feb 2025 – Oct 2025)*
Nationwide SH Lounge platform supporting individual customers, corporate clients, and agencies.
- Gathered requirements; prepared Q&A lists, FRD, and wireframes; led workshops and UAT sessions.
- Built B2B/Agency web portal and enhanced Client App with discount codes and account features.

**Crypto Wallet** *(Jul 2024 – Feb 2025)*
Mobile app and web platform for managing tokens, coins, and NFTs.
- Facilitated requirement clarification workshops with stakeholders.
- Acted as bridge among product development team, customers, and stakeholders.

**Resource Management Website** *(Aug 2024 – Feb 2025)*
Streamlined internal resource management platform.
- Documented comprehensive SRS; created wireframes using draw.io/Moqups and Figma.`,
        skills: [
          "Requirements Analysis",
          "Requirements Gathering",
          "FSD/SRS",
          "Wireframing",
          "Figma",
          "draw.io",
          "Jira",
          "Confluence",
          "Agile/Scrum",
          "UAT",
          "Stakeholder Management",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "ntq",
    companyName: "NTQ Solution JSC",
    companyWebsite: "https://ntq-solution.com.vn",
    positions: [
      {
        id: "1",
        title: "Business Analyst",
        employmentPeriod: {
          start: "02.2022",
          end: "06.2024",
        },
        employmentType: "Full-time",
        icon: "business",
        description: `Worked across 3 projects for German and South Korean clients.

**BVMS — Voyage Management System** *(Dec 2023 – Feb 2024)*
Responsive web-app for sea transportation (German client, 10 members). Modules: Chartering, Operation, Marine Accounting.
- Managed requirements analysis, SRS, Test Cases, and Q&A preparation.
- Executed tests, reported results to PM, tracked and logged bugs.

**Autocare TX 2.0** *(Feb 2023 – Jul 2023)*
Web platform for developing ML/DL models for business problems (South Korean client, 10 members).
- Analyzed complex ML/DL requirements; prepared comprehensive SRS and Test Cases.
- Collaborated with Korean comtor to clarify Q&A; achievement: CSS 5.0 & signed new contract.

**Stratio** *(Jan 2023 – Feb 2023)*
Website main page layout change for Korean client (4 members).
- Conducted research, managed requirements, prepared SRS and Test Cases.`,
        skills: [
          "Requirements Analysis",
          "SRS Documentation",
          "Test Cases",
          "Bug Tracking",
          "ReactJS",
          "Agile",
          "Communication",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "4",
        title: "University of Northampton",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        icon: "education",
        description:
          "Bachelor's degree, Marketing/Marketing Management, General.",
        skills: ["Marketing", "Marketing Management"],
      },
      {
        id: "2",
        title: "Foreign Trade University",
        employmentPeriod: {
          start: "2015",
          end: "2016",
        },
        icon: "education",
        description: "Bachelor's degree, Finance, General.",
        skills: ["Finance"],
      },
      {
        id: "1",
        title: "Huynh Thuc Khang High School",
        employmentPeriod: {
          start: "2012",
          end: "2015",
        },
        icon: "education",
        description: "High School Diploma.",
        skills: [],
      },
    ],
  },
]
