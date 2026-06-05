import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopBar        from '../components/TopBar';
import Navbar        from '../components/Navbar';
import CaseStudyPage from '../components/CaseStudyPage';
import Footer        from '../components/Footer';

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  return (
    <div>
      <TopBar />
      <Navbar />
      <main style={{ paddingTop: '116px' }}>
        <CaseStudyPage id={id} />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
