import React from 'react';

const GeometricAccents = () => {
  return (
    <>
      {/* Top corner accent */}
      <div className="fixed top-8 left-8 z-10">
        <div className="w-12 h-12 border-l-2 border-t-2 border-primary/20" />
      </div>
      
      {/* Bottom corner accent */}
      <div className="fixed bottom-8 right-8 z-10">
        <div className="w-16 h-0.5 bg-primary/60" />
        <div className="w-0.5 h-16 bg-primary/60 ml-auto mt-2" />
      </div>
      
      {/* Floating accent dot */}
      <div className="fixed top-1/3 right-20 z-10">
        <div className="w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
      </div>
    </>
  );
};

export default GeometricAccents;