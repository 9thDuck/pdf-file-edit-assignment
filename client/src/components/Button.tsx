import React from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text = '', onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded border-2 border-solid border-black px-5 py-3 font-medium capitalize"
    >
      {text}
    </button>
  );
};
export default Button;
