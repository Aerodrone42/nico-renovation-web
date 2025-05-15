
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Plugin personnalisé pour copier le sitemap et robots.txt
  const copyStaticFiles = () => {
    return {
      name: 'copy-static-files',
      writeBundle() {
        // Assurez-vous que le dossier dist existe
        if (!fs.existsSync('dist')) {
          fs.mkdirSync('dist');
        }

        // Copier sitemap.xml
        if (fs.existsSync('public/sitemap.xml')) {
          fs.copyFileSync('public/sitemap.xml', 'dist/sitemap.xml');
        }

        // Copier robots.txt
        if (fs.existsSync('public/robots.txt')) {
          fs.copyFileSync('public/robots.txt', 'dist/robots.txt');
        }
      }
    };
  };

  return {
    server: {
      host: "::",
      port: 8080,
      fs: {
        // Permet l'accès aux fichiers en dehors du répertoire racine
        allow: ['..']
      }
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      copyStaticFiles()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Configuration pour les fichiers statiques
    publicDir: 'public',
    build: {
      copyPublicDir: true,
      outDir: 'dist'
    }
  };
});
