import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quran, QuranDocument } from './schema/quran.schema';

@Injectable()
export class QuranService {
  constructor(
    @InjectModel(Quran.name) private quranModel: Model<QuranDocument>,
  ) {}

  async findAll() {
    return await this.quranModel.find();
  }

  async versesFindBySurah(data: string): Promise<Quran[]> {
    const regex = new RegExp(data, 'i');
    return await this.quranModel.find({
      transliteration:  { $regex: regex }
    });
  }
  async versesFindByWord(data: string):Promise<Quran[]> {

    // const regex = new RegExp(data, 'i');
    // return await this.quranModel.find({
    //   'verses.translation': { $regex: regex },
    // });

const regex = new RegExp(data, 'i');
    const result = await this.quranModel.find(
      {
        'verses.translation': { $regex: regex },
      })
     
    

    // const result = await this.quranModel.aggregate(
    //   // Start with a $match pipeline which can take advantage of an index and limit documents processed
    //   {
    //     $match: {
    //       'verses.translation': "meem",
    //     },
    //   },
    //   { $unwind: '$verses.translation' },
    //   {
    //     $match: {
    //       'verses.translation': { $regex: regex },
    //     },
    //   },
    // );
    return result;
//   const regex = new RegExp(data, 'i');
//     return await this.quranModel.find ({ $text: { $regex: regex } },
//    { score: { $meta: "textScore" } }
// ).sort( { score: { $meta: "textScore" } } )


// .find({ $text: { $search: data } }, { score: { $meta: 'textScore' } })
//       .sort({ score: { $meta: 'textScore' } });


  }
}
