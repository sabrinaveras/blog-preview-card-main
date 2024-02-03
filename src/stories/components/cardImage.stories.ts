import type { Meta, StoryObj } from "@storybook/react";
import { CardImage, CardImageProps } from "../../components/card";

const meta = {
    title: "Components/Card/Image",
    component: CardImage,
    parameters: {
        layout: "center",
    },
    tags: ["autodocs"],
} satisfies Meta<CardImageProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        url: "/images/illustration-article.svg",
    }
}