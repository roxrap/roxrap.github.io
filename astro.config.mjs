import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://roxrap.github.io',
  output: 'static',
  integrations: [tailwind(), image(), icon()],
});
