import type { Meta, StoryObj } from "@storybook/react";
import { Chip, ChipProps } from "../../components/chip";

const meta = {
    title: "Components/Chip",
    component: Chip,
    parameters: {
        layout: "center",
    },
    tags: ["autodocs"],
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        label: "Learning",
    },
};