import { useRecoilState } from 'recoil';
import { pdfState } from '../../../atoms/pdf';

export const usePdf = () => {
  const [{ fileData }, setPdfState] = useRecoilState(pdfState);

  const loadPdfHandler = () => {
    console.log('load pdf button clicked');
  };

  const savePdfPageHandler = () => {
    console.log('save pdfbutton clicked');
  };

  return { fileData, loadPdfHandler, savePdfPageHandler };
};
