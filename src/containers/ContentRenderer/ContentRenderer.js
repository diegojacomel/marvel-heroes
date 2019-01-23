// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import Container from '../../components/Container/Container';

const Wrapper = styled.div`
    display: block;
    padding-bottom: 10px;
`

const ContentWrapper = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

function ContentRenderer({ children }) {
    return (
        <ContentWrapper>
            <Container>
                {children}
            </Container>
        </ContentWrapper>
    )
}

export default ContentRenderer;