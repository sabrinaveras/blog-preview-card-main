import styled from "styled-components";

export interface LinkProps{
    url: string;
    label: string;
}

export const Link = ({url, label}: LinkProps) => {
    return <LinkWrapper href={url} >{label}</LinkWrapper>
}

const LinkWrapper = styled.a`
    text-decoration: none;
    color: hsl(0, 0%, 7%);
    font-family: "Figtree", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    font-style: normal;

    &:hover{
        color: hsl(47, 88%, 63%);
    }
`