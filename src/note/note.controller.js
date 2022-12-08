"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.NoteController = void 0;
var common_1 = require("@nestjs/common");
var NoteController = /** @class */ (function () {
    function NoteController(noteService) {
        this.noteService = noteService;
    }
    NoteController.prototype.findNote = function () {
        return this.noteService.findAll();
    };
    NoteController.prototype.filter = function (param) {
        console.log(param.day);
        return this.noteService.filter(param.day);
    };
    NoteController.prototype.createNote = function (createNoteInput) {
        return this.noteService.create(createNoteInput);
    };
    __decorate([
        (0, common_1.Get)()
    ], NoteController.prototype, "findNote");
    __decorate([
        (0, common_1.Get)(":day"),
        __param(0, (0, common_1.Param)())
    ], NoteController.prototype, "filter");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], NoteController.prototype, "createNote");
    NoteController = __decorate([
        (0, common_1.Controller)('note')
    ], NoteController);
    return NoteController;
}());
exports.NoteController = NoteController;
