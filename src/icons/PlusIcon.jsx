import * as React from 'react';

function PlusIcon(props) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
        stroke={props.color}
        strokeWidth={1.5}
          />
    </svg>
  );
}

export default PlusIcon;
