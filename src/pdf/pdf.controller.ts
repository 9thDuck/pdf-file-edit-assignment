import { Body, Controller, Get, Put } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfDto } from './dto';

@Controller('pdf')
export class PdfController {
  constructor(private pdfService: PdfService) {}
  @Get('load')
  loadPdf() {
    return this.pdfService.loadPdf();
  }

  @Put('save')
  savePdf(@Body() dto: PdfDto) {
    return this.pdfService.savePdf(dto);
  }
}
