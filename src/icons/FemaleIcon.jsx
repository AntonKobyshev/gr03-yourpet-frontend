import * as React from 'react';

function FemaleIcon(props) {
  return (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.758 13a5 5 0 100-10 5 5 0 000 10zm0 0v8m-3-3h6"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FemaleIcon;
