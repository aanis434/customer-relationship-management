import React from 'react'

const Input = ({ name, label, value, error, ...rest }) => {

    let className = "form-control ";
    if(value)
        className +=  error ? 'is-invalid' : 'is-valid';

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                id={name}
                name={name}
                className={className}/>
            {error && <div className="invalid-feedback">{ error }</div>}
        </div>
     );
}
 
export default Input;