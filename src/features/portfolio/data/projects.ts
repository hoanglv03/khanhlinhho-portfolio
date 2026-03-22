import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "crypto-wallet-flutter-c",
    title: "Crypto Wallet App — Flutter (Project C)",
    period: {
      start: "10.2025",
    },
    skills: [
      "Flutter",
      "Dart",
      "Riverpod",
      "BLoC",
      "Freezed",
      "Go Router",
      "Retrofit",
      "Dio",
      "web3dart",
      "blockchain_utils",
      "bitcoin_base",
      "on_chain",
      "Firebase",
      "Sentry",
      "AppsFlyer",
      "GitLab CI/CD",
    ],
    description: `A self-custody multi-chain crypto wallet for iOS and Android supporting Bitcoin, Ethereum (EVM), XRP, TRON, BSC, and TON.
- Send, receive, purchase tickets with crypto, and swap tokens across multiple chains
- GitLab CI/CD pipelines for iOS & Android with Firebase App Distribution and TestFlight
- Sentry crash reporting with PII filtering, AppsFlyer install attribution
- Clean architecture with Repository pattern and Riverpod state management
`,
    isExpanded: true,
  },
  {
    id: "crypto-wallet-flutter-b",
    title: "Crypto Wallet App — Flutter (Project B)",
    period: {
      start: "08.2025",
      end: "10.2025",
    },
    skills: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Auto Route",
      "GetIt",
      "Retrofit",
      "Dio",
      "Hive",
      "web3dart",
      "ton_dart",
      "bitcoin_base",
      "xrpl_dart",
      "polkadart",
      "BIP39/BIP44",
      "Cardano",
      "Firebase",
      "IronSource",
    ],
    description: `A multi-chain crypto wallet supporting EVM, Bitcoin, TON, XRP, Tron, Cardano (ADA), and Polkadot.
- Wallet creation/restoration, token/coin transfers, NFT management, staking, and Cardano governance participation
- HD Wallet key derivation using BIP39/BIP44 for all supported chains
- ChangeNow cross-chain swap with rate estimation, transaction tracking, and refund handling
- Staking module: stake, unstake, claim rewards, and staking history across multiple protocols
`,
  },
  {
    id: "mapbox-geospatial",
    title: "MapBox Geospatial App",
    period: {
      start: "04.2025",
      end: "07.2025",
    },
    skills: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Realm",
      "Mapbox GL",
      "Turf.js",
      "React Native FS",
      "Offline Sync",
      "GPS Tracking",
    ],
    description: `A professional geospatial app for land parcel management and infrastructure assessment for field engineers and GIS analysts.
- GB Land Parcels and Extracted Title Deed Data layers on Mapbox GL
- Geo-tagged photo layer with HEIC conversion and offline queuing via Realm
- Offline-capable annotation: Notes, Next Steps, Contact Details with background sync
- Geospatial measurement tools (distance, area) using Turf.js for offline field use
- GPS tracking for online and offline modes with real-time map visualization
`,
  },
  {
    id: "crypto-wallet-react-native",
    title: "Crypto Wallet App — React Native (Project A)",
    period: {
      start: "08.2024",
      end: "03.2025",
    },
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "Reanimated",
      "Web3.js",
      "Moralis",
      "TON SDK",
      "HD Wallet",
      "Auth0",
      "Firebase",
    ],
    description: `A crypto wallet application supporting token/coin transfers, NFT transfers, and token claiming for Bitcoin, TON, and EVM.
- EVM blockchain transactions using Web3.js & Moralis
- Smooth UI/UX animations with React Native Reanimated
- Smart contract interactions integrated with backend team
`,
  },
  {
    id: "home-services-app",
    title: "Home Services App",
    period: {
      start: "08.2023",
      end: "08.2024",
    },
    skills: [
      "React Native",
      "JavaScript",
      "Redux",
      "Redux-Saga",
      "Firebase",
      "Laravel",
      "Stripe",
    ],
    description: `A mobile application for scheduling home services (painting, moving, repairs), integrating customer & provider systems.
- Messaging, booking, service configuration, and job status tracking
- Stripe payment integration via Laravel backend
`,
  },
]
