import { Button, ButtonProps } from "./Button";
import { StoryObj } from "@storybook/react";

export default {
  title: "UI/Button",
  component: Button,
  tags: ['autodocs']
};

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Botão legal primário",
  },
};

export const Secondary: Story = {
  args: {
    children: "Botão secoundário",
    variant: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Grandeee",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Normal",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Pequeno",
  },
};
