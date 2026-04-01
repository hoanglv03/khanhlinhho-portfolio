import type { Project } from "../types/projects"

const LINKEDIN_URL = "https://www.linkedin.com/in/thi-khanh-linh-ho-b5154512b/"

export const PROJECTS: Project[] = [
  {
    id: "gaming-content-distribution",
    title: "Gaming Content Distribution Platform",
    period: {
      start: "03.2026",
    },
    link: LINKEDIN_URL,
    skills: [
      "Requirements Analysis",
      "FSD",
      "Workflow Design",
      "Figma",
      "Agile/Scrum",
      "UAT",
    ],
    description: `A centralized digital platform for product content management and submission workflows across multiple distribution channels.
- Multi-product management, version control, and structured submission processes
- Validation rules and business logic for data accuracy and platform compliance
- End-to-end workflow design: product setup, metadata management, and submission
- Agile delivery with sprint planning, backlog grooming, and cross-team collaboration
`,
    isExpanded: true,
  },
  {
    id: "saas-engineering-platform",
    title: "SaaS Engineering Platform",
    period: {
      start: "01.2026",
      end: "03.2026",
    },
    link: LINKEDIN_URL,
    skills: [
      "Requirements Analysis",
      "FSD",
      "Batch Processing",
      "PDF/Excel Reports",
      "UAT",
      "Stakeholder Management",
    ],
    description: `Transformed a legacy corrosion calculation tool into a scalable multi-user SaaS platform for Oil & Gas, CCS, and Hydrogen industries.
- Multi-user application with persistent session management
- Batch processing via CSV/XLS uploads and automated report generation (PDF/Excel)
- Defined input/output rules, validation logic, and multi-environment evaluation workflows
`,
  },
  {
    id: "airport-lounges-phase-2-1",
    title: "Airport Lounges Distribution System (Phase 2.1)",
    period: {
      start: "10.2025",
      end: "01.2026",
    },
    link: LINKEDIN_URL,
    skills: [
      "Workflow Design",
      "Voucher Management",
      "B2B Logic",
      "UAT",
      "Requirements Analysis",
    ],
    description: `Digital platform for end-to-end management of airport services including priority check-in, fast-track security, and meet-and-greet.
- End-to-end workflows: booking, validation, assignment, execution, and feedback
- Voucher/combo validation, cancellation & penalty rules with conditional deduction logic
- Credit limit validation logic for B2B agents during order placement
`,
  },
  {
    id: "airport-lounges-phase-2",
    title: "Airport Lounges Distribution System (Phase 2)",
    period: {
      start: "02.2025",
      end: "10.2025",
    },
    link: LINKEDIN_URL,
    skills: [
      "Requirements Gathering",
      "FRD",
      "Wireframing",
      "B2B/Agency Portal",
      "UAT",
      "Change Management",
    ],
    description: `Nationwide SH Lounge platform serving individual customers, corporate clients, and agencies with flexible pricing policies.
- B2B and Agency distribution channels; role-based access control and pricing policy management
- Dedicated B2B/Agency web portal and enhanced Client App (discount codes, account management)
- Workshops, UAT sessions, and scope/change request tracking
`,
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet",
    period: {
      start: "07.2024",
      end: "02.2025",
    },
    link: LINKEDIN_URL,
    skills: [
      "Requirements Analysis",
      "Stakeholder Management",
      "Blockchain",
      "NFT",
      "Workshop Facilitation",
    ],
    description: `Mobile app and web platform for managing tokens, coins, and NFTs across multiple blockchain protocols.
- Requirement clarification workshops with stakeholders
- Bridge between product development team, customers, and technical stakeholders
`,
  },
  {
    id: "resource-management",
    title: "Resource Management Website",
    period: {
      start: "08.2024",
      end: "02.2025",
    },
    link: LINKEDIN_URL,
    skills: [
      "SRS Documentation",
      "Wireframing",
      "Figma",
      "draw.io",
      "Requirements Analysis",
    ],
    description: `Streamlined internal resource management platform for team capacity and allocation tracking.
- Comprehensive Software Requirements Specifications (SRS)
- Wireframes and mock-ups using draw.io/Moqups and Figma; collaborated with UI/UX team
`,
  },
  {
    id: "bvms",
    title: "BVMS — Voyage Management System",
    period: {
      start: "12.2023",
      end: "02.2024",
    },
    link: LINKEDIN_URL,
    skills: [
      "Requirements Analysis",
      "SRS",
      "Test Cases",
      "Bug Tracking",
      "ReactJS",
      "C# .Net",
      "MS Azure",
    ],
    description: `Responsive web-app for the sea transportation industry (German client). Modules: Chartering, Operation, Marine Accounting.
- Requirements elicitation, SRS, and Test Case preparation
- Test execution, bug tracking, and result reporting to PM
`,
  },
]
