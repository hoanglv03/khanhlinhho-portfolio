import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "newwave",
    companyName: "Newwave Solutions",
    companyWebsite: "https://newwave.vn",
    positions: [
      {
        id: "2",
        title: "Mobile Technical Leader",
        employmentPeriod: {
          start: "10.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Led mobile team on two self-custody multi-chain crypto wallet projects (Flutter), supporting Bitcoin, EVM, XRP, TRON, BSC, TON, Cardano and Polkadot.
- Architected clean codebase with Repository pattern, Riverpod state management and code generation.
- Set up GitLab CI/CD pipelines for iOS & Android — automated builds (APK/AAB/IPA), unit tests, code quality checks, Firebase App Distribution and TestFlight deployment.
- Integrated Sentry crash reporting (with PII filtering) and AppsFlyer install attribution.
- Implemented HD Wallet (BIP39/BIP44) key derivation, multi-chain transactions, NFT management, staking (Cardano ADA), and ChangeNow cross-chain swap.`,
        skills: [
          "Flutter",
          "Dart",
          "Riverpod",
          "BLoC",
          "Go Router",
          "Auto Route",
          "Retrofit",
          "Dio",
          "web3dart",
          "bitcoin_base",
          "ton_dart",
          "xrpl_dart",
          "BIP39/BIP44",
          "Cardano",
          "Firebase",
          "Sentry",
          "AppsFlyer",
          "GitLab CI/CD",
        ],
        isExpanded: true,
      },
      {
        id: "1",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "09.2023",
          end: "10.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Worked across 3 different projects spanning home services, crypto wallet and geospatial mapping.

**Home Services App** *(React Native — Sep 2023 → Aug 2024)*
Built a booking platform for home services (painting, moving, repairs) integrating customer & provider flows. Developed messaging, booking, service configuration and job status tracking features with Stripe payments via Laravel backend.

**Crypto Wallet** *(React Native — Aug 2024 → Mar 2025)*
Developed a crypto wallet supporting Bitcoin, TON and EVM chains — coin/token transfers, NFT transfers and token claiming. Integrated EVM transactions via Web3.js & Moralis, and built smooth UI animations with Reanimated.

**MapBox Geospatial App** *(React Native — Apr 2025 → Jul 2025)*
Built a land parcel management app for field engineers and GIS analysts. Developed data layers (GB Land Parcels, Title Deed), geo-tagged photo upload (online/offline with HEIC conversion), PDF document management, offline annotation (Notes, Next Steps, Contact Details via Realm), geospatial measurement tools using Turf.js, and GPS tracking.`,
        skills: [
          "React Native",
          "TypeScript",
          "JavaScript",
          "Redux Toolkit",
          "Redux-Saga",
          "Reanimated",
          "React Navigation",
          "Web3.js",
          "Moralis",
          "TON SDK",
          "HD Wallet",
          "Mapbox GL",
          "Realm",
          "Turf.js",
          "Firebase",
          "Axios",
          "Stripe",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
]
