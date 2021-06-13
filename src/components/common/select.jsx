import React from 'react'

const Select = ({ name, label, options, value, error, ...rest }) => {
    
    let className = "form-control ";
    if(value)
        className += error ? 'is-invalid' : 'is-valid';
    
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name}
                id={name}
                {...rest}
                className={className}>
                <option value="" />
                {options.map(option =>
                    <option key={option._id} value={option._id}>{ option.name }</option>
                )}
            </select>
            {error && <div className="alert alert-danger">{ error }</div> }
        </div>
     );
}
 
export default Select;