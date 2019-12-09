import React from 'react';

export default function HeroCenter() {
  return (
    <>
      <div className="hero-center">
        <div className="sortby">
          <div className="sortbydate">
            <h2>Sorted by date</h2>
            <svg
              className="sort-down-arrow"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
            </svg>
          </div>
          <svg
            className="sort-img"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
          </svg>
        </div>
        <div className="overflow">
          {[
            {
              mailto: 'Gloria Robetsan',
              mailtime: '2 days ago',
              mailsub: 'Re: Student Details',
              mailbody:
                'Learning about React and React Router is really really important if you want to get better at creating UIs.'
            },
            {
              mailto: 'Gloria Robetsan',
              mailtime: '2 days ago',
              mailsub: 'Re: Student Details',
              mailbody:
                'Learning about React and React Router is really really important if you want to get better at creating UIs'
            },
            {
              mailto: 'Gloria Robetsan',
              mailtime: '2 days ago',
              mailsub: 'Re: Student Details',
              mailbody:
                'Learning about React and React Router is really really important if you want to get better at creating UIs'
            },
            {
              mailto: 'Gloria Robetsan',
              mailtime: '2 days ago',
              mailsub: 'Re: Student Details',
              mailbody:
                'Learning about React and React Router is really really important if you want to get better at creating UIs'
            },
            {
              mailto: 'Gloria Robetsan',
              mailtime: '2 days ago',
              mailsub: 'Re: Student Details',
              mailbody:
                'Learning about React and React Router is really really important if you want to get better at creating UIs'
            },
            {
              mailto: 'Gloria Robetsan',
              mailtime: '2 days ago',
              mailsub: 'Re: Student Details',
              mailbody:
                'Learning about React and React Router is really really important if you want to get better at creating UIs'
            }
          ].map(props => (
            <>
              <div className="mail-box">
                <div className="mailto-flex">
                  <p className="mailto">{props.mailto}</p>
                  <p className="mailtime">{props.mailtime}</p>
                </div>
                <p className="mailsub">{props.mailsub}</p>
                <p className="mailbody">{props.mailbody}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
