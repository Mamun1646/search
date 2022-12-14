import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { MongooseModule } from '@nestjs/mongoose';
import { QuranModule } from './quran/quran.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { NoteModule } from './note/note.module';
import { AppController } from './app.controller';
import { QuranService } from './quran/quran.service';
import { DatabaseModule } from './database/database.module';
import { ImporterModule } from './translatations-import/Importer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.local.env',
      // envFilePath:".prod.env"
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,

      playground: false,
      cache: 'bounded',

      // playground: true,
      //  cache: 'bounded',
      //ersistedQueries: false,

      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    QuranModule,
    NoteModule,
    DatabaseModule,
    ImporterModule,
  ],
  controllers: [AppController],
  providers: [QuranService],
})
export class AppModule {}
