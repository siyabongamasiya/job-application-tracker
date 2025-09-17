import React from "react";

interface FloatingInputProps {
  label: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField = ({
  label,
  value,
  type,
  onChange,
  placeholder,
}: FloatingInputProps) => {
  return (
    <div className="floating-input">
      <label className="floating-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
