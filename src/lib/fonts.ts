import { GeistMono } from "geist/font/mono"
import { GeistPixelSquare } from "geist/font/pixel"
import { Grenze_Gotisch } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = GeistMono

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  GeistPixelSquare.variable,
  "[--font-mono:var(--font-geist-mono)]"
)
