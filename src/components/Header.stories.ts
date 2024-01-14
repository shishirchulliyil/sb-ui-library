import { Header } from "./Header";

export default {
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    onLogin: { action: "onLogin Fired!" },
    onCreateAccount: { action: "onCreateAccount Fired!" },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedOut = {};
export const LoggedIn = {};
