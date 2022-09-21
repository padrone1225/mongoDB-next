import * as React from 'react';

import Header from '../Headers/Header'
import Footer from '../Footers/Footer'
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
        <Header />
        <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
          <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
            <Sidebar/>
          </div>
          <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
            {children}
          </main>
        </div>
        <Footer />
      </>
  );
};