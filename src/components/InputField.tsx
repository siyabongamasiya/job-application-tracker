import React from "react";

type FloatingInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputField: React.FC<FloatingInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="floating-input">
      <label className="floating-label">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
