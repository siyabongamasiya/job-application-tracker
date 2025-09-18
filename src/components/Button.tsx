import React from "react";

interface ButtonProps {
  text: string;
  style: React.CSSProperties;
  onClick(): void;
}

export default function Button({ text, style, onClick }: ButtonProps) {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}
