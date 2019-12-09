import React from 'react';

export default function HeroRight() {
  return (
    <div className="hero-right">
      <div className="hero-right-top-shadow">
        <div className="hero-right-header">
          <div>
            <svg
              className="hero-right-header-icons"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
            </svg>
            <svg
              className="hero-right-header-icons"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path>
            </svg>
            <svg
              className="hero-right-header-icons"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
            </svg>
            <svg
              className="hero-right-header-icons"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
            </svg>
            <svg
              className="hero-right-header-icons"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
            </svg>
          </div>
        </div>
        <div className="hero-right-heading">
          <h3 className="hero-right-heading-text">
            Re: Student Discount?Re: Student Discount?Re: Student Discount?Re:
            Student ...
          </h3>
          <p className="hero-heading-148">#148</p>
          <button className="hero-heading-active">Active</button>
        </div>
      </div>
      <div className="hero-right-overflow">
        {[
          {
            joe: 'Joe Armstrong',
            wrote: 'wrote',
            wrotetime: 'Yesterday at 7:24AM',
            avatar: 'avatar.jpeg',
            cardpara:
              'The idea for a publication that chronicles the design and innovation ecosystem in India has been buzzing around in my head for a while, but we only got to work on it in July this year. Four and a half months later, we’re ready to share it with you with some trepidation and much excitement.'
          },
          {
            joe: 'Joe Armstrong',
            wrote: 'wrote',
            wrotetime: 'Yesterday at 7:24AM',
            avatar: 'avatar.jpeg',
            cardpara:
              'The idea for a publication that chronicles the design and innovation ecosystem in India has been buzzing around in my head for a while, but we only got to work on it in July this year. Four and a half months later, we’re ready to share it with you with some trepidation and much excitement.'
          },
          {
            joe: 'Joe Armstrong',
            wrote: 'wrote',
            wrotetime: 'Yesterday at 7:24AM',
            avatar: 'avatar.jpeg',
            cardpara:
              'The idea for a publication that chronicles the design and innovation ecosystem in India has been buzzing around in my head for a while, but we only got to work on it in July this year. Four and a half months later, we’re ready to share it with you with some trepidation and much excitement.'
          },
          {
            joe: 'Joe Armstrong',
            wrote: 'wrote',
            wrotetime: 'Yesterday at 7:24AM',
            avatar: 'avatar.jpeg',
            cardpara:
              'The idea for a publication that chronicles the design and innovation ecosystem in India has been buzzing around in my head for a while, but we only got to work on it in July this year. Four and a half months later, we’re ready to share it with you with some trepidation and much excitement.'
          }
        ].map(props => (
          <>
            <div className="hero-right-card">
              <div className="hero-right-card-head">
                <div className="hero-right-card-head-left">
                  <h4 className="joe">{props.joe}</h4>
                  <p className="wrote">{props.wrote}</p>
                </div>
                <div className="hero-right-card-head-right">
                  <p className="wrote-time">{props.wrotetime}</p>
                  <img className="avatar1" src={`${props.avatar}`} alt=""></img>
                </div>
              </div>
              <p className="hero-right-card-para">{props.cardpara}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
