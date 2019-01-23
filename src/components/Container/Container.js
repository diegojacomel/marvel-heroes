// Modules
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(${props => props.theme.spacing.full} - ${props => props.theme.spacing.lg});
    padding: ${props => props.theme.spacing.none} ${props => props.theme.spacing.ssm};
`

const ContainerWrapper = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

function Container({ children }) {
    return (
        <ContainerWrapper id="testContainer">
            {children}
        </ContainerWrapper>
    )
}

export default Container;