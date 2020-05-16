(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/brands/brands.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spelling/spelling.component */ "./src/app/spelling/spelling.component.ts");
/* harmony import */ var _musicquiz_musicquiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./musicquiz/musicquiz.component */ "./src/app/musicquiz/musicquiz.component.ts");
/* harmony import */ var _error_image_error_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-image/error-image.component */ "./src/app/error-image/error-image.component.ts");
/* harmony import */ var _memory_memory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./memory/memory.component */ "./src/app/memory/memory.component.ts");
/* harmony import */ var _card_duel_card_duel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-duel/card-duel.component */ "./src/app/card-duel/card-duel.component.ts");












const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'brands', component: _brands_brands_component__WEBPACK_IMPORTED_MODULE_2__["BrandsComponent"] },
    { path: 'spelling', component: _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_5__["SpellingComponent"] },
    { path: 'musicquiz', component: _musicquiz_musicquiz_component__WEBPACK_IMPORTED_MODULE_6__["MusicquizComponent"] },
    { path: 'error-image', component: _error_image_error_image_component__WEBPACK_IMPORTED_MODULE_7__["ErrorImageComponent"] },
    { path: 'memory', component: _memory_memory_component__WEBPACK_IMPORTED_MODULE_8__["MemoryComponent"] },
    { path: 'card-duel', component: _card_duel_card_duel_component__WEBPACK_IMPORTED_MODULE_9__["CardDuelComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'igvs';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 0, consts: [[2, "text-align", "center"], [1, "center"], ["src", "../assets/raw/streudassalz.png", 1, "img-fluid", 2, "height", "100px"], [1, "navbar", "navbar-expand-lg", "navbar", "bg", "mb-5"], [1, "container"], [1, "navbar-brand"], [1, "nav", "nav-pills"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/home", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/memory", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/brands", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/quiz", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/musicquiz", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/spelling", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/card-duel", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/error-image", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Streu das Salz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Game 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Game 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Game 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Game 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Game 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Game 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Game 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".ver-center[_ngcontent-%COMP%]{\r\n    margin-top:auto;\r\n    margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyLWNlbnRlcntcclxuICAgIG1hcmdpbi10b3A6YXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/brands/brands.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _quiz_quiz_category_quiz_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz-category/quiz-category.component */ "./src/app/quiz/quiz-category/quiz-category.component.ts");
/* harmony import */ var _game_score_game_score_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-score/game-score.component */ "./src/app/game-score/game-score.component.ts");
/* harmony import */ var _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spelling/spelling.component */ "./src/app/spelling/spelling.component.ts");
/* harmony import */ var _musicquiz_musicquiz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./musicquiz/musicquiz.component */ "./src/app/musicquiz/musicquiz.component.ts");
/* harmony import */ var _error_image_error_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-image/error-image.component */ "./src/app/error-image/error-image.component.ts");
/* harmony import */ var _memory_memory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./memory/memory.component */ "./src/app/memory/memory.component.ts");
/* harmony import */ var _card_duel_card_duel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card-duel/card-duel.component */ "./src/app/card-duel/card-duel.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _brands_brands_component__WEBPACK_IMPORTED_MODULE_5__["BrandsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__["QuizComponent"],
        _quiz_quiz_category_quiz_category_component__WEBPACK_IMPORTED_MODULE_8__["QuizCategoryComponent"],
        _game_score_game_score_component__WEBPACK_IMPORTED_MODULE_9__["GameScoreComponent"],
        _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_10__["SpellingComponent"],
        _musicquiz_musicquiz_component__WEBPACK_IMPORTED_MODULE_11__["MusicquizComponent"],
        _error_image_error_image_component__WEBPACK_IMPORTED_MODULE_12__["ErrorImageComponent"],
        _memory_memory_component__WEBPACK_IMPORTED_MODULE_13__["MemoryComponent"],
        _card_duel_card_duel_component__WEBPACK_IMPORTED_MODULE_14__["CardDuelComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]], exports: [_quiz_quiz_category_quiz_category_component__WEBPACK_IMPORTED_MODULE_8__["QuizCategoryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _brands_brands_component__WEBPACK_IMPORTED_MODULE_5__["BrandsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__["QuizComponent"],
                    _quiz_quiz_category_quiz_category_component__WEBPACK_IMPORTED_MODULE_8__["QuizCategoryComponent"],
                    _game_score_game_score_component__WEBPACK_IMPORTED_MODULE_9__["GameScoreComponent"],
                    _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_10__["SpellingComponent"],
                    _musicquiz_musicquiz_component__WEBPACK_IMPORTED_MODULE_11__["MusicquizComponent"],
                    _error_image_error_image_component__WEBPACK_IMPORTED_MODULE_12__["ErrorImageComponent"],
                    _memory_memory_component__WEBPACK_IMPORTED_MODULE_13__["MemoryComponent"],
                    _card_duel_card_duel_component__WEBPACK_IMPORTED_MODULE_14__["CardDuelComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                exports: [
                    _quiz_quiz_category_quiz_category_component__WEBPACK_IMPORTED_MODULE_8__["QuizCategoryComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/brands/brands.component.ts":
/*!********************************************!*\
  !*** ./src/app/brands/brands.component.ts ***!
  \********************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matchData/matchData.service */ "./src/app/matchData/matchData.service.ts");
/* harmony import */ var _assets_brands_brands_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/brands/brands.json */ "./src/assets/brands/brands.json");
var _assets_brands_brands_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/brands/brands.json */ "./src/assets/brands/brands.json", 1);
/* harmony import */ var _game_score_game_score_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-score/game-score.component */ "./src/app/game-score/game-score.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function BrandsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_div_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrandsComponent_div_5_tr_4_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_div_5_tr_4_td_1_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const cell_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.toggleSol(cell_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "my-child", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cell_r7.sol ? ctx_r6.getSol(cell_r7.id) : ctx_r6.getLogo(cell_r7.id), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMePartially", ctx_r6.sol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((cell_r7.id - 1) % ctx_r6.recordsPerLevel);
} }
function BrandsComponent_div_5_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrandsComponent_div_5_tr_4_td_1_Template, 8, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5)("ngForTrackBy", ctx_r4.trackRecord);
} }
function BrandsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BrandsComponent_div_5_tr_4_Template, 2, 2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_div_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.previousLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_div_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.nextLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.table)("ngForTrackBy", ctx_r1.trackRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Runde: ", ctx_r1.level + 1, "");
} }
class BrandsComponent {
    constructor(matchDataService) {
        this.matchDataService = matchDataService;
        this.bestOf = 5;
        this.startGameBool = true;
        this.columns = 4;
        this.recordsPerLevel = 12;
        this.level = 0;
        this.records = _assets_brands_brands_json__WEBPACK_IMPORTED_MODULE_2__;
        this.subRecords = [];
        this.trackRow = (index, item) => {
            return index;
        };
        this.trackRecord = (index, item) => {
            return item;
        };
    }
    ngOnInit() {
        this.setRoundRecords();
        this.setMatchData();
    }
    startGame() {
        this.startGameBool = !this.startGameBool;
    }
    setMatchData() {
        this.matchData = this.matchDataService.getMatchData();
    }
    setRoundRecords() {
        let offset = this.level * this.recordsPerLevel;
        this.subRecords = this.records.slice(offset, offset + this.recordsPerLevel);
    }
    get table() {
        const rowCount = Math.floor(this.subRecords.length / this.columns);
        const remainder = this.subRecords.length % this.columns;
        const rows = [];
        for (let i = 0; i < rowCount; i++) {
            rows.push(this.subRecords.slice(i * this.columns, (i * this.columns) + this.columns));
        }
        if (remainder) {
            rows.push(this.subRecords.slice(this.subRecords.length - remainder, this.subRecords.length));
        }
        return rows;
    }
    ;
    getLogo(id) {
        let path = '../../assets/brands/' + id + '/logo.png';
        return path;
    }
    getSol(id) {
        let path = '../../assets/brands/' + id + '/sol.png';
        return path;
    }
    toggleSol(i) {
        i = i - 1;
        this.records[i].sol = !this.records[i].sol;
    }
    previousLevel() {
        this.level--;
        this.setRoundRecords();
    }
    nextLevel() {
        this.level++;
        this.setRoundRecords();
    }
}
BrandsComponent.ɵfac = function BrandsComponent_Factory(t) { return new (t || BrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__["MatchDataService"])); };
BrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandsComponent, selectors: [["app-brands"]], decls: 7, vars: 3, consts: [[1, "container"], [2, "text-align", "center"], [3, "bestOf"], [4, "ngIf"], [1, "row", "justify-content-sm-center", 2, "margin-top", "20px"], [1, "btn-primary", "col-sm-3", 3, "click"], [1, "row"], [1, "col-sm"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn", "btn-primary", "col-sm", 2, "float", "left", 3, "click"], [1, "round-count", "col-sm"], [1, "btn", "btn-primary", "col-sm", 2, "float", "right", 3, "click"], [1, "card", "brand-card", "container"], [1, "row", 2, "height", "120px"], ["type", "button", 3, "src", "click"], [3, "showMePartially"], [1, "row", 2, "height", "30px"], [1, "brand_cell_number", 2, "font-size", "20px"]], template: function BrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Marken raten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-game-score", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BrandsComponent_div_4_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BrandsComponent_div_5_Template, 12, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bestOf", ctx.bestOf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startGameBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.startGameBool);
    } }, directives: [_game_score_game_score_component__WEBPACK_IMPORTED_MODULE_3__["GameScoreComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".brands-view[_ngcontent-%COMP%] {\r\n  width: 900px;\r\n  margin: auto;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: block;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n\r\n.brand-div[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  \r\n  height: 700px;\r\n}\r\n\r\n.brand-card[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.brand_cell_number[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  bottom: 0px;\r\n  left: 75px;\r\n  -webkit-text-size-adjust: 50;\r\n     -moz-text-size-adjust: 50;\r\n      -ms-text-size-adjust: 50;\r\n          text-size-adjust: 50;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.level-nav[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  padding: 25px;\r\n  width: 900px;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n  border: solid;\r\n  background-color: yellow;\r\n}\r\n\r\n.round-count[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLDRCQUFvQjtLQUFwQix5QkFBb0I7TUFBcEIsd0JBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kcy12aWV3IHtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uYnJhbmQtZGl2IHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLyogd2lkdGg6IDkwMHB4OyAqL1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbn1cclxuXHJcbi5icmFuZC1jYXJkIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4uYnJhbmRfY2VsbF9udW1iZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiA3NXB4O1xyXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDUwO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubGV2ZWwtbmF2IHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB3aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlcjogc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4ucm91bmQtY291bnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brands',
                templateUrl: './brands.component.html',
                styleUrls: ['./brands.component.css']
            }]
    }], function () { return [{ type: _matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__["MatchDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/card-duel/card-duel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-duel/card-duel.component.ts ***!
  \**************************************************/
/*! exports provided: CardDuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDuelComponent", function() { return CardDuelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matchData/matchData.service */ "./src/app/matchData/matchData.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class CardDuelComponent {
    constructor(matchDataService) {
        this.matchDataService = matchDataService;
        this.dirkPoints = 0;
        this.candPoints = 0;
    }
    ngOnInit() {
        this.setMatchData();
    }
    setMatchData() {
        this.matchData = this.matchDataService.getMatchData();
    }
    processInput(dirkInput, candInput) {
        dirkInput = +dirkInput;
        candInput = +candInput;
        this.dirkCard = dirkInput;
        this.candCard = candInput;
        if (dirkInput > candInput) {
            this.dirkPoints++;
            this.dirkWins = true;
        }
        else if (dirkInput < candInput) {
            this.candPoints++;
            this.candWins = true;
        }
        else {
            this.dirkWins = false;
            this.candWins = false;
        }
    }
}
CardDuelComponent.ɵfac = function CardDuelComponent_Factory(t) { return new (t || CardDuelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__["MatchDataService"])); };
CardDuelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDuelComponent, selectors: [["app-card-duel"]], decls: 41, vars: 5, consts: [[2, "text-align", "center"], [1, "container"], [1, "row"], [1, "col-sm", 2, "text-align", "left"], [1, "col-sm", 2, "text-align", "right"], [1, "col-1", "card", 2, "text-align", "left"], [1, "col-10"], [1, "col-1", "card", 2, "text-align", "right"], [1, "col-2"], [1, "form"], ["type", "password"], ["dirkInput", ""], [1, "col-1"], [1, "col-2", "btn", "btn-primary", 3, "click"], ["candInput", ""], [1, "row", "justify-content-center"], [1, "card", "col-2", "result-card"], [2, "font-size", "100px"]], template: function CardDuelComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kartenduell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dirk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardDuelComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); ctx.processInput(_r0.value, _r1.value); _r0.value = ""; return _r1.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.matchData.candidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dirkPoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.candPoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dirkCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.candCard);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".card.result-card[_ngcontent-%COMP%]{\r\n    height: 300px; \r\n    text-align:center;\r\n    font-size: 50px;\r\n    text-overflow: ellipsis;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1kdWVsL2NhcmQtZHVlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1kdWVsL2NhcmQtZHVlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQucmVzdWx0LWNhcmR7XHJcbiAgICBoZWlnaHQ6IDMwMHB4OyBcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardDuelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-duel',
                templateUrl: './card-duel.component.html',
                styleUrls: ['./card-duel.component.css']
            }]
    }], function () { return [{ type: _matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__["MatchDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/error-image/error-image.component.ts":
/*!******************************************************!*\
  !*** ./src/app/error-image/error-image.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorImageComponent", function() { return ErrorImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_error_image_error_images_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/error-image/error-images.json */ "./src/assets/error-image/error-images.json");
var _assets_error_image_error_images_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/error-image/error-images.json */ "./src/assets/error-image/error-images.json", 1);
/* harmony import */ var _game_score_game_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-score/game-score.component */ "./src/app/game-score/game-score.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ErrorImageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorImageComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleStartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ErrorImageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorImageComponent_div_5_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleSol(ctx_r4.level); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorImageComponent_div_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.previousLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Previous Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorImageComponent_div_5_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.nextLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Next Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.getOriginalImagePath(ctx_r1.level), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.getErrorImagePath(ctx_r1.level), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Runde: ", ctx_r1.level, "");
} }
class ErrorImageComponent {
    constructor() {
        this.bestOf = 9;
        this.records = _assets_error_image_error_images_json__WEBPACK_IMPORTED_MODULE_1__;
        this.level = 0;
        this.startGameBool = false;
    }
    ngOnInit() {
        console.log(this.records);
        console.log(this.level);
        console.log(this.records.length);
        this.maxLevel = this.records.length;
    }
    toggleStartGame() {
        this.startGameBool = !this.startGameBool;
    }
    getOriginalImagePath(id) {
        if (id < 0 || id > this.records.length - 1) {
            return "../../assets/error-image/original.png";
        }
        return "../../assets/error-image/" + id + "/original.png";
    }
    getErrorImagePath(id) {
        console.log(id);
        if (id < 0 || id > this.records.length - 1) {
            return "../../assets/error-image/error.png";
        }
        else if (this.records[id].sol) {
            return "../../assets/error-image/" + id + "/sol.png";
        }
        else if (!this.records[id].sol) {
            return "../../assets/error-image/" + id + "/error.png";
        }
        else {
            return "";
        }
    }
    toggleSol(id) {
        this.records[id].sol = !this.records[id].sol;
    }
    previousLevel() {
        this.level--;
    }
    nextLevel() {
        this.level++;
    }
}
ErrorImageComponent.ɵfac = function ErrorImageComponent_Factory(t) { return new (t || ErrorImageComponent)(); };
ErrorImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorImageComponent, selectors: [["app-error-image"]], decls: 7, vars: 3, consts: [[2, "text-align", "center"], [3, "bestOf"], [4, "ngIf"], [1, "container"], [1, "row", "justify-content-sm-center", 2, "margin-top", "20px"], [1, "btn-primary", "col-sm-2", 3, "click"], [1, "row"], [1, "col-6", 3, "src"], [1, "col-6", 3, "src", "click"], [1, "btn", "btn-primary", "col-sm", 2, "float", "left", 3, "click"], [1, "round-count", "col-sm", 2, "text-align", "center"], [1, "btn", "btn-primary", "col-sm", 2, "float", "right", 3, "click"]], template: function ErrorImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fehlerbilder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-game-score", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ErrorImageComponent_div_3_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ErrorImageComponent_div_5_Template, 14, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bestOf", ctx.bestOf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.startGameBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startGameBool);
    } }, directives: [_game_score_game_score_component__WEBPACK_IMPORTED_MODULE_2__["GameScoreComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".image-container[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItaW1hZ2UvZXJyb3ItaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9lcnJvci1pbWFnZS9lcnJvci1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-image',
                templateUrl: './error-image.component.html',
                styleUrls: ['./error-image.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/game-score/game-score.component.ts":
/*!****************************************************!*\
  !*** ./src/app/game-score/game-score.component.ts ***!
  \****************************************************/
/*! exports provided: GameScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreComponent", function() { return GameScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matchData/matchData.service */ "./src/app/matchData/matchData.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function GameScoreComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameScoreComponent_td_10_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const entry_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleBox(entry_r2.count, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.getBox(entry_r2.count, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GameScoreComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameScoreComponent_td_14_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const entry_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleBox(entry_r5.count, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.getBox(entry_r5.count, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GameScoreComponent {
    constructor(matchDataService) {
        this.matchDataService = matchDataService;
        this.firstToDirk = [];
        this.firstToCand = [];
    }
    ngOnInit() {
        this.setMatchData();
        this.setPointBoxes();
    }
    setMatchData() {
        this.matchData = this.matchDataService.getMatchData();
    }
    setPointBoxes() {
        let boxCount = Math.floor(this.bestOf / 2) + 1;
        for (let i = 0; i < boxCount; i++) {
            this.firstToDirk.push({ 'count': i, 'vis': false });
            this.firstToCand.push({ 'count': i, 'vis': false });
        }
    }
    getBox(c, i) {
        let path = '';
        if (i == 1) {
            if (this.firstToDirk[c].vis) {
                path = '../../assets/raw/box_filled.png';
            }
            else {
                path = '../../assets/raw/box_empty.png';
            }
        }
        else {
            if (this.firstToCand[c].vis) {
                path = '../../assets/raw/box_filled.png';
            }
            else {
                path = '../../assets/raw/box_empty.png';
            }
        }
        return path;
    }
    toggleBox(c, i) {
        if (i == 1) {
            this.firstToDirk[c].vis = !this.firstToDirk[c].vis;
        }
        else {
            this.firstToCand[c].vis = !this.firstToCand[c].vis;
        }
    }
}
GameScoreComponent.ɵfac = function GameScoreComponent_Factory(t) { return new (t || GameScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__["MatchDataService"])); };
GameScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameScoreComponent, selectors: [["app-game-score"]], inputs: { bestOf: "bestOf" }, decls: 15, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-sm", 2, "text-align", "left"], [1, "col-sm", 2, "text-align", "right"], [1, "col-sm"], [1, "float-left"], ["class", "score-box", 4, "ngFor", "ngForOf"], [1, "float-right"], [1, "score-box"], ["type", "button", 1, "score-box", 3, "src", "click"]], template: function GameScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dirk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameScoreComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GameScoreComponent_td_14_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.matchData.candidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.firstToDirk);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.firstToCand);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".score-box[_ngcontent-%COMP%] {\r\n    width:40px;\r\n    height:40px;\r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1zY29yZS9nYW1lLXNjb3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVzs7RUFFYiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtc2NvcmUvZ2FtZS1zY29yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlLWJveCB7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-score',
                templateUrl: './game-score.component.html',
                styleUrls: ['./game-score.component.css']
            }]
    }], function () { return [{ type: _matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__["MatchDataService"] }]; }, { bestOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, consts: [[2, "text-align", "center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zeit f\u00FCr ein D-d-d-d-d-d-duelll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/matchData/matchData.service.ts":
/*!************************************************!*\
  !*** ./src/app/matchData/matchData.service.ts ***!
  \************************************************/
/*! exports provided: MatchDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchDataService", function() { return MatchDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mockMatchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mockMatchData */ "./src/app/matchData/mockMatchData.ts");



class MatchDataService {
    constructor() { }
    getMatchData() {
        return _mockMatchData__WEBPACK_IMPORTED_MODULE_1__["MATCHDATA"];
    }
}
MatchDataService.ɵfac = function MatchDataService_Factory(t) { return new (t || MatchDataService)(); };
MatchDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatchDataService, factory: MatchDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/matchData/mockMatchData.ts":
/*!********************************************!*\
  !*** ./src/app/matchData/mockMatchData.ts ***!
  \********************************************/
/*! exports provided: MATCHDATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCHDATA", function() { return MATCHDATA; });
const MATCHDATA = {
    candidate: 'Carl'
};


/***/ }),

/***/ "./src/app/memory/memory.component.ts":
/*!********************************************!*\
  !*** ./src/app/memory/memory.component.ts ***!
  \********************************************/
/*! exports provided: MemoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryComponent", function() { return MemoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matchData/matchData.service */ "./src/app/matchData/matchData.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MemoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemoryComponent_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MemoryComponent_div_2_tr_16_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemoryComponent_div_2_tr_16_td_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const cell_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.toggleShowImage(cell_r8.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "my-child", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r8 = ctx.$implicit;
    const y_r9 = ctx.index;
    const x_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.getImagePath(cell_r8.index), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMePartially", ctx_r7.sol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r9 + x_r6 * ctx_r7.columns);
} }
function MemoryComponent_div_2_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemoryComponent_div_2_tr_16_td_1_Template, 6, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5)("ngForTrackBy", ctx_r4.trackRecord);
} }
const _c0 = function (a0) { return { "turn": a0 }; };
function MemoryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dirk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemoryComponent_div_2_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.proceed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MemoryComponent_div_2_tr_16_Template, 2, 2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r1.dirksTurn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r1.dirksTurn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.dirkCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx_r1.dirksTurn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.candCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, !ctx_r1.dirksTurn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.matchData.candidate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.table)("ngForTrackBy", ctx_r1.trackRow);
} }
class MemoryComponent {
    constructor(matchDataService) {
        this.matchDataService = matchDataService;
        this.pairsCounter = 21;
        this.startGameBool = true;
        this.solvedRecords = [];
        this.columns = 7;
        this.dirkCount = 0;
        this.candCount = 0;
        this.dirksTurn = true;
        this.trackRow = (index, item) => {
            return index;
        };
        this.trackRecord = (index, item) => {
            return item;
        };
    }
    ngOnInit() {
        this.initializeBoard();
        this.setMatchData();
    }
    proceed() {
        let possPair = [];
        for (let i = 0; i < this.records.length; i++) {
            if (this.records[i].show) {
                possPair.push(this.records[i]);
                this.records[i].show = !this.records[i].show;
            }
        }
        if (possPair[0].id == possPair[1].id) {
            if (this.dirksTurn) {
                this.dirkCount++;
            }
            else {
                this.candCount++;
            }
            this.solvedRecords.push(possPair[0]);
            this.solvedRecords.push(possPair[1]);
        }
        else {
            this.dirksTurn = !this.dirksTurn;
        }
    }
    setMatchData() {
        this.matchData = this.matchDataService.getMatchData();
    }
    startGame() {
        this.startGameBool = !this.startGameBool;
    }
    initializeBoard() {
        let records = new Array();
        for (let i = 0; i < this.pairsCounter * 2; i++) {
            records.push({ id: i % this.pairsCounter, show: false, index: i });
        }
        this.records = records;
        this.shuffleBoard();
    }
    shuffleBoard() {
        let board = this.records;
        for (let i = 0; i < board.length; i++) {
            let randNumber = Math.floor(Math.random() * Math.floor(board.length));
            let temp = board[i];
            board[i] = board[randNumber];
            board[randNumber] = temp;
        }
        this.records = board;
    }
    getImagePath(index) {
        for (let el of this.solvedRecords) {
            if (el == this.records[index]) {
                return "../../assets/memory/solved.png";
            }
        }
        if (this.records[index].show) {
            return "../../assets/memory/" + this.records[index].id + "/card.png";
        }
        else {
            return "../../assets/memory/covered.png";
        }
    }
    countUncoveredCards() {
        let count = 0;
        for (let card of this.records) {
            if (card.show) {
                count++;
            }
            ;
        }
        return count;
    }
    toggleShowImage(index) {
        if (this.countUncoveredCards() < 2 || this.records[index].show) {
            this.records[index].show = !this.records[index].show;
        }
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    get table() {
        const rowCount = Math.floor(this.records.length / this.columns);
        const remainder = this.records.length % this.columns;
        const rows = [];
        for (let i = 0; i < rowCount; i++) {
            rows.push(this.records.slice(i * this.columns, (i * this.columns) + this.columns));
        }
        if (remainder) {
            rows.push(this.records.slice(this.records.length - remainder, this.records.length));
        }
        return rows;
    }
    ;
}
MemoryComponent.ɵfac = function MemoryComponent_Factory(t) { return new (t || MemoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__["MatchDataService"])); };
MemoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemoryComponent, selectors: [["app-memory"]], decls: 3, vars: 2, consts: [[1, "container"], [4, "ngIf"], [1, "row", "justify-content-sm-center", 2, "margin-top", "20px"], [1, "btn-primary", "col-sm-3", 3, "click"], [1, "row", "justify-content-center"], [1, "col-sm", 2, "text-align", "right", 3, "ngClass"], [1, "col-sm", 2, "text-align", "left", 3, "ngClass"], [1, "col-sm", "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "m-card", 3, "src", "click"], [3, "showMePartially"], [2, "text-align", "center"]], template: function MemoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemoryComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemoryComponent_div_2_Template, 17, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startGameBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.startGameBool);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".m-card[_ngcontent-%COMP%] {\r\n    height: 90px;\r\n    width: 90px;\r\n}\r\n\r\n.turn[_ngcontent-%COMP%]{\r\n    background-color: #f759a4;\r\n    color: #410042;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtb3J5L21lbW9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWVtb3J5L21lbW9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLnR1cm57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc1OWE0O1xyXG4gICAgY29sb3I6ICM0MTAwNDI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-memory',
                templateUrl: './memory.component.html',
                styleUrls: ['./memory.component.css']
            }]
    }], function () { return [{ type: _matchData_matchData_service__WEBPACK_IMPORTED_MODULE_1__["MatchDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/musicquiz/musicquiz.component.ts":
/*!**************************************************!*\
  !*** ./src/app/musicquiz/musicquiz.component.ts ***!
  \**************************************************/
/*! exports provided: MusicquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicquizComponent", function() { return MusicquizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_score_game_score_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-score/game-score.component */ "./src/app/game-score/game-score.component.ts");



class MusicquizComponent {
    constructor() {
        this.bestOf = 13;
    }
    ngOnInit() {
    }
}
MusicquizComponent.ɵfac = function MusicquizComponent_Factory(t) { return new (t || MusicquizComponent)(); };
MusicquizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicquizComponent, selectors: [["app-musicquiz"]], decls: 3, vars: 1, consts: [[2, "text-align", "center"], [3, "bestOf"]], template: function MusicquizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filmmusik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-game-score", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bestOf", ctx.bestOf);
    } }, directives: [_game_score_game_score_component__WEBPACK_IMPORTED_MODULE_1__["GameScoreComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljcXVpei9tdXNpY3F1aXouY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicquizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-musicquiz',
                templateUrl: './musicquiz.component.html',
                styleUrls: ['./musicquiz.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/quiz/quiz-category/quiz-category.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/quiz/quiz-category/quiz-category.component.ts ***!
  \***************************************************************/
/*! exports provided: QuizCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCategoryComponent", function() { return QuizCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { "blue": a0, "red": a1 }; };
const _c1 = function (a0) { return { "blue": a0 }; };
const _c2 = function (a0) { return { "red": a0 }; };
class QuizCategoryComponent {
    constructor() {
        this.toggle = [false, false, false, false, false, false];
        this.dirkWins = false;
        this.candWins = false;
    }
    ngOnInit() {
    }
    checkWinner() {
        if (this.toggle[0] && this.toggle[2] && this.toggle[4]) {
            this.dirkWins = true;
        }
        else {
            this.dirkWins = false;
        }
        if (this.toggle[1] && this.toggle[3] && this.toggle[5]) {
            this.candWins = true;
        }
        else {
            this.candWins = false;
        }
    }
    toggleColor(i) {
        this.toggle[i] = !this.toggle[i];
        this.checkWinner();
    }
}
QuizCategoryComponent.ɵfac = function QuizCategoryComponent_Factory(t) { return new (t || QuizCategoryComponent)(); };
QuizCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizCategoryComponent, selectors: [["app-quiz-category"]], inputs: { category: "category" }, decls: 17, vars: 23, consts: [[1, "container", 2, "width", "200px"], [1, "row"], [1, "col-sm"], [1, "container", 2, "height", "200px"], [1, "h-25", "row"], [1, "card", "col-sm", 3, "ngClass"], [2, "text-align", "center"], [1, "btn", "btn-primary", "col-sm", 3, "ngClass", "click"]], template: function QuizCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizCategoryComponent_Template_div_click_9_listener() { return ctx.toggleColor(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizCategoryComponent_Template_div_click_10_listener() { return ctx.toggleColor(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizCategoryComponent_Template_div_click_12_listener() { return ctx.toggleColor(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizCategoryComponent_Template_div_click_13_listener() { return ctx.toggleColor(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizCategoryComponent_Template_div_click_15_listener() { return ctx.toggleColor(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizCategoryComponent_Template_div_click_16_listener() { return ctx.toggleColor(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.dirkWins, ctx.candWins));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.category, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.toggle[0]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx.toggle[1]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.toggle[2]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, ctx.toggle[3]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.toggle[4]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, ctx.toggle[5]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".blue[_ngcontent-%COMP%] {\r\n    background-color: cyan;\r\n    color: black;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n    background-color: #f755a2; \r\n    color: black;  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LWNhdGVnb3J5L3F1aXotY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXotY2F0ZWdvcnkvcXVpei1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc1NWEyOyBcclxuICAgIGNvbG9yOiBibGFjazsgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz-category',
                templateUrl: './quiz-category.component.html',
                styleUrls: ['./quiz-category.component.css']
            }]
    }], function () { return []; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_score_game_score_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-score/game-score.component */ "./src/app/game-score/game-score.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _quiz_category_quiz_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-category/quiz-category.component */ "./src/app/quiz/quiz-category/quiz-category.component.ts");





function QuizComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-quiz-category", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r5);
} }
function QuizComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuizComponent_div_6_div_3_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
} }
class QuizComponent {
    constructor() {
        this.bestOf = 5;
        this.categories = ["Sport", "Geschichte", "Aktuelles", "Politik", "Astro"];
        this.startGameBool = false;
    }
    ngOnInit() {
    }
    startGame() {
        this.startGameBool = !this.startGameBool;
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 7, vars: 3, consts: [[1, "container"], [2, "text-align", "center"], [3, "bestOf"], [1, "row", 2, "margin-top", "100px"], [4, "ngIf"], [1, "row", "justify-content-sm-center", 2, "margin-top", "20px"], [1, "btn-primary", "col-sm-3", 3, "click"], [1, "row", "justify-content-sm-center"], [4, "ngFor", "ngForOf"], [1, "col-sm", 3, "category"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quizsson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-game-score", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuizComponent_div_5_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuizComponent_div_6_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bestOf", ctx.bestOf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.startGameBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startGameBool);
    } }, directives: [_game_score_game_score_component__WEBPACK_IMPORTED_MODULE_1__["GameScoreComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _quiz_category_quiz_category_component__WEBPACK_IMPORTED_MODULE_3__["QuizCategoryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz',
                templateUrl: './quiz.component.html',
                styleUrls: ['./quiz.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/spelling/spelling.component.ts":
/*!************************************************!*\
  !*** ./src/app/spelling/spelling.component.ts ***!
  \************************************************/
/*! exports provided: SpellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellingComponent", function() { return SpellingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_spelling_words_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/spelling/words.json */ "./src/assets/spelling/words.json");
var _assets_spelling_words_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/spelling/words.json */ "./src/assets/spelling/words.json", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SpellingComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpellingComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "solved": a0 }; };
function SpellingComponent_div_6_tr_11_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpellingComponent_div_6_tr_11_td_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const cell_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.setWord(cell_r7.id, cell_r7.word); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r7.solved));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r7.id % 15);
} }
function SpellingComponent_div_6_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpellingComponent_div_6_tr_11_td_1_Template, 3, 4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5)("ngForTrackBy", ctx_r4.trackRecord);
} }
function SpellingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpellingComponent_div_6_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setWord(0 - 1, ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "L\u00F6sung:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SpellingComponent_div_6_tr_11_Template, 2, 2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpellingComponent_div_6_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.previousLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Previous Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpellingComponent_div_6_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.nextLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Next Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.table)("ngForTrackBy", ctx_r1.trackRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Runde: ", ctx_r1.level + 1, "");
} }
class SpellingComponent {
    constructor() {
        this.startGameBool = true;
        this.columns = 5;
        this.recordsPerLevel = 15;
        this.level = 0;
        this.word = "";
        this.records = _assets_spelling_words_json__WEBPACK_IMPORTED_MODULE_1__;
        this.subRecords = [];
        this.trackRow = (index, item) => {
            return index;
        };
        this.trackRecord = (index, item) => {
            return item;
        };
    }
    ngOnInit() {
        this.setRoundRecords();
    }
    startGame() {
        this.startGameBool = !this.startGameBool;
    }
    setRoundRecords() {
        let offset = this.level * this.recordsPerLevel;
        this.subRecords = this.records.slice(offset, offset + this.recordsPerLevel);
    }
    get table() {
        const rowCount = Math.floor(this.subRecords.length / this.columns);
        const remainder = this.subRecords.length % this.columns;
        const rows = [];
        for (let i = 0; i < rowCount; i++) {
            rows.push(this.subRecords.slice(i * this.columns, (i * this.columns) + this.columns));
        }
        if (remainder) {
            rows.push(this.subRecords.slice(this.subRecords.length - remainder, this.subRecords.length));
        }
        return rows;
    }
    ;
    previousLevel() {
        this.level--;
        this.setRoundRecords();
    }
    nextLevel() {
        this.level++;
        this.setRoundRecords();
    }
    setWord(id, w) {
        if (id != -1) {
            id = id - 1;
            this.records[id].solved = !this.records[id].solved;
        }
        this.word = w;
    }
}
SpellingComponent.ɵfac = function SpellingComponent_Factory(t) { return new (t || SpellingComponent)(); };
SpellingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpellingComponent, selectors: [["app-spelling"]], decls: 7, vars: 2, consts: [[1, "container"], [1, "row", "justify-content-center"], [4, "ngIf"], [1, "row", "justify-content-sm-center", 2, "margin-top", "20px"], [1, "btn-primary", "col-sm-3", 3, "click"], [1, "card", 2, "padding", "10px", 3, "click"], [1, "row"], [1, "col-sm"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn", "btn-primary", "col-sm", 2, "float", "left", 3, "click"], [1, "round-count", "col-sm"], [1, "btn", "btn-primary", "col-sm", 2, "float", "right", 3, "click"], ["style", "padding: 10px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "padding", "10px"], [1, "btn-primary", "word-btn", 3, "ngClass", "click"]], template: function SpellingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buchstabieren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpellingComponent_div_5_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpellingComponent_div_6_Template, 20, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startGameBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.startGameBool);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".round-count[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: inline;\r\n  }\r\n\r\n.word-btn[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.solved[_ngcontent-%COMP%] {\r\n  background-color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlbGxpbmcvc3BlbGxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztBQUVGO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NwZWxsaW5nL3NwZWxsaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91bmQtY291bnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuXHJcbi53b3JkLWJ0biB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc29sdmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpellingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spelling',
                templateUrl: './spelling.component.html',
                styleUrls: ['./spelling.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/brands/brands.json":
/*!***************************************!*\
  !*** ./src/assets/brands/brands.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Skype\",\"sol\":false},{\"id\":2,\"name\":\"Microsoft\",\"sol\":false},{\"id\":3,\"name\":\"Adobe\",\"sol\":false},{\"id\":4,\"name\":\"Samsung\",\"sol\":false},{\"id\":5,\"name\":\"MTV\",\"sol\":false},{\"id\":6,\"name\":\"Atari\",\"sol\":false},{\"id\":7,\"name\":\"Delta Airlines\",\"sol\":false},{\"id\":8,\"name\":\"Target\",\"sol\":false},{\"id\":9,\"name\":\"Air Berlin\",\"sol\":false},{\"id\":10,\"name\":\"Guitar Hero\",\"sol\":false},{\"id\":11,\"name\":\"After Eight\",\"sol\":false},{\"id\":12,\"name\":\"Walmart\",\"sol\":false},{\"id\":13,\"name\":\"Pepsi\",\"sol\":false},{\"id\":14,\"name\":\"Visa\",\"sol\":false},{\"id\":15,\"name\":\"Knorr\",\"sol\":false},{\"id\":16,\"name\":\"Adidas\",\"sol\":false},{\"id\":17,\"name\":\"Timberland\",\"sol\":false},{\"id\":18,\"name\":\"Yamaha\",\"sol\":false},{\"id\":19,\"name\":\"Lays\",\"sol\":false},{\"id\":20,\"name\":\"Dove\",\"sol\":false},{\"id\":21,\"name\":\"Converse\",\"sol\":false},{\"id\":22,\"name\":\"Lancia\",\"sol\":false},{\"id\":23,\"name\":\"Asics\",\"sol\":false},{\"id\":24,\"name\":\"Linkin Park\",\"sol\":false},{\"id\":25,\"name\":\"Lacoste\",\"sol\":false},{\"id\":26,\"name\":\"Fisherman's Friend\",\"sol\":false},{\"id\":27,\"name\":\"Champions League\",\"sol\":false},{\"id\":28,\"name\":\"Nvidia\",\"sol\":false},{\"id\":29,\"name\":\"Budweiser\",\"sol\":false},{\"id\":30,\"name\":\"Chupa Chups\",\"sol\":false},{\"id\":31,\"name\":\"Nikon\",\"sol\":false},{\"id\":32,\"name\":\"Kawasaki\",\"sol\":false},{\"id\":33,\"name\":\"Nasa\",\"sol\":false},{\"id\":34,\"name\":\"Logitech\",\"sol\":false},{\"id\":35,\"name\":\"Stabilo\",\"sol\":false},{\"id\":36,\"name\":\"Eurosport\",\"sol\":false},{\"id\":37,\"name\":\"Subaru\",\"sol\":false},{\"id\":38,\"name\":\"Unicef\",\"sol\":false},{\"id\":39,\"name\":\"Lufthansa\",\"sol\":false},{\"id\":40,\"name\":\"Chevrolet\",\"sol\":false},{\"id\":41,\"name\":\"Fairtrade\",\"sol\":false},{\"id\":42,\"name\":\"LG\",\"sol\":false},{\"id\":43,\"name\":\"Ubisoft\",\"sol\":false},{\"id\":44,\"name\":\"Faber Castell\",\"sol\":false},{\"id\":45,\"name\":\"Danone\",\"sol\":false},{\"id\":46,\"name\":\"HSBC\",\"sol\":false},{\"id\":47,\"name\":\"Spar\",\"sol\":false},{\"id\":48,\"name\":\"Mastercard\",\"sol\":false},{\"id\":49,\"name\":\"LucasArts\",\"sol\":false},{\"id\":50,\"name\":\"Allianz\",\"sol\":false},{\"id\":51,\"name\":\"Ikea\",\"sol\":false},{\"id\":52,\"name\":\"Chanel\",\"sol\":false},{\"id\":53,\"name\":\"Tempo\",\"sol\":false},{\"id\":54,\"name\":\"Western Digital\",\"sol\":false},{\"id\":55,\"name\":\"Lindt\",\"sol\":false},{\"id\":56,\"name\":\"Bosch\",\"sol\":false},{\"id\":57,\"name\":\"Bridgestone\",\"sol\":false},{\"id\":58,\"name\":\"SAP\",\"sol\":false},{\"id\":59,\"name\":\"Hotwheels\",\"sol\":false},{\"id\":60,\"name\":\"Gatorade\",\"sol\":false},{\"id\":61,\"name\":\"UPS\",\"sol\":false},{\"id\":62,\"name\":\"Nivea\",\"sol\":false},{\"id\":63,\"name\":\"Maybach\",\"sol\":false},{\"id\":64,\"name\":\"Corona\",\"sol\":false},{\"id\":65,\"name\":\"Bacardi\",\"sol\":false},{\"id\":66,\"name\":\"Vans\",\"sol\":false},{\"id\":67,\"name\":\"Intel\",\"sol\":false},{\"id\":68,\"name\":\"Carlsberg\",\"sol\":false},{\"id\":69,\"name\":\"Ericsson\",\"sol\":false},{\"id\":70,\"name\":\"Wilson\",\"sol\":false},{\"id\":71,\"name\":\"Mattel\",\"sol\":false},{\"id\":72,\"name\":\"Dupont\",\"sol\":false}]");

/***/ }),

/***/ "./src/assets/error-image/error-images.json":
/*!**************************************************!*\
  !*** ./src/assets/error-image/error-images.json ***!
  \**************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"nba-legends\",\"sol\":false},{\"id\":1,\"name\":\"coccinellidae\",\"sol\":false},{\"id\":2,\"name\":\"tulips\",\"sol\":false},{\"id\":3,\"name\":\"stuffed-toys\",\"sol\":false},{\"id\":4,\"name\":\"butterfly\",\"sol\":false},{\"id\":5,\"name\":\"pizza\",\"sol\":false},{\"id\":6,\"name\":\"mountains\",\"sol\":false},{\"id\":7,\"name\":\"hills\",\"sol\":false},{\"id\":8,\"name\":\"street-with-people\",\"sol\":false},{\"id\":9,\"name\":\"skyline\",\"sol\":false}]");

/***/ }),

/***/ "./src/assets/spelling/words.json":
/*!****************************************!*\
  !*** ./src/assets/spelling/words.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"word\":\"Dackel\",\"level\":1,\"solved\":false},{\"id\":2,\"word\":\"Fahne\",\"level\":1,\"solved\":false},{\"id\":3,\"word\":\"Höhle\",\"level\":1,\"solved\":false},{\"id\":4,\"word\":\"Zunge\",\"level\":1,\"solved\":false},{\"id\":5,\"word\":\"Finte\",\"level\":1,\"solved\":false},{\"id\":6,\"word\":\"Lösung\",\"level\":1,\"solved\":false},{\"id\":7,\"word\":\"Ritze\",\"level\":1,\"solved\":false},{\"id\":8,\"word\":\"Politik\",\"level\":1,\"solved\":false},{\"id\":9,\"word\":\"ohne\",\"level\":1,\"solved\":false},{\"id\":10,\"word\":\"Meise\",\"level\":1,\"solved\":false},{\"id\":11,\"word\":\"loben\",\"level\":1,\"solved\":false},{\"id\":12,\"word\":\"Liebe\",\"level\":1,\"solved\":false},{\"id\":13,\"word\":\"ungut\",\"level\":1,\"solved\":false},{\"id\":14,\"word\":\"rennen\",\"level\":1,\"solved\":false},{\"id\":15,\"word\":\"Sprint\",\"level\":1,\"solved\":false},{\"id\":16,\"word\":\"Adresse\",\"level\":2,\"solved\":false},{\"id\":17,\"word\":\"Gangster\",\"level\":2,\"solved\":false},{\"id\":18,\"word\":\"Charisma\",\"level\":2,\"solved\":false},{\"id\":19,\"word\":\"Fitness\",\"level\":2,\"solved\":false},{\"id\":20,\"word\":\"Dudelsack\",\"level\":2,\"solved\":false},{\"id\":21,\"word\":\"Gitarre\",\"level\":2,\"solved\":false},{\"id\":22,\"word\":\"Joghurt/Jogurt\",\"level\":2,\"solved\":false},{\"id\":23,\"word\":\"minimal\",\"level\":2,\"solved\":false},{\"id\":24,\"word\":\"nämlich\",\"level\":2,\"solved\":false},{\"id\":25,\"word\":\"Quarzuhr\",\"level\":2,\"solved\":false},{\"id\":26,\"word\":\"komplett\",\"level\":2,\"solved\":false},{\"id\":27,\"word\":\"vielleicht\",\"level\":2,\"solved\":false},{\"id\":28,\"word\":\"Hanfsamen\",\"level\":2,\"solved\":false},{\"id\":29,\"word\":\"Masterarbeit\",\"level\":2,\"solved\":false},{\"id\":30,\"word\":\"buchstabieren\",\"level\":2,\"solved\":false},{\"id\":31,\"word\":\"googeln\",\"level\":3,\"solved\":false},{\"id\":32,\"word\":\"Empathie\",\"level\":3,\"solved\":false},{\"id\":33,\"word\":\"galoppieren\",\"level\":3,\"solved\":false},{\"id\":34,\"word\":\"Graffiti\",\"level\":3,\"solved\":false},{\"id\":35,\"word\":\"aggressiv\",\"level\":3,\"solved\":false},{\"id\":36,\"word\":\"Mobiliar\",\"level\":3,\"solved\":false},{\"id\":37,\"word\":\"Ukulele\",\"level\":3,\"solved\":false},{\"id\":38,\"word\":\"Satellit\",\"level\":3,\"solved\":false},{\"id\":39,\"word\":\"Xylophon/Xylofon\",\"level\":3,\"solved\":false},{\"id\":40,\"word\":\"Trilogie\",\"level\":3,\"solved\":false},{\"id\":41,\"word\":\"unsympathisch\",\"level\":3,\"solved\":false},{\"id\":42,\"word\":\"unentgeltlich\",\"level\":3,\"solved\":false},{\"id\":43,\"word\":\"wiederum\",\"level\":3,\"solved\":false},{\"id\":44,\"word\":\"Mathematik\",\"level\":3,\"solved\":false},{\"id\":45,\"word\":\"lynchen\",\"level\":3,\"solved\":false},{\"id\":46,\"word\":\"adäquat\",\"level\":4,\"solved\":false},{\"id\":47,\"word\":\"Portemonnaie/Portmonee\",\"level\":4,\"solved\":false},{\"id\":48,\"word\":\"Katastrophal\",\"level\":4,\"solved\":false},{\"id\":49,\"word\":\"Gratwanderung\",\"level\":4,\"solved\":false},{\"id\":50,\"word\":\"Akquise\",\"level\":4,\"solved\":false},{\"id\":51,\"word\":\"Kumulation\",\"level\":4,\"solved\":false},{\"id\":52,\"word\":\"Symmetrie\",\"level\":4,\"solved\":false},{\"id\":53,\"word\":\"Zucchini\",\"level\":4,\"solved\":false},{\"id\":54,\"word\":\"Porzellan\",\"level\":4,\"solved\":false},{\"id\":55,\"word\":\"Reling\",\"level\":4,\"solved\":false},{\"id\":56,\"word\":\"Rhetorik\",\"level\":4,\"solved\":false},{\"id\":57,\"word\":\"Resümee\",\"level\":4,\"solved\":false},{\"id\":58,\"word\":\"Rückgrat\",\"level\":4,\"solved\":false},{\"id\":59,\"word\":\"Verwandtschaft\",\"level\":4,\"solved\":false},{\"id\":60,\"word\":\"Jackett\",\"level\":4,\"solved\":false},{\"id\":61,\"word\":\"syllabieren\",\"level\":5,\"solved\":false},{\"id\":62,\"word\":\"Mitochondrium\",\"level\":5,\"solved\":false},{\"id\":63,\"word\":\"Chrysantheme\",\"level\":5,\"solved\":false},{\"id\":64,\"word\":\"Diarrhö\",\"level\":5,\"solved\":false},{\"id\":65,\"word\":\"dilettantisch\",\"level\":5,\"solved\":false},{\"id\":66,\"word\":\"Hasardeur\",\"level\":5,\"solved\":false},{\"id\":67,\"word\":\"Lappalie\",\"level\":5,\"solved\":false},{\"id\":68,\"word\":\"Ouvertüre\",\"level\":5,\"solved\":false},{\"id\":69,\"word\":\"Stracciatella\",\"level\":5,\"solved\":false},{\"id\":70,\"word\":\"applanieren\",\"level\":5,\"solved\":false},{\"id\":71,\"word\":\"Diphtherie\",\"level\":5,\"solved\":false},{\"id\":72,\"word\":\"Epikureer\",\"level\":5,\"solved\":false},{\"id\":73,\"word\":\"Mischpoche\",\"level\":5,\"solved\":false},{\"id\":74,\"word\":\"Indanthren\",\"level\":5,\"solved\":false},{\"id\":75,\"word\":\"Souterrain\",\"level\":5,\"solved\":false}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\igvs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map