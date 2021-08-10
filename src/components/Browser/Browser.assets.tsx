import React from "react";

export function Tabs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      baseProfile="full"
      height={70}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 695.3 70.8"
        baseProfile="full"
        preserveAspectRatio="none slice"
        height={70}
        {...props}
      >
        <path
          d="M688.8 0H6.5C2.9 0 0 2.9 0 6.5v28.9h695.3V6.5c0-3.6-2.9-6.5-6.5-6.5z"
          fill="var(--ui-03)"
        />
        <path fill="var(--ui-02)" d="M0 31.4h695.3v39.4H0z" />
        <path
          d="M595.9 61.3H109.4c-1 0-1.8-.8-1.8-1.8V41.7c0-1 .8-1.8 1.8-1.8h486.5c1 0 1.8.8 1.8 1.8v17.8c1 0-1.8-.8-1.8 1.8z"
          fill="#fff"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 85.2 70.8"
        preserveAspectRatio="xMaxYMid meet"
        {...props}
      >
        <circle cx={16.9} cy={17.5} r={7.3} fill="#70b34a" />
        <circle cx={41.7} cy={17.5} r={7.3} fill="#ddaa54" />
        <circle cx={66.5} cy={17.5} r={7.3} fill="#d5655d" />
        <g>
          <path
            d="M68.2 51h-9.8c-.4 0-.8.4-.8 1s.4 1 .8 1h9.8c.4 0 .8-.4.8-1s-.4-1-.8-1zm-9.8-2h9.8c.4 0 .8-.4.8-1 0-.5-.4-1-.8-1h-9.8c-.4 0-.8.4-.8 1s.4 1 .8 1zm9.8 5.8h-9.8c-.4 0-.8.4-.8 1 0 .5.4 1 .8 1h9.8c.4 0 .8-.4.8-1s-.4-1-.8-1z"
            fill="var(--text-01)"
          />
        </g>
      </svg>
    </svg>
  );
}
