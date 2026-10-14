import type { ReactNode } from 'react';
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const UncoverPage = lazy(() => import('./pages/UncoverPage'));
const ShackPage = lazy(() => import('./pages/ShackPage'));
const ManageRecipesPage = lazy(() => import('./pages/ManageRecipesPage'));
const ManagePromptsPage = lazy(() => import('./pages/ManagePromptsPage'));
const ManageUsersPage = lazy(() => import('./pages/ManageUsersPage'));

export interface AppRoute {
  path: string;
  element: ReactNode;
}

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<Loader />}>{element}</Suspense>;
}

export const routes: AppRoute[] = [
  { path: '/', element: withSuspense(<LandingPage />) },
  { path: '/:slug/uncover', element: withSuspense(<UncoverPage />) },
  { path: '/shack', element: withSuspense(<ShackPage />) },
  { path: '/manage-recipes', element: withSuspense(<ManageRecipesPage />) },
  { path: '/manage-prompts', element: withSuspense(<ManagePromptsPage />) },
  { path: '/manage-users', element: withSuspense(<ManageUsersPage />) },
  { path: '*', element: <Navigate to="/" replace /> },
];
