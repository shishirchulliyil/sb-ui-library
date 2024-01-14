import { within, userEvent, expect } from "@storybook/test";
import { Page } from "./Page";
import { PlayContext } from "../types/common";

export default {
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedOut = {};
export const LoggedIn = {
  play: async (context: PlayContext) => {
    const canvas = within(context.canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await userEvent.click(loginButton);

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
