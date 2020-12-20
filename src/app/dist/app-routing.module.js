"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var brands_component_1 = require("./brands/brands.component");
var home_component_1 = require("./home/home.component");
var quiz_component_1 = require("./quiz/quiz.component");
var spelling_component_1 = require("./spelling/spelling.component");
var musicquiz_component_1 = require("./musicquiz/musicquiz.component");
var error_image_component_1 = require("./error-image/error-image.component");
var memory_component_1 = require("./memory/memory.component");
var card_duel_component_1 = require("./card-duel/card-duel.component");
var whenwasthat_component_1 = require("./whenwasthat/whenwasthat.component");
var sort_component_1 = require("./sort/sort.component");
var all_pages_component_1 = require("./all-pages/all-pages.component");
var complex_sayings_component_1 = require("./complex-sayings/complex-sayings.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'quiz', component: quiz_component_1.QuizComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'brands', component: brands_component_1.BrandsComponent },
    { path: 'spelling', component: spelling_component_1.SpellingComponent },
    { path: 'musicquiz', component: musicquiz_component_1.MusicquizComponent },
    { path: 'error-image', component: error_image_component_1.ErrorImageComponent },
    { path: 'memory', component: memory_component_1.MemoryComponent },
    { path: 'card-duel', component: card_duel_component_1.CardDuelComponent },
    { path: 'whenwasthat', component: whenwasthat_component_1.WhenwasthatComponent },
    { path: 'sort', component: sort_component_1.SortComponent },
    { path: 'all-pages', component: all_pages_component_1.AllPagesComponent },
    { path: 'complex-sayings', component: complex_sayings_component_1.ComplexSayingsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
