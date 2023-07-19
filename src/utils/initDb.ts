import { downloadFileAndAddToDb } from '.';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function checkDbForFileAndAddIfNeeded() {
  try {
    const pdfFileExistsInDb = await db.file.findUniqueOrThrow({
      where: { filename: 'example.pdf' },
    });
    console.log('Pdf file already exists in the db');
  } catch (err) {
    console.log(`Pdf file doesn't exist in the db, adding it `);
    // Download file and add to db
    await downloadFileAndAddToDb(db);
  }
}
