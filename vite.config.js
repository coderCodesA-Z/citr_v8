import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    root: "src", // if index.html is already in the root directory then explicit mentioning is not reqd.
}