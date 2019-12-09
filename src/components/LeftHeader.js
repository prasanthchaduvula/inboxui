import React from 'react';

export default function LeftHeader() {
  return (
    <div className="left-header-div">
      <button className="left-header">
        <div className="left-header-avatar">
          <img className="avatar" src="avatar.jpeg" alt=""></img>
          <p className="avatar-name">Monaco White</p>
        </div>
        <svg className="avatar-downarrow" fill="none">
          <path
            d="M16 10l-4 4-4-4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}
