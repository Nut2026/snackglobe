import { lazy, Suspense } from 'react';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const UncoverPage = lazy(() => import('./pages/UncoverPage'));
const ShackPage = lazy(() => import('./pages/ShackPage'));
const ManageRecipesPage = lazy(() => import('./pages/ManageRecipesPage'));
const ManagePromptsPage = lazy(() => import('./pages/ManagePromptsPage'));
const ManageUsersPage = lazy(() => import('./pages/ManageUsersPage'));

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  public?: boolean;
}

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const wrap = (el: ReactNode) => <Suspense fallback={<Loader />}>{el}</Suspense>;

export const routes: RouteConfig[] = [
  { name: 'Home', path: '/', element: wrap(<LandingPage />), public: true },
  { name: 'Uncover', path: '/:slug/uncover', element: wrap(<UncoverPage />), public: true },
  { name: 'Shack', path: '/shack', element: wrap(<ShackPage />), public: false },
  { name: 'ManageRecipes', path: '/manage-recipes', element: wrap(<ManageRecipesPage />), public: false },
  { name: 'ManagePrompts', path: '/manage-prompts', element: wrap(<ManagePromptsPage />), public: false },
  { name: 'ManageUsers', path: '/manage-users', element: wrap(<ManageUsersPage />), public: false },
  { name: 'Redirect', path: '*', element: <Navigate to="/" replace /> },
];
