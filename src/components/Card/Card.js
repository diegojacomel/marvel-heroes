// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.colors.white};
    margin: 15px;
    padding: 20px;
    border-radius: ${props => props.theme.spacing.xs};
    flex-basis: calc(33.33% - 60px);
    &:nth-child(3n + 1) {
        margin-left: ${props => props.theme.spacing.none};
    }
    &:nth-child(3n + 3) {
        margin-right: ${props => props.theme.spacing.none};
    }
    @media screen and (max-width: 1000px) {
        flex-basis: calc(50% - 60px);
        &:nth-child(2n + 1) {
            margin-left: ${props => props.theme.spacing.none};
        }
        &:nth-child(2n + 2) {
            margin-right: ${props => props.theme.spacing.none};
        }
    }
    @media screen and (max-width: 500px) {
        flex-basis: calc(100%);
        margin-left: ${props => props.theme.spacing.none};
        margin-right: ${props => props.theme.spacing.none};
    }
`

const WrapperCard = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

const Info = styled.div`
    display: block;
`

const InfoCard = ({ children }) => (
    <Info>
        {children}
    </Info>
)

const Name = styled.h2`
    font-size: ${props => props.theme.spacing.md};
    margin-top: ${props => props.theme.spacing.none};
    min-height: ${props => props.theme.spacing.xxg};
`

const NameCard = ({ children }) => (
    <Name>
        {children}
    </Name>
)

const Figure = styled.figure`
    max-width: 100%
    overflow: hidden;
    margin: 0;
    position: relative;
    height: 250px;
    margin-bottom: ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.spacing.xs};
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50%;
    margin-top: -50%;
`

const ImageCard = ({ src }) => (
    <Figure>
        <Image src={src} />
    </Figure>
)

const Description = styled.div`
    font-size: ${props => props.theme.spacing.ssm}
    margin-bottom: ${props => props.theme.spacing.ssm};
`

const DescriptionCard = ({ children }) => (
    <Description>
        {children}
    </Description>
)

const CustomLink = styled(Link)`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing.ss} ${props => props.theme.spacing.ssm};
    text-align: center;
    border-radius: ${props => props.theme.spacing.xs};
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background: ${props => props.theme.colors.hover.primary};
    }
`

const LinkCard = ({ to, children }) => (
    <CustomLink to={to}>
        {children}
    </CustomLink>
)

function Card({ name, urlImage, description, buttonText, to }) {
    return (
        <WrapperCard>
            <InfoCard>
                <NameCard>
                    {name}
                </NameCard>
                <ImageCard src={urlImage} />
                <DescriptionCard>
                    {description}
                </DescriptionCard>
            </InfoCard>
            <LinkCard to={to ? to : '/'}>
                {buttonText}
            </LinkCard>
        </WrapperCard>
    )
}

export default Card;