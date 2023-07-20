import {
  getElement,
  getFileData,
  resetErrorText,
  setErrorText,
} from './helpers';
import { Buffer } from 'buffer';
import { PDFDocument } from 'pdf-lib';

const loadPdfBtn = getElement('#load-pdf-btn');
const savePdfBtn = getElement('#save-pdf-btn');

const loadPdfHandler = async () => {
  resetErrorText();
  try {
    const {
      data: {
        file: { filename, fileData },
      },
    } = await getFileData();

    const pdfDoc = await PDFDocument.load(fileData);

    const pdfBytes = await pdfDoc.save();
    getElement('#pdf-container').src = URL.createObjectURL(
      new Blob([pdfBytes], { type: 'application/pdf' }),
    );
    savePdfBtn.disabled = false;
  } catch (error) {
    console.log(error);
    setErrorText('load');
  }
};

const savePdfHandler = async () => {
  resetErrorText();
  try {
    const blobUrl = getElement('#pdf-container').src;
    const fetchRes = await fetch(blobUrl);
    const arrayBuffer = await fetchRes.arrayBuffer();
    const pdfDoc = PDFDocument.load(arrayBuffer);

    const form = pdfDoc.getForm();
    form.flatten();
    // const pdfBytes = pdfDoc.save();
    // const blobUrl = URL.createObjectURL(
    //   new Blob([pdfBytes], { type: 'application/pdf' }),
    // );

    // const a = document.createElement('a');
    // a.href = blobUrl;
    // a.download = 'example.pdf';
    // a.click();
  } catch (error) {
    console.log(error);
    setErrorText('save');
  }
};

loadPdfBtn.addEventListener('click', loadPdfHandler);
savePdfBtn.addEventListener('click', savePdfHandler);
