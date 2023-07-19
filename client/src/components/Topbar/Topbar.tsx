import React from 'react';
import Button from '../Button';
import { usePdf } from './hooks/usePdf';

const Topbar: React.FC = () => {
  const { fileData, loadPdfHandler, savePdfPageHandler } = usePdf();

  return (
    <div className="flex bg-green-600 p-4 gap-4">
      <Button text="load pdf" onClick={loadPdfHandler} />
      <Button
        text="save pdf"
        onClick={savePdfPageHandler}
        disabled={!fileData}
      />
    </div>
  );
};
export default Topbar;
