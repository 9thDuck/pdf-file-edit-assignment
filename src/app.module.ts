import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [PrismaModule, PdfModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
