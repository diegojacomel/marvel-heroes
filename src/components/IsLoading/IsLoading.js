// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Spinner from '../Spinner/Spinner';

const Wrapper = styled.div`
    display: flex;
    justify-content: ${props => props.centerIcon ? 'center' : null};
    height: 70px;
`

function IsLoading({ centerIcon, isLoading }) {
    return (
        <div>
            {isLoading
                ?
                <Wrapper centerIcon={centerIcon}>
                    <Spinner isLoading={isLoading} />
                </Wrapper>
                :
                null
            }
        </div>
    )
}

IsLoading.propTypes = {
    isLoading: PropTypes.bool
}

IsLoading.defaultProps = {
    isLoading: false
}

export default IsLoading;