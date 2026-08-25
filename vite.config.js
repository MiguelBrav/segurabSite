import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        blog: resolve(import.meta.dirname, 'blog/index.html'),
        pricing: resolve(import.meta.dirname, 'pricing/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
        faq: resolve(import.meta.dirname, 'faq/index.html'),
        privacy: resolve(import.meta.dirname, 'privacy/index.html'),
        terms: resolve(import.meta.dirname, 'terms/index.html'),
        'blog-1': resolve(import.meta.dirname, 'blog/blog-1/index.html'),
        'blog-2': resolve(import.meta.dirname, 'blog/blog-2/index.html'),
        'blog-3': resolve(import.meta.dirname, 'blog/blog-3/index.html'),
        'blog-4': resolve(import.meta.dirname, 'blog/blog-4/index.html'),
        'blog-5': resolve(import.meta.dirname, 'blog/blog-5/index.html'),
        'blog-6': resolve(import.meta.dirname, 'blog/blog-6/index.html'),
      },
    },
  },
});
