import styled from "styled-components";
import { CardBorder } from "../../components/card/cardBorder";
import { CardImage } from "../../components/card";
import { Chip } from "../../components/chip";
import { Link } from "../../components/link";
import { Avatar } from "../../components/avatar";

export const Blog = () => {
    return (
        <BlogWrapper>
            <CardBorder>
                <BlogContent>
                    <CardImage url={"/images/illustration-article.svg"} />

                    <Chip label={"Learning"} />

                    <Caption>Published 21 Dec 2023</Caption>

                    <Link label={"HTML & CSS foundations"} url={"www.google.com"} />
    
                    <Description>
                        These languages are the backbone of every website, defining structure, content, and presentation.
                    </Description>

                    <Avatar url={"/images/image-avatar.webp"} label={"Greg Hooper"} />
                </BlogContent>
            </CardBorder>
        </BlogWrapper>
    );
};

const Description = styled.span`
    font-family: "Figtree", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;

    color: hsl(0, 0%, 50%);
`;

const Caption = styled.span`
    font-family: "Figtree", sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    font-style: normal;
`;

const BlogContent = styled.div`
    background-color: hsl(0, 0%, 100%);
    border-radius: 1rem;
    padding: 1rem;

    max-width: 20.938rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const BlogWrapper = styled.div`
    width: 100%;
    height: 100vh;

    background-color: hsl(47, 88%, 63%);

    display: flex;
    justify-content: center;
    align-items: center;
`;