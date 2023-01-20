import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), image(), tailwind()],
  output: "server",
  adapter: vercel()
});