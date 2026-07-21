import AboutPage from '../pages/AboutPage.jsx';
import CabinetMemberPage from '../pages/CabinetMemberPage.jsx';
import CabinetPage from '../pages/CabinetPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import GalleryFolderPage from '../pages/GalleryFolderPage.jsx';
import GalleryPage from '../pages/GalleryPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

export const appRoutes = [
  { path: '/', element: HomePage },
  { path: '/about', element: AboutPage },
  { path: '/gallery', element: GalleryPage },
  { path: '/gallery/:folderId', element: GalleryFolderPage },
  { path: '/our-cabinet', element: CabinetPage },
  { path: '/our-cabinet/:slug', element: CabinetMemberPage },
  { path: '/contact', element: ContactPage },
  { path: '/404', element: NotFoundPage },
  { path: '*', element: NotFoundPage },
];
