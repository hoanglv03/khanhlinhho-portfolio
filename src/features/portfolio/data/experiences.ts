import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "project-c",
    companyName: "Crypto Wallet App (Flutter — Project C)",
    positions: [
      {
        id: "1",
        title: "Mobile Tech Lead",
        employmentPeriod: {
          start: "10.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- A self-custody multi-chain crypto wallet for iOS and Android, supporting Bitcoin, Ethereum (EVM), XRP, TRON, BSC, and TON — enabling users to send, receive, purchase tickets with crypto, and swap tokens.
- Developed multi-chain wallet features (send, receive, swap, transaction history) for Bitcoin, Ethereum, XRP, Tron, and TON.
- Implemented GitLab CI/CD pipelines for both iOS and Android — covering code quality checks, unit tests, dependency version verification, automated builds (APK/AAB/IPA), and deployment to Firebase App Distribution (dev) and Google Play Console / TestFlight (production), with Slack/webhook notifications.
- Integrated analytics and monitoring stack: Sentry (crash reporting with PII filtering), AppsFlyer (install attribution).
- Maintained clean architecture with Repository pattern, Riverpod state management, and code generation.
- Collaborated with backend developers on REST API integration via Retrofit/Dio and with BA to deliver technical solutions for complex blockchain features.`,
        skills: [
          "Flutter",
          "Dart",
          "Riverpod",
          "Hooks Riverpod",
          "Flutter BLoC",
          "Freezed",
          "Go Router",
          "Retrofit",
          "Dio",
          "web3dart",
          "blockchain_utils",
          "bitcoin_base",
          "bip39_mnemonic",
          "on_chain",
          "Firebase Analytics",
          "Firebase Messaging",
          "Sentry",
          "AppsFlyer",
          "GitLab CI/CD",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "project-b",
    companyName: "Crypto Wallet App (Flutter — Project B)",
    positions: [
      {
        id: "1",
        title: "Mobile Technical Leader",
        employmentPeriod: {
          start: "08.2025",
          end: "10.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- A multi-chain crypto wallet supporting EVM, Bitcoin, TON, XRP, Tron, Cardano (ADA), and Polkadot — with wallet creation/restoration, token/coin transfers, NFT management, token swapping, staking, and Cardano governance participation.
- Developed multi-chain transaction features (send/receive coin & token) across EVM, TON, XRP, Tron, and Cardano using native blockchain SDKs and HD Wallet (BIP39/BIP44) key derivation.
- Implemented staking module supporting token staking, unstaking, reward claiming, and staking history across multiple protocols including ADA (Cardano).
- Built ChangeNow cross-chain swap integration including swap flow UI, rate estimation, transaction status tracking, swap history, and refund/cancel handling via ChangeNow API.
- Maintained clean architecture with Repository pattern, Riverpod state management, and code generation.
- Collaborated with backend developers on REST API integration via Retrofit/Dio and with BA to deliver technical solutions for complex blockchain features.`,
        skills: [
          "Flutter",
          "Dart",
          "Riverpod",
          "Auto Route",
          "GetIt",
          "Injectable",
          "Retrofit",
          "Dio",
          "Hive",
          "Flutter Secure Storage",
          "Firebase",
          "web3dart",
          "ton_dart",
          "bitcoin_base",
          "xrpl_dart",
          "polkadart",
          "on_chain",
          "blockchain_utils",
          "BIP39/BIP44",
          "Cardano",
          "AppsFlyer",
          "IronSource",
          "Google Mobile Ads",
        ],
      },
    ],
  },
  {
    id: "mapbox-app",
    companyName: "MapBox Geospatial App",
    positions: [
      {
        id: "1",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "04.2025",
          end: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- A professional geospatial app for land parcel management, infrastructure assessment, and data visualization — designed for field engineers and GIS analysts in energy infrastructure planning.
- Developed new data layers including GB Land Parcels and Extracted Title Deed Data Layer, integrating geospatial data rendering on Mapbox GL maps.
- Built a Photo Layer feature enabling geo-tagged photos to be visualized directly on the map as a dedicated data layer.
- Implemented geo-tagged photo upload (online and offline) with HEIC conversion support and local Realm storage for offline queuing and sync.
- Integrated PDF document upload feature supporting both online and offline modes, with local persistence and background synchronization.
- Built bulk download functionality for Extracted Title Deed documents with async file operations via React Native FS.
- Developed offline-capable land parcel annotation features including Notes, Next Steps, and Contact Details with local Realm storage and sync.
- Implemented geospatial measurement tools (distance, area) for offline field use using Turf.js and Mapbox GL draw interactions.
- Built GPS tracking features for both online and offline modes with real-time map visualization.`,
        skills: [
          "React Native",
          "TypeScript",
          "Redux Toolkit",
          "redux-persist",
          "Realm",
          "Mapbox GL",
          "Axios",
          "React Navigation",
          "Formik",
          "Yup",
          "Turf.js",
          "React Native FS",
          "Offline Sync",
        ],
      },
    ],
  },
  {
    id: "project-a",
    companyName: "Crypto Wallet App (React Native — Project A)",
    positions: [
      {
        id: "1",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "08.2024",
          end: "03.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- A crypto wallet application supporting token/coin transfers, NFT transfers, and token claiming with support for Bitcoin, TON, and EVM protocols.
- Developed crypto transactions (coin/token transfers) on the EVM blockchain using Web3.js & Moralis.
- Optimized and enhanced UI/UX animations for a smoother user experience using Reanimated.
- Built and maintained reusable React Native components for scalability.
- Refactored key services to improve performance and maintainability.
- Collaborated with backend developers to integrate smart contract interactions.
- Worked directly with BA to provide technical consultation and solutions.`,
        skills: [
          "React Native",
          "Expo",
          "TypeScript",
          "Redux",
          "Redux Toolkit",
          "Reanimated",
          "Auth0",
          "Firebase",
          "Axios",
          "React Navigation",
          "Lottie",
          "Web3.js",
          "Moralis",
          "TON SDK",
          "HD Wallet",
          "Node.js",
          "MongoDB",
        ],
      },
    ],
  },
  {
    id: "home-services",
    companyName: "Home Services App",
    positions: [
      {
        id: "1",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "08.2023",
          end: "08.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- A mobile application for scheduling home services (painting, moving, repairs, etc.), integrating both customer & provider systems.
- Optimized code by separating monolithic service files into reusable, maintainable components.
- Developed messaging, booking, service configuration, and job status tracking features.
- Worked directly with customers, providing technical consultation and solutions.`,
        skills: [
          "React Native",
          "JavaScript",
          "Redux",
          "Redux-Saga",
          "Firebase",
          "Laravel",
          "SQL",
          "Stripe",
        ],
      },
    ],
  },
]
