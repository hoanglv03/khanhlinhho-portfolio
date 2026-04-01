import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://khanhlinhho-portfolio.vercel.app",
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
export const GITHUB_USERNAME = "khanhlinhho"
export const SPONSORSHIP_URL = undefined
export const SOURCE_CODE_GITHUB_REPO = "hoanglv03/khanhlinhho-portfolio"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/hoanglv03/khanhlinhho-portfolio"

export const UTM_PARAMS = {
  utm_source: "khanhlinhho-portfolio.vercel.app",
}
