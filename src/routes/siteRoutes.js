import AboutPage from '../pages/AboutPage.jsx';
import CabinetPage from '../pages/CabinetPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import GalleryPage from '../pages/GalleryPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

export const appRoutes = [
  { path: '/', element: HomePage },
  { path: '/about', element: AboutPage },
  { path: '/gallery', element: GalleryPage },
  { path: '/our-cabinet', element: CabinetPage },
  { path: '/contact', element: ContactPage },
  { path: '*', element: NotFoundPage },
];
