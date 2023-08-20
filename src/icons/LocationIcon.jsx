import * as React from 'react';

function LocationIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.758 11c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1116 0z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.758 11a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LocationIcon;
