import * as React from 'react';

function TrashIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6m9 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1M4 6h16m-10 4v6m4-6v6"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TrashIcon;
