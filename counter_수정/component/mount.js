import React, { useEffect } from 'react';

function UnmountLoggerComponent() {
  useEffect(() => {
    // 클린업 함수로만 사용하여 언마운트 시에만 실행
    return () => {
      console.log('Component unmounted');
    };
  }, []); // 빈 배열을 의존성 배열로 사용

  return <div>Unmount Logger Component</div>;
}

export default UnmountLoggerComponent;