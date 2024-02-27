/* eslint-disable react/prop-types */
import * as React from 'react'

const ProgressBar = ({ totalTasks, completedTasks }) => {
  const progress = totalTasks === 0 ? 0 : completedTasks / totalTasks
  const circumference = 2 * Math.PI * 7.5
  const dashOffset = circumference * (1 - progress)

  return (
    <svg
      viewBox='0 0 18 18'
      color='transparent'
      style={{
        width: '20px',
        transformOrigin: '50% 50%'
      }}
    >
      <circle
        r={7.5}
        cx={9}
        cy={9}
        strokeWidth={3}
        stroke='rgba(27, 45, 56, 1)'
        strokeLinecap='round'
        fill='transparent'
      />

      <circle
        r={7.5}
        cx={9}
        cy={9}
        strokeWidth={3}
        stroke='rgba(255, 255, 255, 1)'
        strokeLinecap='round'
        fill='transparent'
      />

      <circle
        r={7.5}
        cx={9}
        cy={9}
        strokeWidth={3}
        stroke='rgb(3, 138, 207)'
        strokeLinecap='round'
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        fill='transparent'
        style={{
          transition: 'stroke-dashoffset 0.3s ease-in-out'
        }}
      />
    </svg>
  )
}

export default ProgressBar
