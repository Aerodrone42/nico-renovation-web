
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuration explicite pour les fichiers statiques
  assetsInclude: ['**/*.xml', '**/*.txt'],
  publicDir: 'public',
  build: {
    copyPublicDir: true, // S'assure que les fichiers du dossier public sont copiés lors du build
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Gestion améliorée pour les fichiers statiques
        assetFileNames: (assetInfo) => {
          if (!assetInfo || !assetInfo.name) {
            return 'assets/[name]-[hash][extname]';
          }
          
          const fileName = assetInfo.name;
          const ext = fileName.split('.').pop();
          
          if (ext === 'xml' || ext === 'txt') {
            // Les fichiers XML et TXT sont placés à la racine sans hash
            return '[name][extname]';
          }
          
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
}));
