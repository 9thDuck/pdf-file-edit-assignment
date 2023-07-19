import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded border-2 border-solid border-black px-5 py-3 font-medium capitalize"
    >
      {text}
    </button>
  );
};
export default Button;
