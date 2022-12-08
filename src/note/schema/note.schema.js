"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoteSchema = exports.Note = void 0;
var graphql_1 = require("@nestjs/graphql");
var mongoose_1 = require("@nestjs/mongoose");
var Note = /** @class */ (function () {
    function Note() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], Note.prototype, "_id");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, graphql_1.Field)(function () { return String; }, { nullable: true })
    ], Note.prototype, "username");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], Note.prototype, "surah");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], Note.prototype, "verse");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, graphql_1.Field)(function () { return String; }, { nullable: true })
    ], Note.prototype, "note");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], Note.prototype, "day");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], Note.prototype, "month");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, graphql_1.Field)(function () { return String; }, { nullable: true })
    ], Note.prototype, "date");
    Note = __decorate([
        (0, mongoose_1.Schema)(),
        (0, graphql_1.ObjectType)()
    ], Note);
    return Note;
}());
exports.Note = Note;
exports.NoteSchema = mongoose_1.SchemaFactory.createForClass(Note);
