"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Verses = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var graphql_1 = require("@nestjs/graphql");
var Verses = /** @class */ (function () {
    function Verses() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, mongoose_1.Prop)({ type: String })
    ], Verses.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, mongoose_1.Prop)({ type: String })
    ], Verses.prototype, "text");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, mongoose_1.Prop)({ type: String })
    ], Verses.prototype, "translation");
    Verses = __decorate([
        (0, graphql_1.ObjectType)()
    ], Verses);
    return Verses;
}());
exports.Verses = Verses;
