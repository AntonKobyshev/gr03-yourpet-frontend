import * as React from 'react';

function ClockIcon(props) {
  return (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.758 7v5l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ClockIcon;
