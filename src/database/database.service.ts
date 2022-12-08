import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quran, QuranDocument } from 'src/quran/schema/quran.schema';
import { Translation, TranslationDocument } from './schema/database.schema';
import { data } from '../data/ahmedALi';
import { Translator, TranslatorDocument } from './schema/translator.schema';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Quran.name) private quranModel: Model<QuranDocument>,
    @InjectModel(Translation.name)
    private translationModel: Model<TranslationDocument>,
    @InjectModel(Translator.name)
    private translatorModel: Model<TranslatorDocument>,
  ) {}

  async findSurah() {
    const surahs = data.quran.sura;
    const translator = {
      id: 3,
      name: 'Ar Berry',
      language: 'en',
    };
  
    await this.translatorModel.create(translator)
  
    const translations = [];
    for (let i = 0; i < 114; ++i) {
      const translatorSura = surahs[i];

      const quranSura = await this.quranModel
        .findOne({ id: parseInt(translatorSura.index) })
        .exec();

      translatorSura.aya.map((a) => {
        const translation = {
          translator: translator,
          surah_id:quranSura.id,
          surah_name:quranSura.transliteration,
          verse: {},
          translated_text: '',
        };
     
        const verse = quranSura.verses.find((v) => a.index == v.id);

        translation.verse = verse;
        translation.translated_text = a.text;

        translations.push(translation);
      });
    }
 console.log(translator)
     await this.translationModel.create(translations);
  }
}
