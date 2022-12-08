"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var apollo_server_core_1 = require("apollo-server-core");
var mongoose_1 = require("@nestjs/mongoose");
var quran_module_1 = require("./quran/quran.module");
var apollo_1 = require("@nestjs/apollo");
var path_1 = require("path");
var config_1 = require("@nestjs/config");
var note_module_1 = require("./note/note.module");
var app_controller_1 = require("./app.controller");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: '.local.env'
                }),
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    debug: false,
                    playground: false,
                    cache: 'bounded',
                    // playground: true,
                    //  cache: 'bounded',
                    //ersistedQueries: false,
                    autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                    plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()]
                }),
                mongoose_1.MongooseModule.forRoot(process.env.MONGO_URL),
                quran_module_1.QuranModule,
                note_module_1.NoteModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
