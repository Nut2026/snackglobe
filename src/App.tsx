import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import { GroqProvider } from '@/contexts/GroqContext';
import { routes } from './routes';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <GroqProvider>
          <div className="flex flex-col min-h-screen w-full">
            <main className="flex-grow">
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
              </Routes>
            </main>
          </div>
          <Toaster richColors position="top-center" />
        </GroqProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
