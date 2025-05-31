import React from 'react';
import BgCtaSvg from '@/../public/bg-footer-gradient.svg';

const InfoFooter = () => {
  return (
    <div
      className="w-full flex items-center justify-center p-2 rounded my-6"
      style={{
        backgroundImage: `url(${BgCtaSvg.src})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
        <p className="text-sm">
          Explore our API documentation to learn how to integrate with our
          services.
        </p>
        <button
          className="mt-3 px-4 py-2 bg-white hover:bg-gray-200 rounded  hover:shadow-lg transition-colors cursor-pointer"
          onClick={() => console.log('Go to API Docs')}
        >
          View Docs
        </button>
      </div>
    </div>
  );
};

export default InfoFooter;
