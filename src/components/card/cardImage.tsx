import styled from "styled-components";

export interface CardImageProps{
    url: string;
}

export const CardImage = ({url}: CardImageProps) => {
    return <CardImageWrapper src={url} alt={"card image"} />;
}

const CardImageWrapper = styled.img`
    vertical-align: middle;
    border-radius: 1rem;

    max-width: 336px;
`;