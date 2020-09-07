(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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




const routes = [
    {
        path: 'books',
        pathMatch: 'full',
        children: [
            {
                path: '',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./books/books.module */ "./src/app/books/books.module.ts")).then((m) => m.BooksModule),
            },
        ],
    },
    {
        path: 'authors',
        pathMatch: 'full',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | authors-authors-module */ "authors-authors-module").then(__webpack_require__.bind(null, /*! ./authors/authors.module */ "./src/app/authors/authors.module.ts")).then((m) => m.AuthorsModule),
            },
        ],
    },
    {
        path: 'book',
        children: [
            {
                path: ':id',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./book/book.module */ "./src/app/book/book.module.ts")).then((m) => m.BookModule),
            },
        ],
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full',
    },
    {
        path: '**',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./not-found/not-found.module */ "./src/app/not-found/not-found.module.ts")).then((m) => m.NotFoundModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
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
/* harmony import */ var _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/services/sidebar.service */ "./src/app/layout/services/sidebar.service.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AppComponent {
    constructor(sbService) {
        this.sbService = sbService;
        this.showSideBar = false;
    }
    show() {
        this.showSideBar = !this.showSideBar;
        this.sbService.change(this.showSideBar);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[3, "burgerClicked"], ["id", "sidebar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("burgerClicked", function AppComponent_Template_app_header_burgerClicked_1_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 102;\n}\n\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n\nmain[_ngcontent-%COMP%]   #sidebar[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFHUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMjtcbn1cbm1haW57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAjc2lkZWJhcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/comma/comma.module */ "./src/app/libs/comma/comma.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_books_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books/books.module */ "./src/app/books/books.module.ts");
/* harmony import */ var _book_book_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book/book.module */ "./src/app/book/book.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.module */ "./src/app/not-found/not-found.module.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _books_books_module__WEBPACK_IMPORTED_MODULE_6__["BooksModule"],
            _book_book_module__WEBPACK_IMPORTED_MODULE_7__["BookModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_3__["CommaModule"],
            _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _books_books_module__WEBPACK_IMPORTED_MODULE_6__["BooksModule"],
        _book_book_module__WEBPACK_IMPORTED_MODULE_7__["BookModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
        _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_3__["CommaModule"],
        _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _books_books_module__WEBPACK_IMPORTED_MODULE_6__["BooksModule"],
                    _book_book_module__WEBPACK_IMPORTED_MODULE_7__["BookModule"],
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                    _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_3__["CommaModule"],
                    _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/book/book-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/book/book-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRoutingModule", function() { return BookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/book/components/book/book.component.ts");





const routes = [
    {
        path: '',
        component: _components_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"],
    },
];
class BookRoutingModule {
}
BookRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BookRoutingModule });
BookRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BookRoutingModule_Factory(t) { return new (t || BookRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BookRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/book/book.module.ts":
/*!*************************************!*\
  !*** ./src/app/book/book.module.ts ***!
  \*************************************/
/*! exports provided: BookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModule", function() { return BookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/comma/comma.module */ "./src/app/libs/comma/comma.module.ts");
/* harmony import */ var _book_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-routing.module */ "./src/app/book/book-routing.module.ts");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/book/components/book/book.component.ts");










class BookModule {
}
BookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BookModule });
BookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BookModule_Factory(t) { return new (t || BookModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _book_routing_module__WEBPACK_IMPORTED_MODULE_7__["BookRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BookModule, { declarations: [_components_book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _book_routing_module__WEBPACK_IMPORTED_MODULE_7__["BookRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _book_routing_module__WEBPACK_IMPORTED_MODULE_7__["BookRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                    _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/book/components/book/book.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book/components/book/book.component.ts ***!
  \********************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _books_services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../books/services/books.service */ "./src/app/books/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _libs_comma_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/comma/pipes/comma.pipe */ "./src/app/libs/comma/pipes/comma.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









class BookComponent {
    constructor(booksService, route) {
        this.booksService = booksService;
        this.route = route;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((params) => {
            this.bookId = params.id;
        });
        this.booksService.getBookById(this.bookId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((data) => {
            this.book = data;
            console.log(this.book);
        }, (err) => console.log('HTTP Error', err));
    }
    ngOnDestroy() {
        this.destroy$.next(null);
        this.destroy$.complete();
    }
}
BookComponent.ɵfac = function BookComponent_Factory(t) { return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_books_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookComponent, selectors: [["ng-component"]], decls: 19, vars: 19, consts: [["id", "bookDetails"], ["cols", "2", "rowHeight", "25%"], [3, "colspan"], [3, "rowspan"], ["src", "../../../../assets//book.png", "alt", "Book image not found"], ["col", "2"]], template: function BookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "comma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book == null ? null : ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowspan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("                Author: ", ctx.book == null ? null : ctx.book.author.first_name, " ", ctx.book == null ? null : ctx.book.author.last_name, "\n\n                Genres: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, ctx.book == null ? null : ctx.book.genres), "\n\n                Writing date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 13, ctx.book == null ? null : ctx.book.writing_date, "dd MMMM yyyy"), " \n\n                Release date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 16, ctx.book == null ? null : ctx.book.release_date, "dd MMMM yyyy"), " \n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", ctx.book == null ? null : ctx.book.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book == null ? null : ctx.book.description, " ");
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"]], pipes: [_libs_comma_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_6__["CommaPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["#bookDetails[_ngcontent-%COMP%] {\n  height: 99vh;\n}\n#bookDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #bookDetails[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #bookDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #bookDetails[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  color: white;\n}\n#bookDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9jb21wb25lbnRzL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvYm9vay9jb21wb25lbnRzL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib29rRGV0YWlsc3tcbiAgICBoZWlnaHQ6IDk5dmg7XG4gICAgaDEsIGgyLCBwLCBwcmV7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './book.component.html',
                styleUrls: ['./book.component.scss'],
            }]
    }], function () { return [{ type: _books_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/books/books-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/books/books-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function() { return BooksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_books_books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/books/books.component */ "./src/app/books/components/books/books.component.ts");





const routes = [
    {
        path: '',
        component: _components_books_books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
class BooksRoutingModule {
}
BooksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BooksRoutingModule });
BooksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BooksRoutingModule_Factory(t) { return new (t || BooksRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BooksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/books/books.module.ts":
/*!***************************************!*\
  !*** ./src/app/books/books.module.ts ***!
  \***************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/comma/comma.module */ "./src/app/libs/comma/comma.module.ts");
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books-routing.module */ "./src/app/books/books-routing.module.ts");
/* harmony import */ var _components_books_books_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/books/books.component */ "./src/app/books/components/books/books.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../layout/layout.module */ "./src/app/layout/layout.module.ts");












class BooksModule {
}
BooksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BooksModule });
BooksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BooksModule_Factory(t) { return new (t || BooksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _books_routing_module__WEBPACK_IMPORTED_MODULE_8__["BooksRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
            _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_7__["CommaModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BooksModule, { declarations: [_components_books_books_component__WEBPACK_IMPORTED_MODULE_9__["BooksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _books_routing_module__WEBPACK_IMPORTED_MODULE_8__["BooksRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
        _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_7__["CommaModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_books_books_component__WEBPACK_IMPORTED_MODULE_9__["BooksComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _books_routing_module__WEBPACK_IMPORTED_MODULE_8__["BooksRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                    _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_7__["CommaModule"],
                ],
                bootstrap: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/books/components/books/books.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/books/components/books/books.component.ts ***!
  \***********************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/books/services/books.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/paginator/paginator.component */ "./src/app/layout/paginator/paginator.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function BooksComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function BooksComponent_ng_template_2_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
const _c0 = function (a1) { return ["/book", a1]; };
function BooksComponent_ng_template_2_ng_template_2_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, book_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r7 == null ? null : book_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", book_r7 == null ? null : book_r7.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r7 == null ? null : book_r7.description, " ");
} }
function BooksComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BooksComponent_ng_template_2_ng_template_2_mat_card_0_Template, 10, 6, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r5.books$));
} }
function BooksComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BooksComponent_ng_template_2_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BooksComponent_ng_template_2_ng_template_2_Template, 2, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loadingBooks)("ngIfElse", _r4);
} }
const _c1 = function () { return [10, 25, 50, 75, 100, 125, 150]; };
class BooksComponent {
    constructor(booksService) {
        this.booksService = booksService;
        this.booksInQuantity = 0;
    }
    ngOnInit() {
        this.loadingPage = true;
        this.booksQuantity$ = this.booksService.getBooksInQuantity(1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data.meta.records));
        setTimeout(() => {
            this.loadingPage = false;
        }, 1000);
    }
    getFirstPageOfBooks() {
        this.getBooksInQuantity(10);
    }
    changePageSize(pagData) {
        this.getBooksInQuantity(pagData.pageSize, pagData.pageIndex);
    }
    getBooksInQuantity(booksQuantity, page) {
        this.loadingBooks = true;
        this.books$ = this.booksService.getBooksInQuantity(booksQuantity, page += 1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('books'));
        setTimeout(() => {
            this.loadingBooks = false;
        }, 500);
    }
}
BooksComponent.ɵfac = function BooksComponent_Factory(t) { return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"])); };
BooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksComponent, selectors: [["ng-component"]], decls: 6, vars: 9, consts: [["id", "books"], [4, "ngIf", "ngIfElse"], ["booksBlock", ""], [3, "maxLength", "itemsPerPage", "create", "changeSize"], ["id", "bookContent"], ["booksTable", ""], ["class", "example-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "example-card", 3, "routerLink"], ["mat-card-image", "", "src", "../../../../assets//book.png", "alt", "Book image not found", 1, "book-img"]], template: function BooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BooksComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BooksComponent_ng_template_2_Template, 4, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-paginator", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("create", function BooksComponent_Template_app_paginator_create_4_listener() { return ctx.getFirstPageOfBooks(); })("changeSize", function BooksComponent_Template_app_paginator_changeSize_4_listener($event) { return ctx.changePageSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingPage)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.loadingPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxLength", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.booksQuantity$))("itemsPerPage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__["PaginatorComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n#books[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  margin: 0 15px;\n  height: 100%;\n}\n\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20%;\n  height: 365px;\n  margin: 20px 15px 15px 20px;\n}\n\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100px;\n}\n\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .book-img[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n#books[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 100%;\n}\n\n#books[_ngcontent-%COMP%]   app-paginator[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#bookContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  width: 100%;\n  height: 85%;\n  margin-top: 50px;\n  overflow: auto;\n}\n\n.hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQUdSOztBQUZRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFJWjs7QUFIWTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBS2hCOztBQUZRO0VBQ0ksa0JBQUE7QUFJWjs7QUFGUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQUlaOztBQURJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBR1I7O0FBREk7RUFDSSxXQUFBO0FBR1I7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvYm9va3MvY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNib29rc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hdC1jYXJke1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGhlaWdodDogMzY1cHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAxNXB4IDE1cHggMjBweDtcbiAgICAgICAgbWF0LWNhcmQtaGVhZGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBtYXQtY2FyZC10aXRsZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hdC1jYXJkLWNvbnRlbnR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJvb2staW1ne1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXQtc3Bpbm5lcntcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgYXBwLXBhZ2luYXRvcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuI2Jvb2tDb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLmhpZGV7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './books.component.html',
                styleUrls: ['./books.component.scss'],
            }]
    }], function () { return [{ type: _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/books/services/books.service.ts":
/*!*************************************************!*\
  !*** ./src/app/books/services/books.service.ts ***!
  \*************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class BooksService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://muzhikov.kubesh.ru/api/';
        this.booksEndpoint = 'books';
        this.authorsEndpoint = 'authors';
    }
    getBooksInQuantity(quantity, page) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (page) {
            params = params.append('page', `${page}`);
        }
        params = params.append('limit', `${quantity}`);
        return this.http.get(`${this.apiUrl}${this.booksEndpoint}`, { params });
    }
    getBookById(bookId) {
        return this.http.get(`${this.apiUrl}${this.booksEndpoint}/${bookId}`);
    }
    getBookByAuthor(authorId) {
        return this.http.get(`${this.apiUrl}${this.authorsEndpoint}/${authorId}/${this.booksEndpoint}`);
    }
    createBook(book) {
        const url = `${this.apiUrl}${this.authorsEndpoint}/${book.author_id}/${this.booksEndpoint}`;
        return this.http.post(url, book);
    }
    updateBook(book) {
        const url = `${this.apiUrl}${this.booksEndpoint}/${book.id}`;
        return this.http.put(url, book);
    }
    deleteBook(bookId) {
        return this.http.delete(`${this.apiUrl}${this.booksEndpoint}/${bookId}`);
    }
}
BooksService.ɵfac = function BooksService_Factory(t) { return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BooksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BooksService, factory: BooksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class HeaderComponent {
    constructor() {
        this.burgerClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    showSideBar() {
        this.burgerClicked.emit();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { burgerClicked: "burgerClicked" }, decls: 6, vars: 0, consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_1_listener() { return ctx.showSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["h1[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: 1px 8px 20px black;\n  height: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLDhCQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtdG9vbGJhcntcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggYmxhY2s7XG4gICAgaGVpZ2h0OiA1NnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { burgerClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paginator/paginator.component */ "./src/app/layout/paginator/paginator.component.ts");

















class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
        _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_15__["PaginatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
        _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_15__["PaginatorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                    _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_15__["PaginatorComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                    _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_15__["PaginatorComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/paginator/paginator.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/paginator/paginator.component.ts ***!
  \*********************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");




class PaginatorComponent {
    constructor() {
        this.maxLength = 0;
        this.itemsPerPage = [];
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.create.emit(this.paginator);
    }
    changedSize(page) {
        this.pagData = {
            paginator: this.paginator,
            pageSize: page.pageSize,
            pageIndex: page.pageIndex,
            length: page.length,
        };
        this.changeSize.emit(this.pagData);
    }
}
PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) { return new (t || PaginatorComponent)(); };
PaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorComponent, selectors: [["app-paginator"]], viewQuery: function PaginatorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { maxLength: "maxLength", itemsPerPage: "itemsPerPage" }, outputs: { create: "create", changeSize: "changeSize" }, decls: 1, vars: 2, consts: [["showFirstLastButtons", "", 3, "length", "pageSizeOptions", "page"]], template: function PaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PaginatorComponent_Template_mat_paginator_page_0_listener($event) { return ctx.changedSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.maxLength)("pageSizeOptions", ctx.itemsPerPage);
    } }, directives: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]], styles: ["mat-paginator[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXBhZ2luYXRvcntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paginator',
                templateUrl: './paginator.component.html',
                styleUrls: ['./paginator.component.scss']
            }]
    }], function () { return []; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/services/sidebar.service.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/services/sidebar.service.ts ***!
  \****************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SidebarService {
    constructor() {
        this.sbOpened$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    get sbOpen$() {
        return this.sbOpened$;
    }
    change(bol) {
        this.sbOpened$.next(bol);
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/sidebar.service */ "./src/app/layout/services/sidebar.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








const _c0 = function () { return ["/books"]; };
const _c1 = function () { return ["/authors"]; };
class SidebarComponent {
    constructor(sidebar) {
        this.sidebar = sidebar;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.sidebar.sbOpen$.subscribe((data) => {
            if (data) {
                this.drawer.open();
            }
            else {
                this.drawer.close();
            }
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, decls: 12, vars: 4, consts: [[1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["mat-icon-button", "", 1, "example-icon", 3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "library_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "supervisor_account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["button[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  width: 100%;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 55px;\n  width: 75px;\n  height: 100vh;\n  background: none;\n  z-index: 101;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLCBoMntcbiAgICBtYXJnaW46IDMwcHggMDsgICBcbiAgICB3aWR0aDogMTAwJTtcbn1cbm1hdC1kcmF3ZXItY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDU1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHotaW5kZXg6IDEwMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] }]; }, { drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"]]
        }] }); })();


/***/ }),

/***/ "./src/app/libs/comma/comma.module.ts":
/*!********************************************!*\
  !*** ./src/app/libs/comma/comma.module.ts ***!
  \********************************************/
/*! exports provided: CommaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommaModule", function() { return CommaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/comma.pipe */ "./src/app/libs/comma/pipes/comma.pipe.ts");




class CommaModule {
}
CommaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommaModule });
CommaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommaModule_Factory(t) { return new (t || CommaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommaModule, { declarations: [_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__["CommaPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__["CommaPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__["CommaPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__["CommaPipe"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/libs/comma/pipes/comma.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/libs/comma/pipes/comma.pipe.ts ***!
  \************************************************/
/*! exports provided: CommaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommaPipe", function() { return CommaPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CommaPipe {
    transform(arr) {
        let strWithComma = '';
        for (let i = 0; i < (arr === null || arr === void 0 ? void 0 : arr.length); i++) {
            if (i === (arr.length - 1)) {
                strWithComma += arr[i].name;
            }
            else {
                strWithComma += arr[i].name + ', ';
            }
        }
        return strWithComma;
    }
}
CommaPipe.ɵfac = function CommaPipe_Factory(t) { return new (t || CommaPipe)(); };
CommaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "comma", type: CommaPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'comma',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/not-found/components/not-found/not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/not-found/components/not-found/not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/authors"]; };
const _c1 = function () { return ["/books"]; };
class NotFoundComponent {
    constructor() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 18, vars: 4, consts: [[1, "ribbon"], ["id", "bookshelf"], [1, "shelf"], [1, "book", "home-page"], [1, "book", "about-us"], [1, "book", "contact", 3, "routerLink"], [1, "book", "faq", 3, "routerLink"], [1, "book", "not-found"], [1, "door", "left"], [1, "door", "right"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Is links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Page not found! (click to navigation books)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Dancing+Script:400,700);\nhtml[_ngcontent-%COMP%] {\n  background-color: #5d84c3;\n}\n#bookshelf[_ngcontent-%COMP%] {\n  padding-top: 30vh;\n}\n\n.ribbon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 150px;\n  background-color: #8153a3;\n  position: absolute;\n  right: 100px;\n  top: -350px;\n  -webkit-animation: drop forwards 0.8s 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n          animation: drop forwards 0.8s 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.ribbon[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  bottom: -50px;\n  border-left: 50px solid #8153a3;\n  border-right: 50px solid #8153a3;\n  border-bottom: 50px solid transparent;\n}\n.ribbon[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 200px;\n  height: 270px;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  bottom: -120px;\n  background-color: #8153a321;\n  transform: skewY(35deg) skewX(0);\n}\n@-webkit-keyframes drop {\n  0% {\n    top: -350px;\n  }\n  100% {\n    top: 0;\n  }\n}\n@keyframes drop {\n  0% {\n    top: -350px;\n  }\n  100% {\n    top: 0;\n  }\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 2rem;\n  background-color: #446072;\n  font-family: monospace;\n  color: white;\n  overflow: hidden;\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  color: #fff;\n}\nh1[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n.shelf[_ngcontent-%COMP%] {\n  position: relative;\n  width: 30rem;\n  height: 14rem;\n  margin: 0 auto;\n  border: 0.5rem solid #8153a3;\n  border-radius: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.1);\n  perspective: 130rem;\n  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.2);\n}\n.door[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 14.8rem;\n  height: 14rem;\n  display: flex;\n  box-sizing: border-box;\n  padding: 1rem;\n  background-color: #8153a3;\n  align-items: center;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\n  outline: 1px solid transparent;\n}\n.door[_ngcontent-%COMP%]::before {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.1);\n  content: \"\";\n}\n.door.left[_ngcontent-%COMP%] {\n  border-radius: 0 0.75rem 0.75rem 0;\n  justify-content: flex-end;\n  -webkit-animation: leftDoorOpen 3.5s ease-out forwards 1s, leftDoorFlap 15s linear infinite forwards 9s;\n          animation: leftDoorOpen 3.5s ease-out forwards 1s, leftDoorFlap 15s linear infinite forwards 9s;\n  transform-origin: 0 0 0;\n}\n.door.right[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 0.75rem 0 0 0.75rem;\n  -webkit-animation: rightDoorOpen 3s ease-out forwards 1.5s, rightDoorFlap 10s linear infinite forwards 8s;\n          animation: rightDoorOpen 3s ease-out forwards 1.5s, rightDoorFlap 10s linear infinite forwards 8s;\n  transform-origin: 100% 0 0;\n}\n.book[_ngcontent-%COMP%] {\n  position: absolute;\n  box-sizing: border-box;\n  padding: 0.8rem 4rem 0.8rem 2rem;\n  border-radius: 0.25rem;\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  cursor: pointer;\n  box-shadow: inset 0 0 0.75rem rgba(255, 255, 255, 0.1);\n}\n.book.home-page[_ngcontent-%COMP%] {\n  transform: rotate(-90deg) translate(-12.4rem, 3rem);\n  transform-origin: 0;\n}\n.book.about-us[_ngcontent-%COMP%] {\n  transform: rotate(-100deg) translate(-13.4rem, 6.1rem);\n  transform-origin: 0;\n  outline: 1px solid transparent;\n}\n.book.contact[_ngcontent-%COMP%] {\n  text-decoration: none;\n  right: 2rem;\n  bottom: 0.2rem;\n  border-radius: 0.3rem 0 0 0.3rem;\n}\n.book.faq[_ngcontent-%COMP%] {\n  text-decoration: none;\n  right: 0.8rem;\n  bottom: 3.3rem;\n  border-radius: 0.3rem 0 0 0.3rem;\n}\n.book.not-found[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 3.5rem;\n  border: 1px dashed rgba(255, 255, 255, 0.3);\n  background-color: transparent;\n  transform: rotate(-90deg) translate(-12rem, 13rem) scale(1);\n  transform-origin: 0;\n  cursor: default;\n  -webkit-animation: bookFadeOut 1s 3s infinite forwards;\n          animation: bookFadeOut 1s 3s infinite forwards;\n}\n.book.not-found[_ngcontent-%COMP%]::after {\n  display: block;\n  width: 10rem;\n  padding-left: 5rem;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='30'><path fill='rgb(255, 255, 255)' d='M7.688,3.737C6.1,10.409,4.624,16.982,2.475,23.517c-0.424,1.29,0.724,2.338,1.957,1.916 c5.879-2.021,11.743-4.107,17.409-6.696c1.246-0.572,0.443-2.366-0.815-1.932c-3.856,1.333-7.695,2.69-11.565,3.959 c2.879-2.526,5.485-5.215,9.013-7.17c4.441-2.459,9.299-4.109,14.281-4.915c10.903-1.772,22.052,0.562,31.979,5.04 c9.241,4.162,12.895,8.725,13.164,4.942c0.121-1.69-5.57-4.953-14.125-8.714C53.19,5.292,41.094,3.539,29.636,6.058 c-7.122,1.567-16.708,5.374-22.064,11.544c1.359-4.455,2.461-9.028,3.032-13.563C10.852,2.091,8.12,1.927,7.688,3.737z'/></svg>\");\n  background-repeat: no-repeat;\n  background-size: 4rem;\n  background-position: left center;\n  font-family: \"Dancing Script\";\n  text-transform: lowercase;\n  font-size: 25px;\n  content: \"this page can't be found\";\n  transform: rotate(90deg) translate(6rem, -1rem);\n  opacity: 0.3;\n}\n.book[_ngcontent-%COMP%]:hover:not(.not-found) {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n@-webkit-keyframes leftDoorOpen {\n  60% {\n    transform: rotateY(-115deg);\n  }\n  100% {\n    transform: rotateY(-110deg);\n  }\n}\n@keyframes leftDoorOpen {\n  60% {\n    transform: rotateY(-115deg);\n  }\n  100% {\n    transform: rotateY(-110deg);\n  }\n}\n@-webkit-keyframes rightDoorOpen {\n  60% {\n    transform: rotateY(125deg);\n  }\n  100% {\n    transform: rotateY(120deg);\n  }\n}\n@keyframes rightDoorOpen {\n  60% {\n    transform: rotateY(125deg);\n  }\n  100% {\n    transform: rotateY(120deg);\n  }\n}\n@-webkit-keyframes rightDoorFlap {\n  0% {\n    transform: rotateY(120deg);\n  }\n  5% {\n    transform: rotateY(125deg);\n  }\n  15% {\n    transform: rotateY(117deg);\n  }\n  25% {\n    transform: rotateY(123deg);\n  }\n  30% {\n    transform: rotateY(120deg);\n  }\n  100% {\n    transform: rotateY(120deg);\n  }\n}\n@keyframes rightDoorFlap {\n  0% {\n    transform: rotateY(120deg);\n  }\n  5% {\n    transform: rotateY(125deg);\n  }\n  15% {\n    transform: rotateY(117deg);\n  }\n  25% {\n    transform: rotateY(123deg);\n  }\n  30% {\n    transform: rotateY(120deg);\n  }\n  100% {\n    transform: rotateY(120deg);\n  }\n}\n@-webkit-keyframes leftDoorFlap {\n  0% {\n    transform: rotateY(-110deg);\n  }\n  5% {\n    transform: rotateY(-115deg);\n  }\n  15% {\n    transform: rotateY(-107deg);\n  }\n  25% {\n    transform: rotateY(-113deg);\n  }\n  30% {\n    transform: rotateY(-110deg);\n  }\n  100% {\n    transform: rotateY(-110deg);\n  }\n}\n@keyframes leftDoorFlap {\n  0% {\n    transform: rotateY(-110deg);\n  }\n  5% {\n    transform: rotateY(-115deg);\n  }\n  15% {\n    transform: rotateY(-107deg);\n  }\n  25% {\n    transform: rotateY(-113deg);\n  }\n  30% {\n    transform: rotateY(-110deg);\n  }\n  100% {\n    transform: rotateY(-110deg);\n  }\n}\n@-webkit-keyframes bookFadeOut {\n  50% {\n    border: 1px dashed rgba(255, 255, 255, 0.1);\n  }\n}\n@keyframes bookFadeOut {\n  50% {\n    border: 1px dashed rgba(255, 255, 255, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q1EsMkVBQUE7QUF6Q1I7RUFBTSx5QkFISTtBQUVWO0FBR0E7RUFDQyxpQkFBQTtBQUFEO0FBRUEsZUFBQTtBQUNBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFYYTtFQVliLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FBQ0Q7QUFBQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtBQUVGO0FBQUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQXBDUTtFQXFDUixnQ0FBQTtBQUVGO0FBRUE7RUFDQztJQUFNLFdBQUE7RUFFTDtFQUREO0lBQU8sTUFBQTtFQUlOO0FBQ0Y7QUFQQTtFQUNDO0lBQU0sV0FBQTtFQUVMO0VBREQ7SUFBTyxNQUFBO0VBSU47QUFDRjtBQUFBO0VBQ0UsWUFBQTtBQUVGO0FBQ0E7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBSUY7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQXJGWTtFQXNGWixtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7QUFNRjtBQUxFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQU9KO0FBTEU7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUdBQ0U7VUFERiwrRkFDRTtFQUVGLHVCQUFBO0FBS0o7QUFIRTtFQUNFLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLHlHQUNFO1VBREYsaUdBQ0U7RUFFRiwwQkFBQTtBQUdKO0FBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHNEQUFBO0FBR0Y7QUFGRTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7QUFJSjtBQUZFO0VBQ0Usc0RBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSUo7QUFGRTtFQUNELHFCQUFBO0VBQ0csV0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUlKO0FBRkc7RUFDRixxQkFBQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFJSjtBQUZFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkRBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0FBSUo7QUFGSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtckJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0FBSU47QUFERTtFQUNFLDBDQUFBO0FBR0o7QUFBQTtFQUNFO0lBQUssMkJBQUE7RUFJTDtFQUhBO0lBQU0sMkJBQUE7RUFNTjtBQUNGO0FBVEE7RUFDRTtJQUFLLDJCQUFBO0VBSUw7RUFIQTtJQUFNLDJCQUFBO0VBTU47QUFDRjtBQUxBO0VBQ0U7SUFBSywwQkFBQTtFQVFMO0VBUEE7SUFBTSwwQkFBQTtFQVVOO0FBQ0Y7QUFiQTtFQUNFO0lBQUssMEJBQUE7RUFRTDtFQVBBO0lBQU0sMEJBQUE7RUFVTjtBQUNGO0FBVEE7RUFDRTtJQUFLLDBCQUFBO0VBWUw7RUFYQTtJQUFJLDBCQUFBO0VBY0o7RUFiQTtJQUFLLDBCQUFBO0VBZ0JMO0VBZkE7SUFBSywwQkFBQTtFQWtCTDtFQWpCQTtJQUFLLDBCQUFBO0VBb0JMO0VBbkJBO0lBQU0sMEJBQUE7RUFzQk47QUFDRjtBQTdCQTtFQUNFO0lBQUssMEJBQUE7RUFZTDtFQVhBO0lBQUksMEJBQUE7RUFjSjtFQWJBO0lBQUssMEJBQUE7RUFnQkw7RUFmQTtJQUFLLDBCQUFBO0VBa0JMO0VBakJBO0lBQUssMEJBQUE7RUFvQkw7RUFuQkE7SUFBTSwwQkFBQTtFQXNCTjtBQUNGO0FBckJBO0VBQ0U7SUFBSywyQkFBQTtFQXdCTDtFQXZCQTtJQUFJLDJCQUFBO0VBMEJKO0VBekJBO0lBQUssMkJBQUE7RUE0Qkw7RUEzQkE7SUFBSywyQkFBQTtFQThCTDtFQTdCQTtJQUFLLDJCQUFBO0VBZ0NMO0VBL0JBO0lBQU0sMkJBQUE7RUFrQ047QUFDRjtBQXpDQTtFQUNFO0lBQUssMkJBQUE7RUF3Qkw7RUF2QkE7SUFBSSwyQkFBQTtFQTBCSjtFQXpCQTtJQUFLLDJCQUFBO0VBNEJMO0VBM0JBO0lBQUssMkJBQUE7RUE4Qkw7RUE3QkE7SUFBSywyQkFBQTtFQWdDTDtFQS9CQTtJQUFNLDJCQUFBO0VBa0NOO0FBQ0Y7QUFqQ0E7RUFDRTtJQUFLLDJDQUFBO0VBb0NMO0FBQ0Y7QUF0Q0E7RUFDRTtJQUFLLDJDQUFBO0VBb0NMO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNoYWRvdyA6ICM4MTUzYTMyMTtcbiRiZ0NvbG9yOiAjNWQ4NGMzO1xuJHJpYmJvbkNvbG9yOlx0IzgxNTNhMztcblxuaHRtbHtcdGJhY2tncm91bmQtY29sb3I6JGJnQ29sb3I7IH1cblxuI2Jvb2tzaGVsZntcblx0cGFkZGluZy10b3A6IDMwdmg7XG59XG4vKiBUaGUgcmliYm9uICovXG4ucmliYm9ue1xuXHR3aWR0aDoxMDBweDtcblx0aGVpZ2h0OjE1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiRyaWJib25Db2xvcjtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHJpZ2h0OjEwMHB4O1xuXHR0b3A6LTM1MHB4O1xuXHRhbmltYXRpb246ZHJvcCBmb3J3YXJkcyAuOHMgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcblx0JjpiZWZvcmV7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHotaW5kZXg6IDI7XG5cdFx0bGVmdDogMDtcblx0XHRib3R0b206IC01MHB4O1xuXHRcdGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICRyaWJib25Db2xvcjtcblx0XHRib3JkZXItcmlnaHQ6IDUwcHggc29saWQgJHJpYmJvbkNvbG9yO1xuXHRcdGJvcmRlci1ib3R0b206IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdH1cblx0JjphZnRlcntcblx0XHRjb250ZW50OicnO1xuXHRcdHdpZHRoOjIwMHB4O1xuXHRcdGhlaWdodDoyNzBweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ei1pbmRleDogLTE7XG5cdFx0bGVmdDogMDtcblx0XHRib3R0b206LTEyMHB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6JHNoYWRvdztcblx0XHR0cmFuc2Zvcm06c2tld1koMzVkZWcpIHNrZXdYKDApO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZHJvcHtcblx0MCVcdFx0eyB0b3A6LTM1MHB4OyB9XG5cdDEwMCVcdHsgdG9wOjA7IH1cbn1cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDo0MDAsNzAwKTtcblxuXG5ib2R5LCBodG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ2MDcyO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5oMSArIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNoZWxmIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMTRyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDAuNXJlbSBzb2xpZCAkcmliYm9uQ29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwZXJzcGVjdGl2ZTogMTMwcmVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uZG9vciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0LjhyZW07XG4gIGhlaWdodDogMTRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICRyaWJib25Db2xvcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAmOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG4gICYubGVmdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwLjc1cmVtIDAuNzVyZW0gMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFuaW1hdGlvbjogXG4gICAgICBsZWZ0RG9vck9wZW4gMy41cyBlYXNlLW91dCBmb3J3YXJkcyAxcyxcbiAgICAgIGxlZnREb29yRmxhcCAxNXMgbGluZWFyIGluZmluaXRlIGZvcndhcmRzIDlzO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICB9XG4gICYucmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gMCAwIDAuNzVyZW07XG4gICAgYW5pbWF0aW9uOiBcbiAgICAgIHJpZ2h0RG9vck9wZW4gM3MgZWFzZS1vdXQgZm9yd2FyZHMgMS41cyxcbiAgICAgIHJpZ2h0RG9vckZsYXAgMTBzIGxpbmVhciBpbmZpbml0ZSBmb3J3YXJkcyA4cztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAgMDtcbiAgfVxufVxuLmJvb2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuOHJlbSA0cmVtIDAuOHJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjc1cmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgJi5ob21lLXBhZ2Uge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlKC0xMi40cmVtLCAzcmVtKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xuICB9XG4gICYuYWJvdXQtdXMge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMDBkZWcpIHRyYW5zbGF0ZSgtMTMuNHJlbSwgNi4xcmVtKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAmLmNvbnRhY3Qge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgYm90dG9tOiAwLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAgMCAwLjNyZW07XG4gIH1cbiAgICYuZmFxIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHJpZ2h0OiAwLjhyZW07XG4gICAgYm90dG9tOiAzLjNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAgMCAwLjNyZW07XG4gIH1cbiAgJi5ub3QtZm91bmQge1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlKC0xMnJlbSwgMTNyZW0pIHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDA7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGFuaW1hdGlvbjogYm9va0ZhZGVPdXQgMXMgM3MgaW5maW5pdGUgZm9yd2FyZHM7XG4gICAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTByZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgwJyBoZWlnaHQ9JzMwJz48cGF0aCBmaWxsPSdyZ2IoMjU1LCAyNTUsIDI1NSknIGQ9J003LjY4OCwzLjczN0M2LjEsMTAuNDA5LDQuNjI0LDE2Ljk4MiwyLjQ3NSwyMy41MTdjLTAuNDI0LDEuMjksMC43MjQsMi4zMzgsMS45NTcsMS45MTYgYzUuODc5LTIuMDIxLDExLjc0My00LjEwNywxNy40MDktNi42OTZjMS4yNDYtMC41NzIsMC40NDMtMi4zNjYtMC44MTUtMS45MzJjLTMuODU2LDEuMzMzLTcuNjk1LDIuNjktMTEuNTY1LDMuOTU5IGMyLjg3OS0yLjUyNiw1LjQ4NS01LjIxNSw5LjAxMy03LjE3YzQuNDQxLTIuNDU5LDkuMjk5LTQuMTA5LDE0LjI4MS00LjkxNWMxMC45MDMtMS43NzIsMjIuMDUyLDAuNTYyLDMxLjk3OSw1LjA0IGM5LjI0MSw0LjE2MiwxMi44OTUsOC43MjUsMTMuMTY0LDQuOTQyYzAuMTIxLTEuNjktNS41Ny00Ljk1My0xNC4xMjUtOC43MTRDNTMuMTksNS4yOTIsNDEuMDk0LDMuNTM5LDI5LjYzNiw2LjA1OCBjLTcuMTIyLDEuNTY3LTE2LjcwOCw1LjM3NC0yMi4wNjQsMTEuNTQ0YzEuMzU5LTQuNDU1LDIuNDYxLTkuMDI4LDMuMDMyLTEzLjU2M0MxMC44NTIsMi4wOTEsOC4xMiwxLjkyNyw3LjY4OCwzLjczN3onLz48L3N2Zz5cIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA0cmVtO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbnRlbnQ6IFwidGhpcyBwYWdlIGNhbid0IGJlIGZvdW5kXCI7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDZyZW0sIC0xcmVtKTtcbiAgICAgIG9wYWNpdHk6IDAuMzsgXG4gICAgfVxuICB9XG4gICY6aG92ZXI6bm90KC5ub3QtZm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGVmdERvb3JPcGVuIHtcbiAgNjAlIHt0cmFuc2Zvcm06IHJvdGF0ZVkoLTExNWRlZyl9XG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlWSgtMTEwZGVnKX1cbn1cbkBrZXlmcmFtZXMgcmlnaHREb29yT3BlbiB7XG4gIDYwJSB7dHJhbnNmb3JtOiByb3RhdGVZKDEyNWRlZyl9XG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlWSgxMjBkZWcpfVxufVxuQGtleWZyYW1lcyByaWdodERvb3JGbGFwIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTIwZGVnKX1cbiAgNSUge3RyYW5zZm9ybTogcm90YXRlWSgxMjVkZWcpfVxuICAxNSUge3RyYW5zZm9ybTogcm90YXRlWSgxMTdkZWcpfVxuICAyNSUge3RyYW5zZm9ybTogcm90YXRlWSgxMjNkZWcpfVxuICAzMCUge3RyYW5zZm9ybTogcm90YXRlWSgxMjBkZWcpfVxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVkoMTIwZGVnKX1cbn1cbkBrZXlmcmFtZXMgbGVmdERvb3JGbGFwIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoLTExMGRlZyl9XG4gIDUlIHt0cmFuc2Zvcm06IHJvdGF0ZVkoLTExNWRlZyl9XG4gIDE1JSB7dHJhbnNmb3JtOiByb3RhdGVZKC0xMDdkZWcpfVxuICAyNSUge3RyYW5zZm9ybTogcm90YXRlWSgtMTEzZGVnKX1cbiAgMzAlIHt0cmFuc2Zvcm06IHJvdGF0ZVkoLTExMGRlZyl9XG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlWSgtMTEwZGVnKX1cbn1cbkBrZXlmcmFtZXMgYm9va0ZhZGVPdXQge1xuICA1MCUge2JvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/not-found/not-found-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/not-found/components/not-found/not-found.component.ts");





const routes = [
    {
        path: '',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
    },
];
class NotFoundRoutingModule {
}
NotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotFoundRoutingModule });
NotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotFoundRoutingModule_Factory(t) { return new (t || NotFoundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.module.ts":
/*!***********************************************!*\
  !*** ./src/app/not-found/not-found.module.ts ***!
  \***********************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/not-found/components/not-found/not-found.component.ts");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/not-found/not-found-routing.module.ts");





class NotFoundModule {
}
NotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotFoundModule });
NotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotFoundModule_Factory(t) { return new (t || NotFoundModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotFoundModule, { declarations: [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"],
                ],
            }]
    }], null, null); })();


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

module.exports = __webpack_require__(/*! /home/max/wisBooks/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map