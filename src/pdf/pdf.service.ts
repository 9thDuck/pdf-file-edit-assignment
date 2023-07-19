import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PdfDto } from './dto';

@Injectable()
export class PdfService {
  constructor(private prisma: PrismaService) {}

  async loadPdf() {
    const file = await this.prisma.file.findUnique({
      where: {
        filename: 'example.pdf',
      },
    });
    // This won't happen unless the request to google drive to download the pdf and store it to the db has failed
    if (!file) {
      throw new NotFoundException('Pdf file not found');
    }

    return { file };
  }

  async savePdf({ fileData }: PdfDto) {
    const file = await this.prisma.file.update({
      where: { filename: 'example.pdf' },
      data: {
        fileData,
      },
    });
    if (!file) {
      throw new InternalServerErrorException(
        `File changes couldn't be saved. Please try again later.`,
      );
    }

    return { file };
  }
}
