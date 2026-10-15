import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const repository = process.env.GITHUB_REPOSITORY;
  const base = repository ? `/${repository.split('/')[1]}/` : '/';
  const demoMode = !!(repository || env.VITE_DEMO_MODE);

  return {
    base,
    define: {
      'import.meta.env.VITE_DEMO_MODE': JSON.stringify(demoMode),
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
