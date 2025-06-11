import React, { useEffect, useRef } from 'react';

const Custom_cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - cursorRef.current.offsetWidth / 2}px`;
        cursorRef.current.style.top = `${e.clientY - cursorRef.current.offsetHeight / 2}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '40px',
          height: '40px',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <img src="../cursor.gif" alt="cursor" style={{ width: '100%', height: '100%' }} />
      </div>
    </>
  );
};

export default Custom_cursor;
