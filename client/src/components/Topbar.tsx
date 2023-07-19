import React from 'react';
import Button from './Button';

type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  return (
    <div className="flex bg-green-600 p-4 gap-4">
      <Button text="load pdf" onClick={() => {}} />
      <Button text="save pdf" onClick={() => {}} />
    </div>
  );
};
export default Topbar;
