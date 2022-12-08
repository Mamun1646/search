import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { Translation, TranslationSchema } from './schema/database.schema';
import { Quran, QuranSchema } from 'src/quran/schema/quran.schema';
import { Translator, TranslatorSchema } from './schema/translator.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Translation.name, schema: TranslationSchema },
    ]),
    MongooseModule.forFeature([{ name: Quran.name, schema: QuranSchema }]),
    MongooseModule.forFeature([
      { name: Translator.name, schema: TranslatorSchema },
    ]),
  ],

  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {}
