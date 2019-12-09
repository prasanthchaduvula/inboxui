import React from 'react';

export default function HeroLeft() {
  return (
    <div className="hero-left">
      <nav>
        <h2>MAILBOXES</h2>
        <div className="inbox-div inbox-div-bg">
          <div className="inbox-flex">
            <svg
              className="inbox-img"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path>
            </svg>
            <p className="inbox-text">Inbox</p>
          </div>
          <p className="inbox-six">6</p>
        </div>
        {[
          {
            inboxpic: 'inbox.png',
            inboxtext: 'Inbox',
            inboxsix: 6
          },
          {
            inboxpic: 'inbox.png',
            inboxtext: 'Inbox',
            inboxsix: 6
          },
          {
            inboxpic: 'inbox.png',
            inboxtext: 'Inbox',
            inboxsix: 6
          },
          {
            inboxpic: 'inbox.png',
            inboxtext: 'Inbox',
            inboxsix: 6
          }
        ].map(e => (
          <>
            <div className="inbox-div">
              <div className="inbox-flex">
                <svg
                  className="inbox-img"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path>
                </svg>
                <p className="inbox-text">{e.inboxtext}</p>
              </div>
              <p className="inbox-six">{e.inboxsix}</p>
            </div>
          </>
        ))}
        <h2 className="folders">FOLDERS</h2>
        {['Refund', 'Refund', 'Refund', 'Refund'].map(menu => (
          <p className="refund">{menu}</p>
        ))}
      </nav>
    </div>
  );
}
