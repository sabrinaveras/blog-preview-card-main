import styled from "styled-components";

export interface AvatarProps{
    url: string;
    label: string;
}

export const Avatar = ({url, label}:AvatarProps) => {
    return (
        <AvatarWrapper>
            <AvatarImage src={url} alt="avatar"/>
            <AvatarLabel>{label}</AvatarLabel>
        </AvatarWrapper>
    );
}

const AvatarImage = styled.img`
    vertical-align: middle;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
`;

const AvatarLabel = styled.span`
    font-family: "Figtree", sans-serif;
    font-size: 1rem;
    font-weight: 800;
    font-style: normal;
`;

const AvatarWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;