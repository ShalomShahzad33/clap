import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout.jsx';
import { appRoutes } from './routes/siteRoutes.js';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {appRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
}
