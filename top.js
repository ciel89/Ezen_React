import React, { useRef } from 'react';

function ScrollToTopButton() {
  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div ref={topRef}></div>
      <div style={{ height: '1500px', padding: '10px' }}>
        <p>Scroll down to see the button</p>
      </div>
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Scroll to Top
      </button>
    </div>
  );
}

export default ScrollToTopButton;
