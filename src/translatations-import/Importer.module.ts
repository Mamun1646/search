import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Quran2, Quran2Schema } from './Schema/quran.schema';
import { TranslatationsImportController } from './translatations-import.controller';
import { TranslatationsImportService } from './translatations-import.service';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: Quran2.name, schema: Quran2Schema }]),
  ],
 
  controllers: [TranslatationsImportController],
  providers: [TranslatationsImportService],
})
export class ImporterModule {}
