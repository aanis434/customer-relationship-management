const SwitchButton = ({ status }) => {
    
    let className = "custom-switch-description badge badge-";
    className += status === 'Active' ? 'success' : 'warning';

    return (
        <label className="custom-Button mt-2">
            <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
            <span className="custom-switch-indicator"></span>
            <span className={className}>
                {status}
            </span>
        </label>
    );
}

export default SwitchButton;