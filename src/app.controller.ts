import {
  Controller,
  Get,

} from '@nestjs/common';
import {data} from './data/ahmedALi.js';
import { QuranService } from './quran/quran.service.js';


@Controller()
export class AppController {
  constructor(private readonly quranService: QuranService) {}

  @Get('translation-import')
  async findAll() {
    
    const surahs = data.quran.sura;
    const translator = {
      _id:'63903339c0780cb97f1c1978',
      name: 'Ahmed Ali',
      language: 'en',
    };

    
    

    const translations = []
    
    const translatorSura = surahs[0];
    const quranSura = await this.quranService.findSurah(parseInt(translatorSura.index));
    translatorSura.aya.map(a => {
    const translation = {
      translator: translator,
      verse: {},
      translated_text: '',
    };
      const verse = quranSura.verses.find(v => a.index == v.id)
       
      translation.verse = verse;
      translation.translated_text = a.text;

      translations.push(translation);
    })
    return translations;
    
  }
}
