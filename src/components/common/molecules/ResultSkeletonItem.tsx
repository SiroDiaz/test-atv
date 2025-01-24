import { SVGProps } from "react";

const ResultSkeletonItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={112}
    aria-labelledby="loading-aria"
    preserveAspectRatio="none"
    viewBox="0 0 652 112"
    {...props}
  >
    <title>{"Loading..."}</title>
    <rect
      width="100%"
      height={112}
      clipPath="url(#a)"
      style={{
        fill: "url(#b)",
      }}
    />
    <defs>
      <linearGradient id="b">
        <stop offset={0.6} stopColor="#f3f3f3">
          <animate
            attributeName="offset"
            dur="2s"
            keyTimes="0; 0.25; 1"
            repeatCount="indefinite"
            values="-2; -2; 1"
          />
        </stop>
        <stop offset={1.6} stopColor="#ecebeb">
          <animate
            attributeName="offset"
            dur="2s"
            keyTimes="0; 0.25; 1"
            repeatCount="indefinite"
            values="-1; -1; 2"
          />
        </stop>
        <stop offset={2.6} stopColor="#f3f3f3">
          <animate
            attributeName="offset"
            dur="2s"
            keyTimes="0; 0.25; 1"
            repeatCount="indefinite"
            values="0; 0; 3"
          />
        </stop>
      </linearGradient>
      <clipPath id="a">
        <rect width={88} height={6} x={2} y={39} rx={3} ry={3} />
        <rect width={52} height={6} x={2} y={24} rx={3} ry={3} />
        <rect width={652} height={38} y={56} rx={3} ry={3} />
      </clipPath>
    </defs>
  </svg>
)
export default ResultSkeletonItem;
