import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chanhdai.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
]

export const X_USERNAME = undefined
export const GITHUB_USERNAME = "hoanglv03"
export const SPONSORSHIP_URL = undefined
export const SOURCE_CODE_GITHUB_REPO = "hoanglv03/hoanglv-mobile-dev"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/hoanglv03/hoanglv-mobile-dev"

export const UTM_PARAMS = {
  utm_source: "hoanglv-mobile-dev.vercel.app",
}
