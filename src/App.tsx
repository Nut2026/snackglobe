import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import { GroqProvider } from '@/contexts/GroqContext';
import { routes } from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <GroqProvider>
          <IntersectObserver />
          <div className="flex flex-col min-h-screen w-full">
            <main className="flex-grow">
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Routes>
            </main>
          </div>
          <Toaster richColors position="top-center" />
        </GroqProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
