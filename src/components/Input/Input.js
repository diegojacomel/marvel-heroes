// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldInput = styled.input`
    border: 1px solid ${props => props.theme.colors.grayMedium};
    border-radius: ${props => props.theme.spacing.xs};
    background: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing.ss} ${props => props.theme.spacing.xs};
`

function Input({ onChange, type, placeholder, ...rest }) {
    return (
        <FieldInput onChange={onChange} type={type} placeholder={placeholder} {...rest} />
    )
}

Input.defaultProps = {
    onChange: () => {},
    type: 'text',
    placeholder: 'Digite aqui seu texto'
}

Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string
}

export default Input;