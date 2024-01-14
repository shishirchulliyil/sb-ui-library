import type { Preview } from "@storybook/react";
// Keep the name reset.css for the default behaviour of reset to load
import "../src/assets/reset.css";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
