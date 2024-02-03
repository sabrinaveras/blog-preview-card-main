import type { Meta, StoryObj } from "@storybook/react";
import { CardBorder, CardBorderProps } from "../../components/card/cardBorder";
import { CardImage } from "../../components/card";

const meta = {
    title: "Components/Card/Border",
    component: CardBorder,
    parameters:{
        layout: "center",
    },
    tags: ["autodocs"],
} satisfies Meta<CardBorderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        children: <><CardImage url="/images/illustration-article.svg" /></>
    },
};