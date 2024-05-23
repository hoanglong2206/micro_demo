import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 80,
    host: true,
    proxy: {
      "/api": {
        target: "http://gateway:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
      },
    },
  },
});

// export default ({ mode }: { mode: string }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
//   const config = {
//     plugins: [react()],
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "./src"),
//       },
//     },
//     server: {
//       port: 80,
//       host: true,
//       proxy: {
//         "/api": {
//           target: process.env.VITE_GATEWAY_URL,
//           changeOrigin: true,
//           rewrite: (path: string) => path.replace(/^\/api/, ""),
//           secure: false,
//         },
//       },
//     },
//   };
//   return defineConfig(config);
// };
