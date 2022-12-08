"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateNoteInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var CreateNoteInput = /** @class */ (function () {
    function CreateNoteInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return String; }, { nullable: true })
    ], CreateNoteInput.prototype, "username");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], CreateNoteInput.prototype, "surah");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], CreateNoteInput.prototype, "verse");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }, { nullable: true })
    ], CreateNoteInput.prototype, "note");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], CreateNoteInput.prototype, "day");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], CreateNoteInput.prototype, "month");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }, { nullable: true })
    ], CreateNoteInput.prototype, "date");
    CreateNoteInput = __decorate([
        (0, graphql_1.InputType)()
    ], CreateNoteInput);
    return CreateNoteInput;
}());
exports.CreateNoteInput = CreateNoteInput;
