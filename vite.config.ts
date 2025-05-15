
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
  // Configuration pour assurer que les fichiers XML et TXT soient servis correctement
  assetsInclude: ['**/*.xml', '**/*.txt'],
  publicDir: 'public',
  build: {
    copyPublicDir: true, // S'assure que les fichiers du dossier public sont copiés lors du build
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Assure que les fichiers statiques sont copiés dans le dossier de sortie
        assetFileNames: (assetInfo) => {
          // Vérification que assetInfo.name existe avec une gestion de type plus robuste
          if (!assetInfo.name) {
            return 'assets/[name]-[hash][extname]';
          }
          
          const ext = assetInfo.name.split('.').pop();
          if (ext === 'xml' || ext === 'txt') {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
}));
