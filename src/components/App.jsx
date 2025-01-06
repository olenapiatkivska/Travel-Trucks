import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Loader from '../components/Loader/Loader.jsx';
import { lazy, Suspense } from 'react';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import './App.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
const CamperDetailsPage = lazy(() =>
  import('../pages/CamperDetailsPage/CamperDetailsPage.jsx'),
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
