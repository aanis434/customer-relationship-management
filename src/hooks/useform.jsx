import { useState } from 'react';
import Joi from 'joi-browser';

function useForm(schema) {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  
  const validate = () => {
      const options = { abortEarly: false };
      const {error} = Joi.validate(inputs, schema, options);
      
      if (!error) return null;
      const errors = {};
      for (let item of error.details) errors[item.path[0]] = item.message;

      return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    console.log(inputs);
  }
  
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaData = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaData);
    return error ? error.details[0].message : null;        
  };
  
  const handleInputChange = ({ currentTarget: input }) => {
    const errorsData = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errorsData[input.name] = errorMessage;
    else delete errorsData[input.name];

    setInputs(inputs => ({ ...inputs, [input.name]: input.value }));
    setErrors(errorsData);
  }
    
  return {
    handleSubmit,
    validate,
    handleInputChange,
    errors,
    inputs
  };
}
  
export default useForm;