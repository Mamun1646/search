import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { MongooseModule } from '@nestjs/mongoose';
import { QuranModule } from './quran/quran.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { NoteModule } from './note/note.module';
import { AppController } from './app.controller';
@Module({
  imports: [


  GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
       cache: 'bounded',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MongooseModule.forRoot('mongodb+srv://quran:1234@cluster0.kemb19w.mongodb.net/quran-sharif'),
    QuranModule,
    NoteModule,
  
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
