"use client"

import { useMotionValueEvent, useScroll } from "motion/react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { USER } from "@/features/portfolio/data/user"

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const scrollTop = document.documentElement.scrollTop
  const headerHeight = 56
  return scrollTop + rect.top + rect.height - headerHeight
}

function AvatarMark({ className }: { className?: string }) {
  return (
    <Image
      src={USER.avatar}
      alt={USER.displayName}
      width={32}
      height={32}
      className={`size-8 rounded-full object-cover ring-1 ring-foreground/10 ${className ?? ""}`}
      unoptimized
    />
  )
}

function AvatarMarkMotion() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)
  const distanceRef = useRef(160)

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current)
  })

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark")
    if (!coverMark) return

    distanceRef.current = calcDistance(coverMark)

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark)
    })
    resizeObserver.observe(coverMark)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <AvatarMark
      className={`translate-y-2 opacity-0 transition-[opacity,translate] duration-300 ${visible ? "translate-y-0 opacity-100" : ""}`}
    />
  )
}

export function SiteHeaderMark() {
  const pathname = usePathname()
  const isHome = ["/", "/index"].includes(pathname)
  return isHome ? <AvatarMarkMotion /> : <AvatarMark />
}
