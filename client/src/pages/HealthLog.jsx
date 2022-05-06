import React from 'react';
import Log from '../components/Log';
import RightNav from '../components/RightNav';

const HealthLog = () => {
  return (
    <main style={{width: "100%", display: "flex"}}>
        <RightNav />
        <Log />
    </main>
  );
};

export default HealthLog;
