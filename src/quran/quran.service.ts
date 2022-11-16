import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quran, QuranDocument } from './schema/quran.schema';

@Injectable()
export class QuranService {
  constructor(@InjectModel(Quran.name) private quranModel: Model<QuranDocument>) {}


  async findAll() {
    return await this.quranModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} quran`;
  }



 
}
