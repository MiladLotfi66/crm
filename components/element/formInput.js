function formInput({ name, label, value, type, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
      />
    </div>
  );
}

export default formInput;
