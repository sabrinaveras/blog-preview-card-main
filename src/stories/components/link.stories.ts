import type { Meta, StoryObj } from "@storybook/react";
import { Link, LinkProps } from "../../components/link";

const meta = {
    title: "Components/Link",
    component: Link,
    parameters:{
        layout: "center",
    },
    tags: ["autodocs"],
} satisfies Meta<LinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        url: "www.google.com",
        label: "HTML & CSS foundations"
    }
}