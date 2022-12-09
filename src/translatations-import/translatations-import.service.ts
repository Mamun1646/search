import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quran2, Quran2Document } from './Schema/quran.schema';

@Injectable()
export class TranslatationsImportService {
  constructor(
    @InjectModel(Quran2.name) private quranModel: Model<Quran2Document>,
  ) { }
    
    
    
   getTranslation() {
        return  this.quranModel.find()
    }
}





  