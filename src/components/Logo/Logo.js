// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.h1`
    margin: ${props => props.theme.spacing.none};
    line-height: 0.8;
`

const LogoWrapper = ({ children, title }) => (
    <Wrapper title={title}>
        {children}
    </Wrapper>
);

const Img = styled.img`
    height: ${props => props.theme.spacing.gt};
`

const ImgLogo = ({ src, alt }) => (
    <Img src={src} alt={alt} />
)

function Logo({ src, alt, title }) {
    return (
        <LogoWrapper title={title} id="testLogo">
            <ImgLogo src={src} alt={alt} id="testImgLogo" />
        </LogoWrapper>
    )
}

Logo.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
};

Logo.defaultProps = {
    src: '#',
    alt: 'Logo',
    title: 'Logo',
};

export default Logo;