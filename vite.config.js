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
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        pricing: resolve(__dirname, 'pricing/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        'blog-1': resolve(__dirname, 'blog/blog-1/index.html'),
        'blog-2': resolve(__dirname, 'blog/blog-2/index.html'),
        'blog-3': resolve(__dirname, 'blog/blog-3/index.html'),
        'blog-4': resolve(__dirname, 'blog/blog-4/index.html'),
        'blog-5': resolve(__dirname, 'blog/blog-5/index.html'),
        'blog-6': resolve(__dirname, 'blog/blog-6/index.html'),
      },
    },
  },
});
