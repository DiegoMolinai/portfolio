// src/routes/AppRoutes.jsx

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PublicLayout from '../layout/public/PublicLayout';
import PrivateLayout from '../layout/private/PrivateLayout';

import HomePage from '../pages/public/HomePage';
import DashboardPage from '../pages/private/DashboardPage'; // más adelante
import AnimatedPage from '../components/AnimatedPage';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* Rutas públicas */}
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          {/* Agrega más rutas públicas si las necesitas */}
        </Route>

        {/* Rutas privadas (más adelante puedes protegerlas) */}
        <Route element={<PrivateLayout />}>
          <Route
            path="/dashboard"
            element={
                <DashboardPage />
            }
          />
        </Route>

        {/* Página 404 si deseas */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}

      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
