import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quran, QuranDocument } from './schema/quran.schema';

@Injectable()
export class QuranService {
  constructor(
    @InjectModel(Quran.name) private quranModel: Model<QuranDocument>,
  ) { }

  async findSurah(id:number) {
    console.log(typeof (id))
  
    
    const ans = await this.quranModel.findOne({ id: id }).exec();

    return ans;
  }
  async findAll() {
    const ans = await this.quranModel.find();
    console.log(typeof(ans[0].id))
    return ans;
    
  }

  async versesFindBySurah(data: string): Promise<Quran[]> {
    const regex = new RegExp(data, 'i');
    return await this.quranModel.find({
      transliteration: { $regex: regex }
    });
  }
  async versesFindByWord(data: string): Promise<Quran[]> {

    // const regex = new RegExp(data, 'i');
    // return await this.quranModel.find({
    //   'verses.translation': { $regex: regex },
    // });

    const regex = new RegExp(data, 'i');
    const result = await this.quranModel.find(
      {},
      {
        verses: {
          $elemMatch: {
            translation: { $regex: regex },
          },
        },
        _id: 0,
        transliteration: 1,
        translation: 1,
        id: 1,
        
      },
    );



    return result;
  }

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

  //   const regex = new RegExp(data, 'i');
  //     return await this.quranModel.find ({ $text: { $regex: regex } },
  //    { score: { $meta: "textScore" } }
  // ).sort( { score: { $meta: "textScore" } } )


  // .find({ $text: { $search: data } }, { score: { $meta: 'textScore' } })
  //       .sort({ score: { $meta: 'textScore' } });


 

  // const regex = new RegExp(data, 'i');
  //     const result = await this.quranModel.find(
  //       {
  //         'verses.translation': { $regex: regex },
  //       })
     
    

  //     // const result = await this.quranModel.aggregate(
  //     //   // Start with a $match pipeline which can take advantage of an index and limit documents processed
  //     //   {
  //     //     $match: {
  //     //       'verses.translation': "meem",
  //     //     },
  //     //   },
  //     //   { $unwind: '$verses.translation' },
  //     //   {
  //     //     $match: {
  //     //       'verses.translation': { $regex: regex },
  //     //     },
  //     //   },
  //     // );
  //     return result;
  // //   const regex = new RegExp(data, 'i');
  // //     return await this.quranModel.find ({ $text: { $regex: regex } },
  // //    { score: { $meta: "textScore" } }
  // // ).sort( { score: { $meta: "textScore" } } )


  // // .find({ $text: { $search: data } }, { score: { $meta: 'textScore' } })
  // //       .sort({ score: { $meta: 'textScore' } });


}