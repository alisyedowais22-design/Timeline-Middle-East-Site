import React, { useEffect } from 'react';
import TopBar    from '../components/TopBar';
import Navbar    from '../components/Navbar';
import Solutions from '../components/Solutions';
import CTABanner from '../components/CTABanner';
import Footer    from '../components/Footer';

const SolutionsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div>
      <TopBar />
      <Navbar />
      <main style={{ paddingTop: '116px' }}>
        <Solutions />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
