import React, { useEffect, useState } from "react"

interface AnimatedNumberProps {
  value: number
  symbols?: string
  duration?: number // ms
  className?: string
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 3000,
  className,
  symbols,
}) => {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value, duration])

  return (
    <span className={className}>
      {display}
      {symbols}
    </span>
  )
}
