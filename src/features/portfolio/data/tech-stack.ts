import type { TechStack } from "../types/tech-stack"

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons" // Devicons
const SI = "https://cdn.simpleicons.org" // Simple Icons

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "dart",
    title: "Dart",
    href: "https://dart.dev/",
    categories: ["Language"],
    iconUrl: `${DI}/dart/dart-original.svg`,
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
    iconUrl: `${DI}/typescript/typescript-original.svg`,
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    iconUrl: `${DI}/javascript/javascript-original.svg`,
  },

  // Mobile Frameworks
  {
    key: "flutter",
    title: "Flutter",
    href: "https://flutter.dev/",
    categories: ["Framework", "Mobile"],
    iconUrl: `${DI}/flutter/flutter-original.svg`,
  },
  {
    key: "react-native",
    title: "React Native",
    href: "https://reactnative.dev/",
    categories: ["Framework", "Mobile"],
    iconUrl: `${DI}/react/react-original.svg`,
  },
  {
    key: "expo",
    title: "Expo",
    href: "https://expo.dev/",
    categories: ["Framework", "Mobile"],
    iconUrl: `${SI}/expo/000000`,
  },

  // State Management
  {
    key: "redux",
    title: "Redux Toolkit",
    href: "https://redux-toolkit.js.org/",
    categories: ["State Management"],
    iconUrl: `${DI}/redux/redux-original.svg`,
  },
  {
    key: "riverpod",
    title: "Riverpod",
    href: "https://riverpod.dev/",
    categories: ["State Management"],
    iconUrl: `${DI}/flutter/flutter-original.svg`,
  },
  {
    key: "bloc",
    title: "Flutter BLoC",
    href: "https://bloclibrary.dev/",
    categories: ["State Management"],
    iconUrl: `${DI}/flutter/flutter-original.svg`,
  },

  // Blockchain
  {
    key: "web3js",
    title: "Web3.js",
    href: "https://web3js.readthedocs.io/",
    categories: ["Blockchain"],
    iconUrl: `${SI}/web3dotjs`,
  },
  {
    key: "ethereum",
    title: "Ethereum / EVM",
    href: "https://ethereum.org/",
    categories: ["Blockchain"],
    iconUrl: `${SI}/ethereum`,
  },
  {
    key: "bitcoin",
    title: "Bitcoin",
    href: "https://bitcoin.org/",
    categories: ["Blockchain"],
    iconUrl: `${SI}/bitcoin`,
  },
  {
    key: "ton",
    title: "TON",
    href: "https://ton.org/",
    categories: ["Blockchain"],
    iconUrl: `${SI}/ton`,
  },
  {
    key: "xrp",
    title: "XRP",
    href: "https://xrpl.org/",
    categories: ["Blockchain"],
    iconUrl: `${SI}/xrp`,
  },

  // Tools & Services
  {
    key: "firebase",
    title: "Firebase",
    href: "https://firebase.google.com/",
    categories: ["Tools", "Backend"],
    iconUrl: `${DI}/firebase/firebase-original.svg`,
  },
  {
    key: "sentry",
    title: "Sentry",
    href: "https://sentry.io/",
    categories: ["Tools", "Monitoring"],
    iconUrl: `${SI}/sentry`,
  },
  {
    key: "mapbox",
    title: "Mapbox GL",
    href: "https://www.mapbox.com/",
    categories: ["Library", "Geospatial"],
    iconUrl: `${SI}/mapbox`,
  },
  {
    key: "axios",
    title: "Axios",
    href: "https://axios-http.com/",
    categories: ["Library", "HTTP"],
    iconUrl: `${SI}/axios`,
  },

  // Backend / Infra
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
    iconUrl: `${DI}/nodejs/nodejs-original.svg`,
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
    iconUrl: `${DI}/mongodb/mongodb-original.svg`,
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
    iconUrl: `${DI}/docker/docker-original.svg`,
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
    iconUrl: `${DI}/git/git-original.svg`,
  },
  {
    key: "gitlab-cicd",
    title: "GitLab CI/CD",
    href: "https://docs.gitlab.com/ee/ci/",
    categories: ["Tools", "CI/CD"],
    iconUrl: `${DI}/gitlab/gitlab-original.svg`,
  },
]
