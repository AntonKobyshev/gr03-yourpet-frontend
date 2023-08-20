import * as React from 'react';

function FilterIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.75781 4L9.75781 12V18L15.7578 21V12L20.7578 4H4.75781Z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default FilterIcon;