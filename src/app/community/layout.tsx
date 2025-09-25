'use client'
import React from 'react';

interface CommunityLayoutProps {
  children: React.ReactNode;
}

const CommunityLayout = ({ children }: CommunityLayoutProps) => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </>
  );
};

export default CommunityLayout;
