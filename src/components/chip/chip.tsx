import styled from "styled-components";

export interface ChipProps{
    label: string;
}

export const Chip = ({label}: ChipProps) => {
    return (
        <ChipWrapper>
            <ChipLabel>{label}</ChipLabel>
        </ChipWrapper>
    );
}

const ChipLabel = styled.span`
    font-family: "Figtree", sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    font-style: normal;
`;

const ChipWrapper = styled.div`
    display: flex;
    width: fit-content;
    background-color: hsl(47, 88%, 63%);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
`;