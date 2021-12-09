import "./input.scss";

const Input = ({ label, type, value, onChange }) => {
  return (
    <div className="input-comp">
      <label htmlFor={label}>{label}</label>
      <input type={type} value={value} onChange={onChange} id={label} />
    </div>
  );
};

export default Input;
