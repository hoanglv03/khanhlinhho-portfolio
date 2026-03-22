export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 160"
      aria-hidden
      {...props}
    >
      <text
        x="256"
        y="80"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="'Courier New', Courier, monospace"
        fontWeight="900"
        fontSize="100"
        letterSpacing="6"
        fill="currentColor"
      >
        HOANGLV
      </text>
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 160"><text x="256" y="80" dominant-baseline="middle" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-weight="900" font-size="100" letter-spacing="6" fill="${color}">HOANGLV</text></svg>`
}
