// Creating the stories file with the CSF
// Component Story Format

import { Button } from "./Button";

// this is Component Meta
export default {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "click",
    },
  },
  parameters: {
    layout: "centered",
  },
};

// this is Component Story
export const MyStory = {
  args: {
    label: "Button",
  },
};

export const Green = {
  args: {
    label: "Green",
    primary: true,
    size: "large",
    backgroundColor: "#16644C",
  },
};
