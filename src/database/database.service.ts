import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quran, QuranDocument } from 'src/quran/schema/quran.schema';
import { Translation, TranslationDocument } from './schema/database.schema';
import { Translator, TranslatorDocument } from './schema/translator.schema';
import { CreateKeywordTranslatorIdInput } from './dto/create-keyword-translator-id.input';

import {data} from "./../data/ahmedALi"
interface SearchDto {
  keyword: string;
  translator_id: number;
}
@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Quran.name) private quranModel: Model<QuranDocument>,
    @InjectModel(Translation.name)
    private translationModel: Model<TranslationDocument>,
    @InjectModel(Translator.name)
    private translatorModel: Model<TranslatorDocument>,
  ) {}

  async insertTranslations(translator: any) {
    // surahs from al-berry
    const surahs =data.quran.sura;
    // create translator
    // await this.translatorModel.create(translator);

    const translations = [];

    for (let i = 0; i < surahs.length; ++i) {
      const translatorSura = surahs[i];

      // find sura base on translation index of sura
      const quranSura = await this.quranModel
        .findOne({ id: parseInt(translatorSura.index) })
        .exec();

      //looping through ayas of selected quranSurah
      for (let aIndex = 0; aIndex < translatorSura.aya.length; aIndex++) {
        //pick a translation
        const a = translatorSura.aya[aIndex];

        const translation = {
          translator: translator,

          surah_id: quranSura.id,
          surah_name: quranSura.transliteration,

          verse: quranSura.verses.find((v) => a.index == v.id),
          translated_text: a.text,
        };

        translations.push(translation);
      }
    }

    for (const translation of translations) {
      const t = new this.translationModel(translation);
      t.save();
    }

    // console.log(translations);
  }

  //every verse search by given parameter
  async versesFindByWord(data: SearchDto): Promise<Translation[]> {
    const { keyword } = data;

    console.log(keyword, ' ', data.translator_id);
    const regex = new RegExp(keyword, 'i');

    return await this.translationModel.find(
      {
        $and: [
          { 'translator.id': { $in: data.translator_id } },
          {
            translated_text: { $regex: regex },
          },
        ],
      },
      {
        _id: 0,
        translated_text: 1,
        'translator.id': 1,
        'translator.name': 1,
        'verse.id':1
      },
    );
  }

  //every verse search by given parameter using post request 
  async versesSearchByWord(searchParameter: CreateKeywordTranslatorIdInput) {
    const { keyword,translator_id } = searchParameter;

    console.log(keyword,translator_id);
    const regex = new RegExp(keyword, 'i');

    return await this.translationModel.find(
      {
        $and: [
          { 'translator.id': { $in: translator_id } },
          {
            translated_text: { $regex: regex },
          },
        ],
      },
      {
        _id: 0,
        translated_text: 1,
        'translator.id': 1,
        'translator.name': 1,
        'verse.id': 1,
        'verse.text': 1,
        surah_name:1,
        surah_id:1
      },
    );
  }
}
