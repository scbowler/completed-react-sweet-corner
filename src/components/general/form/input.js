import React from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const Input = ({color, input, meta, placeholder, type }) => {
    return (
        <div className={`input-field`}>
            <input {...input} className={`brown-text ${color}`}  placeholder={placeholder} type={type}/>
        </div>
    );
}

Input.propTypes = {
    color: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string
};

Input.defaultProps = {
    color: 'red',
    type: 'text'
}

export default Input;
