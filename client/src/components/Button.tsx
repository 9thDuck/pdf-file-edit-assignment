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
      className={`rounded border-2 border-solid border-gray-500 px-5 py-3 font-medium capitalize ${
        disabled ? 'bg-gray-300' : 'shadow-sm hover:shadow-xl duration-300 '
      }`}
    >
      {text}
    </button>
  );
};
export default Button;
