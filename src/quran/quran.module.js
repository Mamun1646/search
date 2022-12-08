"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuranModule = void 0;
var common_1 = require("@nestjs/common");
var quran_service_1 = require("./quran.service");
var quran_controller_1 = require("./quran.controller");
var mongoose_1 = require("@nestjs/mongoose");
var quran_schema_1 = require("./schema/quran.schema");
var quran_resolver_1 = require("./quran.resolver");
var QuranModule = /** @class */ (function () {
    function QuranModule() {
    }
    QuranModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: quran_schema_1.Quran.name, schema: quran_schema_1.QuranSchema }]),
            ],
            controllers: [quran_controller_1.QuranController],
            providers: [quran_service_1.QuranService, quran_resolver_1.QuranResolver]
        })
    ], QuranModule);
    return QuranModule;
}());
exports.QuranModule = QuranModule;
