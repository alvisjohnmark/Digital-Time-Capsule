import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Enables external access (use '0.0.0.0' if 'true' doesn't work)
    port: 5173, // Default Vite port
  },
});
