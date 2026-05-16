import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
  },
  resolve: {
    alias: {
      '@components': '/src/app/components',
      '@constants': '/src/app/constants',
      '@features': '/src/app/features',
      '@forms': '/src/app/forms',
      '@interceptors': '/src/app/interceptors',
      '@models': '/src/app/models',
      '@services': '/src/app/services',
      '@store': '/src/app/store',
    },
  },
});
