import { useState } from 'react';

const useForm = () => {
    const [inputs, setInputs] = useState({});
    // const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
      event.preventDefault();
        
      console.log(inputs);
    }
    
    const handleInputChange = ({currentTarget: input}) => {
      // const errors = { ...errors };
      // const errorMessage = this.validateProperty(input);
      // if (errorMessage) errors[input.name] = errorMessage;
      // else delete errors[input.name];

      setInputs(inputs => ({ ...inputs, [input.name]: input.value }));
      // setErrors(errors);
    }
    
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
}
  
export default useForm;