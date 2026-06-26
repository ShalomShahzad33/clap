import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-clap-navy text-clap-text">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
