// Modules
import React from 'react';
import { useAction } from 'easy-peasy';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

// Components
import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';

// Images
import images from '../../images/images';

const HeaderWrapper = styled.header`
    background: ${props => props.theme.colors.grayDark};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SearchBar = styled(Input)`
    flex-basis: ${props => props.theme.spacing.quarter};
    font-size: ${props => props.theme.spacing.ssm};
    @media screen and (max-width: 1000px) {
        flex-basis: ${props => props.theme.spacing.middle}
    }
`

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header({ title }) {
    const fetchName = debounce(useAction(dispatch => dispatch.marvel.fetchName));

    return (
        <HeaderWrapper title={title}>
            <Container>
                <FlexWrapper>
                    <Logo src={images.marvel} alt="Logotipo da Marca" title="Logo" />
                    <SearchBar placeholder="Search a hero here..." type="text" onChange={(e) => fetchName(e.target.value)} />
                </FlexWrapper>
            </Container>
        </HeaderWrapper>
    )
}

Header.defaultProps = {
    title: 'Header'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;