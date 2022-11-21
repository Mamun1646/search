import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuranService } from './quran.service';
import { Quran } from './schema/quran.schema';


@Resolver(() => Quran)
export class QuranResolver {
  constructor(private readonly quranService: QuranService) {}

  @Query(() => [Quran], { name: 'Quran' })
  findAll() {
    return this.quranService.findAll();
  }
  @Query(() => [Quran])
  async Surah_Name(@Args('surah_name') surah: string): Promise<Quran[]> {
    return await this.quranService.versesFindBySurah(surah);
  }
  @Query(() => [Quran])
 keySearch(@Args('key') keyword: string) {
    return this.quranService.versesFindByWord(keyword);
  }
}
