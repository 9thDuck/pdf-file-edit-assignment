import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import * as path from 'path';

export const downloadFileAndAddToDb = async (
  db,
  fileId = '1cVVEue6KoJdPsUnWr4Uh1hMGeHGinxY6',
) => {
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
    keyFile: path.join('credentials.json'),
  });
  const service = google.drive({
    version: 'v3',
    auth,
  });

  const pdfFileAsBase64String = await new Promise((res, rej) => {
    const chunks = [];
    try {
      service.files.get(
        { fileId, alt: 'media' },
        { responseType: 'stream' },
        (err, response) => {
          if (err) {
            console.log(err);
            return;
          } else if (response) {
            const { data } = response;
            data
              .on('data', (chunk) => chunks.push(Buffer.from(chunk)))
              .on('end', () => {
                console.log(
                  'downloaded the file, converting to base64 string to add to db',
                );
                const fileBuffer = Buffer.concat(chunks);
                const base64File = fileBuffer.toString('base64');
                res(base64File);
                // res(fileBuffer);
              })
              .on('error', (err) => {
                console.log(err);
                rej(null);
                return process.exit();
              });
          }
        },
      );
    } catch (err) {
      rej(null);
      console.log('pdf download error', err);
    }
  });

  if (!pdfFileAsBase64String) {
    console.log('Failed to add the file to db. Please try again');
  } else {
    try {
      const fileAddRes = await db.file.create({
        data: {
          filename: 'example.pdf',
          fileData: pdfFileAsBase64String,
        },
      });
      console.log('Successfully added file to db');
    } catch (error: any) {
      console.log('Failed to add the file to db', error);
    }
  }
};
