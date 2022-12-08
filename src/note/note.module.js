"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoteModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var note_resolver_1 = require("./note.resolver");
var note_service_1 = require("./note.service");
var note_schema_1 = require("./schema/note.schema");
var note_controller_1 = require("./note.controller");
var NoteModule = /** @class */ (function () {
    function NoteModule() {
    }
    NoteModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: note_schema_1.Note.name, schema: note_schema_1.NoteSchema }]),
            ],
            controllers: [note_controller_1.NoteController],
            providers: [note_service_1.NoteService, note_resolver_1.NoteResolver]
        })
    ], NoteModule);
    return NoteModule;
}());
exports.NoteModule = NoteModule;
