import { colors, Colors } from '@/styles/colors'
import { useEffect, useRef, useState } from 'react'

function ScrollProgressBar({
  color = 'blue',
  marginTop = 0,
}: {
  color?: Colors
  marginTop?: number
}) {
  const [progress, setProgress] = useState<number>(0)
  // requestAnimationFrame Id
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const scroll = () => {
      // 스크롤을 얼마나 내렸는 지 (위에서부터 내려온 거리)
      const scrollTop = document.documentElement.scrollTop

      // 스크롤 할 수 있는 높이 = 스크롤 전체 높이 - 뷰포트 높이
      const scrollableSpaceHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        setProgress(scrollTop / scrollableSpaceHeight)
      })
    }

    window.addEventListener('scroll', scroll)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      window.removeEventListener('scroll', scroll)
    }
  }, [])
  return (
    <div
      style={{
        position: 'sticky',
        top: marginTop,
        zIndex: 2,
        transform: `scaleX(${progress})`,
        transformOrigin: 'left',
        backgroundColor: colors[color],
        height: 8,
      }}
    />
  )
}

export default ScrollProgressBar
