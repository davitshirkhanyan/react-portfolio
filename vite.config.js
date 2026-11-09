import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the custom domain in public/CNAME, so the base path is "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
