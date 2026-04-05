import { GeistPixelSquare } from "geist/font/pixel"
import { Grenze_Gotisch } from "next/font/google"

import { cn } from "@/lib/utils"

const fontGrenze = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grenze",
  display: "swap",
})

export const fontVariables = cn(
  fontGrenze.variable,
  GeistPixelSquare.variable,
  "[--font-sans:var(--font-grenze)]",
  "[--font-mono:var(--font-grenze)]",
  "[--font-heading:var(--font-grenze)]"
)
