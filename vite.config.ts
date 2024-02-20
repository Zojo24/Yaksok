import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://openapi.naver.com", // 프록시할 대상 서버
        changeOrigin: true, // cross-origin 요청이 가능하도록 설정
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
