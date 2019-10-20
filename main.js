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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-section\">\n  <div class=\"container\">\n    <div class=\"heading\">\n      About\n    </div>\n    <p>Founder & Managing Director Jagjeet Singh Sembhi (QEAC N087) :- Overseas Education expert  graduated from Australia & Entrepreneurial Experience of 8+years on recruiting students onshore as well as offshore from four major Asian Pacific countries & visited more than eight countries around the world. Myiec.com is a platform for students to choose their study destination also where they get actual and personalised counseling and information that helps them plan their education journey Abroad ie: Career Counseling, Country and University selection, Admissions, Scholarship, and much more. \n\n        MyIEC is a professional consulting in worlds education provides professional counseling and information to students.\n        \n        To know more about MYIEC, contact our Corporate Office\n        Office no. 206-210, 2nd Floor, Pearl Business park - 452010 Reach out to us on: info@MyIEC.com or \n        Whats app: +61424398841</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _study_abroad_study_abroad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./study-abroad/study-abroad.component */ "./src/app/study-abroad/study-abroad.component.ts");
/* harmony import */ var _coaching_coaching_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coaching/coaching.component */ "./src/app/coaching/coaching.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"] },
    { path: 'coaching', component: _coaching_coaching_component__WEBPACK_IMPORTED_MODULE_6__["CoachingComponent"] },
    { path: 'studyAbroad', component: _study_abroad_study_abroad_component__WEBPACK_IMPORTED_MODULE_5__["StudyAbroadComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <div class=\"header-top\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-md-3 col-sm-4 col-xs-12\">\n                  <div class=\"logo-box\">\n                      <a href=\"\"><img src=\"../assets/images/logo.png\" alt=\"MyISC\"/></a>\n                  </div>\n              </div>\n              <div class=\"col-md-9 col-sm-8 col-xs-12\">\n                  <div class=\"info-area\">\n                      <div class=\"social-top\">\n                          <ul>\n                              <li><a class=\"\" href=\"{{socialInstagram}}\" target=\"_blank\"><i class=\"la la-linkedin\"></i></a></li>\n                              <li><a class=\"\" href=\"{{socialFacebook}}\" target=\"_blank\"><i class=\"la la-facebook\"></i></a></li>\n                              <li><a class=\"\" href=\"{{socialTwitter}}\" target=\"_blank\"><i class=\"la la-twitter\"></i></a></li>\n                              <li><a class=\"\" href=\"{{socialLinkedin}}\" target=\"_blank\"><i class=\"la la-linkedin\"></i></a></li>\n                              <li><a class=\"\" href=\"{{socialYoutube}}\" target=\"_blank\"><i class=\"la la-youtube\"></i></a></li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>      \n  <div class=\"theme_menu stricky\">\n    <div class=\"row\">\n        <div class=\"menu-area\">\n          <div class=\"container\">\n            <nav class=\"main-nav\">\n            <ul>\n              <li><a class=\"menu-link\" routerLink=\"/home\" routerLinkActive=\"active-link\">Home</a></li>\n              <li><a class=\"menu-link\" routerLink=\"/about\" routerLinkActive=\"active-link\">About</a></li>\n              <li><a class=\"menu-link\" routerLink=\"/studyAbroad\" routerLinkActive=\"active-link\">Study Abroad</a></li>\n              <li><a class=\"menu-link\" routerLink=\"/coaching\" routerLinkActive=\"active-link\">Coaching</a></li>\n              <li><a class=\"menu-link\" routerLink=\"/blog\" routerLinkActive=\"active-link\">Blog</a></li>\n              <li><a class=\"menu-link\" routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact</a></li>\n            </ul>\n            </nav>\n          </div>\n        </div>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>\n<footer class=\"main-footer-area\">\n  <div class=\"main-footer\">\n        <div class=\"container\">\n            <div class=\"clearfix\">\n              <div class=\"col-sm-4 col-xs-12\">\n                  <div class=\"footer-info\">\n                      <div class=\"footer-logo\">\n                          <a href=\"#\">\n                              <img src=\"../assets/images/logo.png\" alt=\"MyISC\"/>\n                          </a>\n                      </div>\n                      <div class=\"text\">\n                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                      </div>\n                      <div class=\"footer-title\">Follow Us</div>\n                      <div class=\"social-footer\">\n                          <ul>\n                                <li><a class=\"\" href=\"{{socialInstagram}}\" target=\"_blank\"><i class=\"la la-linkedin\"></i></a></li>\n                                <li><a class=\"\" href=\"{{socialFacebook}}\" target=\"_blank\"><i class=\"la la-facebook\"></i></a></li>\n                                <li><a class=\"\" href=\"{{socialTwitter}}\" target=\"_blank\"><i class=\"la la-twitter\"></i></a></li>\n                                <li><a class=\"\" href=\"{{socialLinkedin}}\" target=\"_blank\"><i class=\"la la-linkedin\"></i></a></li>\n                                <li><a class=\"\" href=\"{{socialYoutube}}\" target=\"_blank\"><i class=\"la la-youtube\"></i></a></li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-sm-4 col-xs-12\">\n                  <div class=\"\">\n                      <div class=\"footer-title\">Blog</div>\n                      <div class=\"single-box\">\n                          <div class=\"text\">\n                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                          </div>\n                          <div class=\"comment\">5 Comments</div>\n                      </div>\n                      <div class=\"single-box\">\n                          <div class=\"text\">\n                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                          </div>\n                          <div class=\"comment\">5 Comments</div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-sm-4 col-xs-12\">\n                  <div>\n                      <div class=\"footer-title\">OUR LOCATION</div>\n                      <div class=\"single-box\">\n                          <div class=\"text\"><i class=\"ficon ft-home\"></i>206-210, 2nd Floor, Pearl Business park - 452010</div>\n                          <div class=\"text\"><i class=\"ficon ft-phone\"></i> +614-2439-8841</div>\n                          <div class=\"text\"><i class=\"ficon ft-mail\"></i>info@{{title}}.com</div>\n                      </div>\n                  </div>\n              </div>\n            </div>\n        </div>\n  </div>\n  <div class=\"container\">\n      <div class=\"footer-bottom\">\n          <div class=\"copyright\">Copyright © 2019 <a href=\"#\">{{title}}</a> All Rights Reserved</div>\n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test .testing {\n  padding: 20px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyIEC';
        this.socialInstagram = 'https://www.instagram.com/myiec/';
        this.socialFacebook = 'https://www.facebook.com/MYIEC-119994556073012/';
        this.socialLinkedin = 'https://www.facebook.com/MYIEC-119994556073012/';
        this.socialYoutube = 'https://www.facebook.com/MYIEC-119994556073012/';
        this.socialTwitter = 'https://www.facebook.com/MYIEC-119994556073012/';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _study_abroad_study_abroad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./study-abroad/study-abroad.component */ "./src/app/study-abroad/study-abroad.component.ts");
/* harmony import */ var _coaching_coaching_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coaching/coaching.component */ "./src/app/coaching/coaching.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Import your library








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _study_abroad_study_abroad_component__WEBPACK_IMPORTED_MODULE_8__["StudyAbroadComponent"],
                _coaching_coaching_component__WEBPACK_IMPORTED_MODULE_9__["CoachingComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__["OwlModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"blog-section\">\n    <div class=\"container\">\n      <div class=\"heading\">\n        Blog\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/coaching/coaching.component.html":
/*!**************************************************!*\
  !*** ./src/app/coaching/coaching.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"coaching-section\">\n  <div class=\"container\">\n    <div class=\"heading\">\n        Couchings We are provides\n    </div>\n    <p>\n        IELTS is an English language exam that is required to be taken by international candidates considering \n        studying or working in a country where English is the main language of communication. Most popular countries\n        where IELTS is accepted for university admissions are the UK, Australia, New Zealand, USA, and Canada. \n        The exam mainly measures the ability of test-takers to communicate in the four basic English language skills – \n        listening, reading, speaking, and writing. IELTS exam is jointly owned and conducted by IDP Education Australia,\n        British Council, and Cambridge English Language Assessment.        \n    </p>\n  </div>\n  <div>\n    <h2>Why IELTS Exam is required?</h2>\n    <p>IELTS 2019 exam is required for migration as well as academic purpose abroad in English speaking countries like \n        Australia, UK, New Zealand, USA, and Canada. \n        It is the only English Language Test approved by UK Visas and Immigration (UKVI) for visa applicants applying \n        both outside and inside the UK. A lot of students get confused about why are the IELTS scores required. \n        The simple answer to this is that foreign universities and visa granting authorities need to be sure that you will not have communication issues while staying in the country. You need to show a good understanding and strong command of the English language and that is why your overall IELTS scores are so important. Another common doubt students have is whether IELTS is a compulsory exam or not. No, IELTS isn’t compulsory in all university admissions. Many universities might not even require IELTS scores for admission purposes. But remember that if you don’t give IELTS, your chances of getting the student visa might suffer as the visa officers may not be convinced about your English proficiency without IELTS scores. So it is safer to appear for IELTS and aim to\n        score at least 6 bands overall.\n        \n        You can take the IELTS exam with the British Council or IDP up to once a week (four times a month). \n        </p>\n  </div>\n  <div>\n    <h2>Types of IELTS</h2>\n    <p>There are two types of IELTS exam: IELTS Academic and IELTS General Training. Listening and speaking sections\n        are the same for both these tests, however, the subject matter for the writing and reading sections are different \n        depending on which test one takes. The Reading, Writing and Listening sections of the IELTS tests are completed \n        on the same day of the test with no breaks between them. However, the Speaking section can be completed either a \n        week before or after the other tests date. This information test can be taken from your test centre. Read: Which \n        exam to give for which course to study abroad\n        </p>\n  </div>\n  <div>\n    <h2>IELTS Academic Test</h2>\n    <p> IELTS Academic is taken by those who apply for higher education or professional registration abroad.</p>\n  </div>\n  <div>\n    <h2>IELTS General Test</h2>\n    <p>IELTS General Test is taken by those who wish to migrate to major English speaking countries like Canada, Australia, and the UK. This test is also taken by those who want to enroll in training programs or secondary education or wants to gain work experience in a country where English is the main language used for communication.</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/coaching/coaching.component.scss":
/*!**************************************************!*\
  !*** ./src/app/coaching/coaching.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/coaching/coaching.component.ts":
/*!************************************************!*\
  !*** ./src/app/coaching/coaching.component.ts ***!
  \************************************************/
/*! exports provided: CoachingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachingComponent", function() { return CoachingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoachingComponent = /** @class */ (function () {
    function CoachingComponent() {
    }
    CoachingComponent.prototype.ngOnInit = function () {
    };
    CoachingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coaching',
            template: __webpack_require__(/*! ./coaching.component.html */ "./src/app/coaching/coaching.component.html"),
            styles: [__webpack_require__(/*! ./coaching.component.scss */ "./src/app/coaching/coaching.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CoachingComponent);
    return CoachingComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contact-section\">\n    <div class=\"container\">\n      <div class=\"heading\">\n        Contact\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-slider\">\n    <div class=\"container-fluid\">\n      <!-- You can use owl-carousel selector to include its component -->\n      <owl-carousel [options]=\"headerBanner\"  [carouselClasses]=\"['owl-carousel', 'owl-theme', 'row', 'sliding', 'slide-nav', 'headerBanner']\">\n        <div class=\"item\" *ngFor=\"let image of headerSlider;let i= index\">\n            <li class=\"slider-wrapper\">\n                <div class=\"image\"><img src=\"{{image.image}}\" alt=\"\"></div>\n                <div class=\"slider-caption\">\n                    <div class=\"container\">\n                        <div class=\"tp-title\">{{image.title}}</div>\n                        <h1>{{image.descriptionOne}}</h1>\n                        <!-- <div class=\"text\">{{image.descriptionTwo}}</div> -->\n                        <div class=\"button\">\n                            <a href=\"#\" class=\"btn-one\">{{image.fillButton}}</a>\n                            <a href=\"#\" class=\"btn-two\">{{image.borderButton}}</a>\n                        </div>\n                    </div>  \n                </div>\n                <div class=\"slide-overlay\"></div>\n            </li>\n        </div>\n      </owl-carousel>\n    </div>\n  </section>\n  <section class=\"home-section\">\n      <div class=\"container_gray_bg\" id=\"home_feat_1\">\n          <div class=\"container\">\n            <div class=\"heading\">\n                popular institutions\n            </div>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <div class=\"row\">\n              <div class=\"col-md-4 col-sm-4\" *ngFor=\"let institutions of institutionsList;\">\n                <div class=\"home_feat_1_box\">\n                  <a href=\"#\">\n                    <img src=\"{{institutions.image}}\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"short_info\">\n                      <h3>{{institutions.name}}</h3>\n                      <i class=\"la la-rocket\"></i>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n  </section>\n  <section class=\"team-section\">\n    <div class=\"container\">\n        <div class=\"heading\">\n            our student admitted\n        </div>\n  \n        <owl-carousel [options]=\"studentAdmitted\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <div class=\"item\" *ngFor=\"let image of studentAdmittedList;let i= index\">\n                <div class=\"single-team\">\n                    <div class=\"team-img\">\n                        <img class=\"slide-image\" src=\"{{image.image}}\" alt=\"\">\n                    </div>\n                    <div class=\"team-details\">\n                        <span class=\"name\">\n                            {{image.name}}\n                        </span>\n                        <span class=\"member-role\">\n                            USA\n                        </span>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                        </p>\n                    </div>\n                </div>\n            </div>\n        </owl-carousel>\n    </div>\n  </section>\n  <section class=\"project-completed\">\n    <div class=\"project-completed-overlay\"></div>\n    <div class=\"container\">\n    <div class=\"clearfix\">\n        <div class=\"col-sm-4 col-xs-12\">\n            <div class=\"counter\">\n                <i class=\"la la-bicycle\"></i>\n                <strong>\n                    5000+\n                    <span>Student</span>\n                </strong>\n            </div>\n        </div>\n        <div class=\"col-sm-4 col-xs-12\">\n            <div class=\"counter\">\n                <i class=\"la la-building\"></i>\n                <strong>\n                    50+\n                    <span>Universities</span>\n                </strong>\n            </div>\n        </div>\n        <div class=\"col-sm-4 col-xs-12\">\n            <div class=\"counter\">\n                <i class=\"la la-flag-checkered\"></i>\n                <strong>\n                   6+\n                    <span>Country</span>\n                </strong>\n            </div>\n        </div>\n    </div>\n    </div>\n  </section>\n  <section class=\"testimonials\">\n      <div class=\"testimonials-overlay\"></div>\n      <div class=\"content\">\n      <div class=\"heading\">\n          what students think about us\n      </div>\n        <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                      <owl-carousel  [options]=\"StudentTestimonials\" [carouselClasses]=\"['owl-theme', 'row', 'sliding', 'customersTestimonials']\">\n                          \n                        <div class=\"item\" *ngFor=\"let testimonial of StudentTestimonialsList;let i= index\">\n                              <div class=\"shadow-effect\">\n                                  <img class=\"img-circle\" src=\"{{testimonial.image}}\" alt=\"\">\n                                  <p>{{testimonial.testimonial}}</p>\n                              </div>\n                              <div class=\"testimonial-name\">{{testimonial.name}}</div>\n                          </div>\n                        \n                      </owl-carousel>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </section>\n    <section class=\"photo-section container_blue_bg\">\n      <div class=\"container\">\n            <div class=\"heading\">\n                Photos\n            </div>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <owl-carousel [options]=\"photoOptions\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n              <div class=\"item\" *ngFor=\"let photo of photosList;let i= index\">\n                <img class=\"slide-image\" src=\"{{photo.image}}\" >\n                <!-- <div class=\"slide-text\">\n                  <h4>{{photo.text}}</h4>\n                </div> -->\n              </div>\n            </owl-carousel>\n      </div>\n  </section>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.headerBanner = {
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'slideInDown',
            active: true,
            smartSpeed: 5000,
            autoplay: 5000,
            navText: ['<span class="ficon ft-chevron-left"></span>', '<span class="ficon ft-chevron-right"></span>'],
            responsiveClass: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                }
                // 600: {
                //   items: 1,
                //   nav: true
                // },
                // 1000: {
                //   items: 2,
                //   nav: true,
                //   loop: false
                // },
                // 1500: {
                //   items: 3,
                //   nav: true,
                //   loop: false
                // }
            }
        };
        this.headerSlider = [
            {
                title: "Excellence in teaching",
                descriptionOne: "Change the world by any work you want",
                descriptionTwo: "to Get Our Globe Beautiful ..JOIN WITH US",
                fillButton: "Take a Tour",
                borderButton: "About Us",
                image: "../assets/images/banner/banner1.jpg"
            },
            {
                title: "Forward. Thinking.",
                descriptionOne: "Change the world and get reworded",
                descriptionTwo: "to Get Our Globe Beautiful ..JOIN WITH US",
                fillButton: "Take a Tour",
                borderButton: "About Us",
                image: "../assets/images/banner/banner2.jpg"
            },
            {
                title: "Great students community",
                descriptionOne: "Change the world by any work you want",
                descriptionTwo: "to Get Our Globe Beautiful ..JOIN WITH US",
                fillButton: "Take a Tour",
                borderButton: "About Us",
                image: "../assets/images/banner/banner3.jpg"
            },
            {
                title: "Get Everything Right",
                descriptionOne: "Change the world by any work you want",
                descriptionTwo: "to Get Our Globe Beautiful ..JOIN WITH US",
                fillButton: "Take a Tour",
                borderButton: "About Us",
                image: "../assets/images/banner/banner4.jpg"
            }
        ];
        this.institutionsList = [
            {
                name: "Australia",
                image: "../assets/images/university.jpg"
            },
            {
                name: "Canada",
                image: "../assets/images/university.jpg"
            },
            {
                name: "New Zealand",
                image: "../assets/images/university.jpg"
            },
            {
                name: "USA",
                image: "../assets/images/university.jpg"
            },
            {
                name: "UK",
                image: "../assets/images/university.jpg"
            },
            {
                name: "Singapore",
                image: "../assets/images/university.jpg"
            },
            {
                name: "Ireland",
                image: "../assets/images/university.jpg"
            },
            {
                name: "Europe",
                image: "../assets/images/university.jpg"
            },
            {
                name: "Dubai",
                image: "../assets/images/university.jpg"
            }
        ];
        this.studentAdmitted = {
            loop: true,
            margin: 25,
            nav: false,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            active: true,
            smartSpeed: 3000,
            autoplay: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1500: {
                    items: 4
                }
            }
        };
        this.studentAdmittedList = [
            {
                name: "Cristina rose",
                image: "../assets/images/student/student01.jpg"
            },
            {
                name: "Jake reilly",
                image: "../assets/images/student/student02.jpg"
            },
            {
                name: "Mary jane",
                image: "../assets/images/student/student03.jpg"
            },
            {
                name: "mark bagley",
                image: "../assets/images/student/student04.jpg"
            },
            {
                name: "Cristina Rose",
                image: "../assets/images/student/student01.jpg"
            },
            {
                name: "Jake Reilly",
                image: "../assets/images/student/student02.jpg"
            },
            {
                name: "mary jane",
                image: "../assets/images/student/student03.jpg"
            },
            {
                name: "mark bagley",
                image: "../assets/images/student/student04.jpg"
            }
        ];
        this.StudentTestimonials = {
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: false,
            dots: false,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        };
        this.StudentTestimonialsList = [
            {
                name: "Dalveer Singh",
                testimonial: "Hello , I’m Dalveer Singh from Indore. I did my IELTS and got my Canada visa within 6 days from MyIEC Indore. The guidance and support from Jagjeet sir and Navneet sir was never ending . All my queries and doubts are cleared . I recommend all of you who are looking for a positive response should immediately apply and feel the difference. Visa for Canada",
                image: "../assets/images/user01.jpg"
            },
            {
                name: "Harbaksh Singh",
                testimonial: "I visited every institute which is in my city and every one said me your profile is too week so after that i eared about MyIEC they give me right guidance for choose better university in Australia.Now, I have Australia visa without IELTS, I have got my Australia VIsa approved in only 4 days with #MYIEC Thanks, #MYIECTeam Indore. Specially Jagjeet sir whose counseling and appropriate guidance lead to my visa success. ( I Personally recommended all the student who are looking for study abroad guidance then visit MYIEC Indore, One of the best overseas consultancy in Indore ) Thanks a lot !!",
                image: "../assets/images/user02.jpg"
            },
            {
                name: "Harshit Sahu",
                testimonial: "This is the best place to process your visa file. Services provided by this consultancy was very impressive. And whenever I got doubt about my file process I asked them. And they replied me back very quickly even they were not in their working hours. So overall everything is good about this consultancy. Finally, I got my visa only in 15 days",
                image: "../assets/images/user03.jpg"
            }
        ];
        this.photoOptions = {
            margin: 25,
            loop: true,
            smartSpeed: 3000,
            autoplay: 3000,
            nav: true,
            autoHeight: true,
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                1500: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        };
        this.photosList = [
            {
                text: "Everfresh Flowers",
                image: "../assets/images/photos/myIEC01.jpg"
            },
            {
                text: "Festive Deer",
                image: "../assets/images/photos/myIEC02.jpg"
            },
            {
                text: "Morning Greens",
                image: "../assets/images/photos/myIEC03.jpg"
            },
            {
                text: "Bunch of Love",
                image: "../assets/images/photos/myIEC04.jpg"
            },
            {
                text: "Blue Clear",
                image: "../assets/images/photos/myIEC05.jpg"
            },
            {
                text: "Evening Clouds",
                image: "../assets/images/photos/myIEC06.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC07.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC08.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC09.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC10.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC11.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC12.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC13.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC14.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC15.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC16.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC17.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC18.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC19.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC20.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC21.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC22.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "../assets/images/photos/myIEC23.jpg"
            },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/study-abroad/study-abroad.component.html":
/*!**********************************************************!*\
  !*** ./src/app/study-abroad/study-abroad.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"studyAbroad-section\">\n    <div class=\"container\">\n      <div class=\"heading\">\n          study Abroad\n      </div>\n      <div>\n        <p>Make a excellent career in the country of your choice. Get a expert intelligence & information. On colleges, courses, exams, admission, student visa, and application process. Studying abroad is the act of a student pursuing educational opportunities in a country other than one's own. This can include primary, secondary and post-secondary students. Studying abroad is a valuable program for international students as it is intended to increase the students' knowledge and understanding of other cultures. International education not only helps students with their language and communicating skills, but also encourages students to develop a different perspective and cross-cultural understanding of their studies which will further their education and benefit them in their career. The main factors that determine the outcome quality of international studies are transaction dynamics (between the environmental conditions and the international student), quality of environment, and the student's coping behavior.</p>\n      </div>\n      <div>\n        <h2>Why Study Abroad?</h2>\n        <p>Career opportunities: Of course, the main reason for getting a degree in the first place is to improve your career prospects. In a globalised, well-connected world, employers increasingly value graduates with international experience and education.Studying abroad helps you to learn new languages, appreciate other cultures, overcome challenges of living in another country and gain a greater understanding of the world. These are all things that modern businesses look for when hiring, and such traits will only become more important in the future.</p>\n      </div>\n      <div>\n        <h2>Study in Australia</h2>\n        <p>You can follow your path to a place at a prestigious Australian university with Kaplan. If you’re interested in gaining a great degree from a university in Australia, explore our range of study options. Our preparation, or ‘pathway’, courses will help you prepare for degree-level study at Australian universities. It can also help you, along with your existing qualifications; qualify for entry to your preferred degree and university. Whichever route you choose to take to university in Australia, we’ll help you study your way.</p>\n      </div>\n      <div>\n        <h2>Study in USA</h2>\n        <p>USA has emerged as a leading country known for its quality education. U.S.A offers various options to choose from according to your academic and cultural preferences. An international degree opens up a wide range of career prospects and a degree from reputed universities widens the scope even further. Due to the varied insight into different fields of study offered by universities of USA, it broadens the scope of the career path that the student chooses and it is known that international companies look for candidates that offer them with a different take or perspective on their products.</p>\n      </div>\n      <div>\n        <h2>Study in UK</h2>\n        <p>British higher education and qualifications have an impressive international reputation, with students in the United Kingdom encouraged to develop their potential while enjoying a full social life. Students who register are guided, step-by-step, through the process and use the online application system, Apply.\n            Studying in the UK will help you develop excellent language skills. The English language is of crucial importance in today’s global business arena. (Most UK universities offer language support to international students but institutions have their own criteria for the level of English that students need to master.) Undergraduate and postgraduate courses in the UK tend to be shorter than in other countries which can help to keep the cost of tuition fees and living expenses down. \n        </p>\n      </div>\n      <div>\n        <h2>Study in New-Zealand</h2>\n        <p>Quality learning experience New Zealand university system is research-based as it is based on the British education model. This means there are a lot of similarities between the two systems, such as the teaching methods. The fact India also follows British education system makes it easier for Indian students to adjust. The academic staff is expected to be researchers as well as teachers. This ensures a high quality learning experience. New Zealand Vice-Chancellors' Committee, the universities' representative body, has legal responsibility for course approval and moderation.</p>\n      </div>\n      <div>\n        <h2>Study in Canada</h2>\n        <p>Quality and internationally recognized degrees Canada places a lot of importance to education and maintains very high standards in education. A degree acquired from Canadian universities in recognized globally and is valued highly in the international job market. Canada is renowned for its research-intensive universities. Canada is ranked 4th in the world for scientific research. Canada is one of the few nations that offer job opportunities to students who have graduated from Canadian Universities and have obtained a Canadian degree. In fact, after finishing their studies, international students can work in Canada for up to 3 years!</p>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/study-abroad/study-abroad.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/study-abroad/study-abroad.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/study-abroad/study-abroad.component.ts":
/*!********************************************************!*\
  !*** ./src/app/study-abroad/study-abroad.component.ts ***!
  \********************************************************/
/*! exports provided: StudyAbroadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyAbroadComponent", function() { return StudyAbroadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudyAbroadComponent = /** @class */ (function () {
    function StudyAbroadComponent() {
    }
    StudyAbroadComponent.prototype.ngOnInit = function () {
    };
    StudyAbroadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-study-abroad',
            template: __webpack_require__(/*! ./study-abroad.component.html */ "./src/app/study-abroad/study-abroad.component.html"),
            styles: [__webpack_require__(/*! ./study-abroad.component.scss */ "./src/app/study-abroad/study-abroad.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StudyAbroadComponent);
    return StudyAbroadComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\myiec\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map