import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NoteService } from './note.service';
import { Note } from './schema/note.schema';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { Param } from '@nestjs/common';


@Resolver(() => Note)
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Mutation(() => Note)
  createNote(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.noteService.create(createNoteInput);
  }

  @Query(() => [Note], { name: 'note' })
  findAll() {
    return this.noteService.findAll();
  }
  @Query(() => [Note])
  async Search_Note(@Args('note_text') note: string): Promise<Note[]> {
    return await this.noteService.Search_Note(note);
  }
  @Query(() => [Note])
  async filterNote(@Args('day') day: Number) {
    return await this.noteService.filterNote(day);
  }
}
