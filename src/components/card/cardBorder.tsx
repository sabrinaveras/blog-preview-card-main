import styled from "styled-components";

export interface CardBorderProps{
    children: JSX.Element;
}

export const CardBorder = ({children}: CardBorderProps) => {
    return <CardBorderWrapper>{children}</CardBorderWrapper>;
}

const CardBorderWrapper = styled.div`
    border-radius: 1rem;

    border: 1px solid hsl(0, 0%, 7%);
    width: fit-content;

    box-shadow: 10px 10px;
`;