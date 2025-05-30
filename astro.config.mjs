import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://roxrap.github.io",  // 👈 importante
  output: "static",
  integrations: [tailwind(), image()],
});
