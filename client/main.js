import {
  clientInstance,
  getElement,
  getFileData,
  resetInfoText,
  saveFileData,
  setErrorText,
  setSuccessText,
} from './helpers';
// import { Buffer } from 'buffer';
import { PDFDocument } from 'pdf-lib';

const loadPdfBtn = getElement('#load-pdf-btn');
const savePdfBtn = getElement('#save-pdf-btn');

const loadPdfHandler = async () => {
  resetInfoText();
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
    setSuccessText('load');
    savePdfBtn.disabled = false;
  } catch (error) {
    console.log(error);
    setErrorText('load');
  }
};

const savePdfHandler = async () => {
  resetInfoText();
  try {
    // const iframeRef = (frameRef) => {
    //   return frameRef.contentWindow
    //     ? frameRef.contentWindow.document
    //     : frameRef.contentDocument;
    // };

    // const iframeContanet = iframeRef(getElement('#pdf-container'));
    const blobUrl = getElement('#pdf-container').src;
    const fetchRes = await fetch(blobUrl);
    const arrayBuffer = await fetchRes.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const form = pdfDoc.getForm();
    form.flatten();
    const pdfBytes = await pdfDoc.save();
    const fileData = pdfBytes.toString('base64');
    const savePdfToServerRes = await saveFileData(fileData);
    setSuccessText('sav');
  } catch (error) {
    console.log(error);
    setErrorText('save');
  }
};

loadPdfBtn.addEventListener('click', loadPdfHandler);
savePdfBtn.addEventListener('click', savePdfHandler);
