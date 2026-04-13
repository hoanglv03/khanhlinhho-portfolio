import { GeistPixelSquare } from "geist/font/pixel"
import { PT_Serif } from "next/font/google"

import { cn } from "@/lib/utils"

const fontPTSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
})

export const fontVariables = cn(
  fontPTSerif.variable,
  GeistPixelSquare.variable,
  "[--font-sans:var(--font-pt-serif)]",
  "[--font-mono:var(--font-pt-serif)]",
  "[--font-heading:var(--font-pt-serif)]"
)
