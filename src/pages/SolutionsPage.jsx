import React, { useEffect } from 'react';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Solutions from '../components/Solutions';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: 112 }}>
        <Solutions />
        <CTABanner />
      </main>

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          main {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionsPage;