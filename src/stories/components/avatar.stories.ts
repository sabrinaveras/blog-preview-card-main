import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "../../components/avatar";

const meta = {
    title: "Components/Avatar",
    component: Avatar,
    parameters: {
        layout: "center",
    },
    tags: ["autodocs"],
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        url: "/images/image-avatar.webp",
        label: "Greg Hooper"
    }
}