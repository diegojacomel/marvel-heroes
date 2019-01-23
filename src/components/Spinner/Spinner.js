// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Spinner = ({ isLoading }) => {
    if (isLoading) {
        return (
            <StyledSpinner viewBox="0 0 50 50" isLoading={isLoading}>
                <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                />
            </StyledSpinner>
        )
    } else {
        return null
    }

};

const StyledSpinner = styled.svg`
    position: absolute;
    animation: rotate 2s linear infinite;
    width: 50px;
    height: 50px;
    margin: ${props => props.theme.spacing.sm};
    
    & .path {
        stroke: #127f9b;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
    
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;

Spinner.propTypes = {
    isLoading: PropTypes.bool
}

Spinner.defaultProps = {
    isLoading: false
}

export default Spinner;