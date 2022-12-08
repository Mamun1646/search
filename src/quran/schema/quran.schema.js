"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuranSchema = exports.Quran = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var verses_schema_1 = require("./verses.schema");
var graphql_1 = require("@nestjs/graphql");
var Quran = /** @class */ (function () {
    function Quran() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], Quran.prototype, "_id");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, mongoose_1.Prop)()
    ], Quran.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, mongoose_1.Prop)()
    ], Quran.prototype, "transliteration");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, mongoose_1.Prop)()
    ], Quran.prototype, "translation");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, mongoose_1.Prop)()
    ], Quran.prototype, "type");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }, { nullable: true }),
        (0, mongoose_1.Prop)()
    ], Quran.prototype, "total_verses");
    __decorate([
        (0, graphql_1.Field)(function () { return [verses_schema_1.Verses]; }),
        (0, mongoose_1.Prop)([{ type: (0, mongoose_1.raw)(__assign({}, verses_schema_1.Verses)) }])
    ], Quran.prototype, "verses");
    Quran = __decorate([
        (0, mongoose_1.Schema)(),
        (0, graphql_1.ObjectType)()
    ], Quran);
    return Quran;
}());
exports.Quran = Quran;
exports.QuranSchema = mongoose_1.SchemaFactory.createForClass(Quran);
