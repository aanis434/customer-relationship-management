import React from 'react'

const Textarea = ({ name, label, value, error, ...rest }) => {

    let className = "form-control ";
    if(value)
        className += error ? 'is-invalid' : 'is-valid';
    
    return (
        <div className="form-group mb-0">
            <label htmlFor={name}>{label}</label>
            <textarea 
                {...rest}
                id={name}
                name={name}
                className={className}/>
            {error && <div className="invalid-feedback">{ error }</div>}
        </div>
     );
}
 
export default Textarea;