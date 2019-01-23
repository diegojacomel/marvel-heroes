// Modules
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CryptoJS from 'crypto-js';
import { useStore, useAction } from 'easy-peasy';
import { Link } from 'react-router-dom';

// Services
import { MarvelService } from '../../services';

// Keys
import { publicKey, privateKey } from '../../utils/keys';

// Get parameter (id character)
let myUrl = window.location.href;
let parameter = myUrl.indexOf('?') !== -1 ? myUrl.substr(myUrl.indexOf('?') + 1) : null;

const Wrapper = styled.div`
    display: block;
`

const WrapperDetails = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

const Title = styled.h1`
    display: block;
    margin: 15px 0;
`

const TitleWrapper = ({ children }) => (
    <Title>
        {children}
    </Title>
)

const Image = styled.img`
    display: block;
    max-width: 100%;
    margin-bottom: 15px;
`

const ImageWrapper = ({ src, alt }) => (
    <Image src={src} alt={alt} />
)

const Description = styled.p`
    margin-bottom: 10px;
`

const DescriptionWrapper = ({ children }) => (
    <Description>
        {children}
    </Description>
)

const CustomLink = styled(Link)`
    background: ${props => props.theme.colors.primary};
    display: inline-block;
    color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing.ss} ${props => props.theme.spacing.ssm};
    text-align: center;
    border-radius: ${props => props.theme.spacing.xs};
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
    &:hover {
        background: ${props => props.theme.colors.hover.primary};
    }
`

const LinkCard = ({ to, children }) => (
    <CustomLink to={to}>
        {children}
    </CustomLink>
)

console.log(parameter)

function MoreDetails() {
    const timestamp = '1';
    const infoJoined = timestamp + privateKey + publicKey;
    const hash = CryptoJS.MD5(infoJoined).toString(CryptoJS.enc.Hex);
    const fetchDetails = useAction(dispatch => dispatch.marvel.fetchDetails);
    const marvelReducer = useStore(state => state.marvel);

    const fetchData = async () => {
        const response = await MarvelService.getCharacter(timestamp, parameter, publicKey, hash);

        fetchDetails(response.data.data.results[0]);
    }

    useEffect(() => {
        myUrl = window.location.href;
        parameter = myUrl.indexOf('?') !== -1 ? myUrl.substr(myUrl.indexOf('?') + 1) : null;

        fetchData();

        return () => {
            console.log('unmount')
        }
    }, []);

    return (
        <WrapperDetails>
            {marvelReducer.details.name
                ?
                <TitleWrapper>
                    {marvelReducer.details.name}
                </TitleWrapper>
                :
                null
            }
            {marvelReducer.details && marvelReducer.details.thumbnail && marvelReducer.details.thumbnail.path && marvelReducer.details.thumbnail.extension
                ?
                <ImageWrapper src={`${marvelReducer.details.thumbnail.path}.${marvelReducer.details.thumbnail.extension}`} alt={marvelReducer.details.name} />
                :
                null
            }
            {marvelReducer.details.description
                ?
                <DescriptionWrapper>
                    {marvelReducer.details.description}
                </DescriptionWrapper>
                :
                null
            }
            <LinkCard to="/">
                Go to Home
            </LinkCard>
        </WrapperDetails>
    )
}

export default MoreDetails;