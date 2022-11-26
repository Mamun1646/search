import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';


import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { NoteModule } from './note/note.module';
import { AppController } from './app.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: '.local.env',
      envFilePath:".prod.env"
    }),
    
    MongooseModule.forRoot(process.env.MONGO_URL),
   
    NoteModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
