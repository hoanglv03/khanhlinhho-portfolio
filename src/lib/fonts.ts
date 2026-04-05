import { GeistPixelSquare } from "geist/font/pixel"
import { Cormorant_Upright } from "next/font/google"

import { cn } from "@/lib/utils"

const fontCormorant = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const fontVariables = cn(
  fontCormorant.variable,
  GeistPixelSquare.variable,
  "[--font-sans:var(--font-cormorant)]",
  "[--font-mono:var(--font-cormorant)]",
  "[--font-heading:var(--font-cormorant)]"
)
