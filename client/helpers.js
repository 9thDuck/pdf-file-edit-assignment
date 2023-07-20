import axios from 'axios';
import { Buffer } from 'buffer';

export const getElement = (strToFindEleWith = '') => {
  if (!strToFindEleWith || typeof strToFindEleWith !== 'string') return;

  return document.body.querySelector(strToFindEleWith);
};

export const base64ToBufferArr = (base64) => {
  return Buffer.from(base64, 'base64');
};

export const clientInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

const infoText = getElement('#info-text');

export const setErrorText = (type) => {
  infoText.classList.add('text-red-600');
  infoText.innerText = `Something went wrong while ${type}ing PDF file. Please try again later`;
};
export const resetErrorText = () => {
  if (infoText.classList.contains('text-red-600')) {
    infoText.classList.remove('text-red-600');
  }
  infoText.innerText = ``;
};

export const getFileData = async () => await clientInstance.get('pdf/load');
