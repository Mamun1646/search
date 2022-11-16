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

  
  

 
}
