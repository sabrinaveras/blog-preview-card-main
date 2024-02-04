import type { Meta, StoryObj } from "@storybook/react";
import { Blog } from "../../pages/blog";


const meta = {
    title: "Pages/Blog",
    component: Blog,
    parameters: {
        layout: "center",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}