import Input from './input';
import Select from './select';
import Textarea from './textarea';

export function renderInput(name, label, data, errors, handleChange, type = "text") {
    return (
        <Input
            type={type}
            name={name}
            label={label}
            value={data}
            onChange={handleChange}
            error = {errors[name]}
        />
    );
}

export function renderSelect(name, label, options, data, errors, handleChange) {
    return (
        <Select
            name={name}
            label={label}
            value={data}
            options = {options}
            onChange={handleChange}
            error = {errors[name]}
        />
    );
}

export function renderTextarea(name, label, data, errors, handleChange) {
    return (
        <Textarea
            name={name}
            label={label}
            value={data}
            onChange={handleChange}
            error = {errors[name]}
        />
    );
}

export function renderButton(label, validate){
    return (
        <button
        disabled={validate()}
        type="submit"
        className="btn btn-primary">{label}</button>
    );
}