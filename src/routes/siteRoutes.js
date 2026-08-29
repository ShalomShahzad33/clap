import AboutPage from '../pages/AboutPage.jsx';
import ArticlePage from '../pages/ArticlePage.jsx';
import ArticlesPage from '../pages/ArticlesPage.jsx';
import CabinetMemberPage from '../pages/CabinetMemberPage.jsx';
import CabinetPage from '../pages/CabinetPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import GalleryFolderPage from '../pages/GalleryFolderPage.jsx';
import GalleryPage from '../pages/GalleryPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import PresidentMessagePage from '../pages/PresidentMessagePage.jsx';

export const appRoutes = [
  { path: '/', element: HomePage },
  { path: '/about', element: AboutPage },
  { path: '/president-message', element: PresidentMessagePage },
  { path: '/articles', element: ArticlesPage },
  { path: '/articles/:slug', element: ArticlePage },
  { path: '/gallery', element: GalleryPage },
  { path: '/gallery/:folderId', element: GalleryFolderPage },
  { path: '/our-cabinet', element: CabinetPage },
  { path: '/our-cabinet/:slug', element: CabinetMemberPage },
  { path: '/contact', element: ContactPage },
  { path: '/404', element: NotFoundPage },
  { path: '*', element: NotFoundPage },
];
