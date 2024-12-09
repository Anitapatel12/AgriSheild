// layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="text-2xl font-bold text-center p-4">
        <h1>Your Personal AI Assistant</h1>
      </header>
      <main className="flex flex-col items-center w-full p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
