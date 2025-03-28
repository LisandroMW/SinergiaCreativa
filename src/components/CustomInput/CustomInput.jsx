import "./CustomInput.css";

function CustomInput({ text, id, type, onChange }) {
    return (
        <div className="input-container">
            <label className="label" htmlFor={id}>{text}</label>
            <span className="underline"></span>            
            <input className="input" type={type} id={id} onChange={onChange} required />
            <span className="underline"></span>
        </div>
    );
}

export default CustomInput;