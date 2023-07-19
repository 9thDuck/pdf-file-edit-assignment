import { atom } from 'recoil';

interface DefaultState {
  fileData: string | null;
}

const defaultState: DefaultState = {
  fileData: null,
};

export const pdfState = atom({ key: 'pdfState', default: defaultState });
