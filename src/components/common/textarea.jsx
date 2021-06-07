import React from 'react'

const Textarea = ({name, label, error, ...rest}) => {
    return (
        <div className="form-group mb-0">
            <label htmlFor={name}>{label}</label>
            <textarea 
                {...rest}
                id={name}
                name={name}
                className="form-control"/>
            {error && <div className="invalid-feedback">{ error }</div>}
        </div>
     );
}
 
export default Textarea;