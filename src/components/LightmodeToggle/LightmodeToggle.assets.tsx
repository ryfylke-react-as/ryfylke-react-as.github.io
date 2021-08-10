import * as React from "react";

export function Moon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={30}
      height={35}
      viewBox="0 0 30 35"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.402 0A17.366 17.366 0 000 17.328a17.366 17.366 0 0029.351 12.569A17.366 17.366 0 0111.018 12.56 17.365 17.365 0 0116.402.003V0z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.35 19.84a8.511 8.511 0 11-17.023 0 8.511 8.511 0 0117.023 0zM30.005 18.434h9.68v2.817h-9.68v-2.817zM0 18.434h9.68v2.817H0v-2.817zM18.434 9.68V0h2.817v9.68h-2.817zM18.434 39.685v-9.68h2.817v9.68h-2.817zM26.031 11.658l6.845-6.845 1.992 1.992-6.845 6.845-1.992-1.992zM4.815 32.88l6.845-6.846 1.993 1.992-6.845 6.845-1.993-1.992zM11.66 13.65L4.815 6.805l1.993-1.992 6.845 6.845-1.993 1.992zM32.876 34.871l-6.845-6.845 1.992-1.992 6.845 6.845-1.992 1.992z"
        fill="currentColor"
      />
    </svg>
  );
}
