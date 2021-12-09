import "./input.scss";

const Input = ({ label, touched, errors, ...rest }) => {
  return (
    <div className="input-comp">
      <label htmlFor={label}>{label}</label>
      <input {...rest} id={label} />
      <div className="input-comp__error">{touched && errors}</div>
    </div>
  );
};

export default Input;
