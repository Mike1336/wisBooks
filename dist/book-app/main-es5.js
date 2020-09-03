(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'books',
        children: [{
          path: 'page',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ./books/books.module */
            "./src/app/books/books.module.ts")).then(function (m) {
              return m.BooksModule;
            });
          }
        }, {
          path: '**',
          redirectTo: 'page/1'
        }]
      }, {
        path: 'authors',
        children: [{
          path: 'page',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | authors-authors-module */
            "authors-authors-module").then(__webpack_require__.bind(null,
            /*! ./authors/authors.module */
            "./src/app/authors/authors.module.ts")).then(function (m) {
              return m.AuthorsModule;
            });
          }
        }, {
          path: '**',
          redirectTo: 'page/1'
        }]
      }, {
        path: 'book',
        children: [{
          path: ':id',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ./book/book.module */
            "./src/app/book/book.module.ts")).then(function (m) {
              return m.BookModule;
            });
          }
        }]
      }, {
        path: '**',
        redirectTo: 'books/page/1'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout/services/sidebar.service */
      "./src/app/layout/services/sidebar.service.ts");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout/header/header.component */
      "./src/app/layout/header/header.component.ts");
      /* harmony import */


      var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layout/sidebar/sidebar.component */
      "./src/app/layout/sidebar/sidebar.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(sbService) {
          _classCallCheck(this, AppComponent);

          this.sbService = sbService;
          this.showSideBar = false;
        }

        _createClass(AppComponent, [{
          key: "show",
          value: function show() {
            this.showSideBar = !this.showSideBar;
            this.sbService.change(this.showSideBar);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 0,
        consts: [[3, "burgerClicked"], ["id", "sidebar"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("burgerClicked", function AppComponent_Template_app_header_burgerClicked_1_listener() {
              return ctx.show();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["#sidebar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 75px;\n  min-height: 92vh;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZWJhcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgbWluLWhlaWdodDogOTJ2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./libs/comma/comma.module */
      "./src/app/libs/comma/comma.module.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _books_books_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./books/books.module */
      "./src/app/books/books.module.ts");
      /* harmony import */


      var _book_book_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./book/book.module */
      "./src/app/book/book.module.ts");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layout/layout.module */
      "./src/app/layout/layout.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _books_books_module__WEBPACK_IMPORTED_MODULE_6__["BooksModule"], _book_book_module__WEBPACK_IMPORTED_MODULE_7__["BookModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_3__["CommaModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _books_books_module__WEBPACK_IMPORTED_MODULE_6__["BooksModule"], _book_book_module__WEBPACK_IMPORTED_MODULE_7__["BookModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_3__["CommaModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _books_books_module__WEBPACK_IMPORTED_MODULE_6__["BooksModule"], _book_book_module__WEBPACK_IMPORTED_MODULE_7__["BookModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_3__["CommaModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/book/book-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/book/book-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: BookRoutingModule */

    /***/
    function srcAppBookBookRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookRoutingModule", function () {
        return BookRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_book_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/book/book.component */
      "./src/app/book/components/book/book.component.ts");

      var routes = [{
        path: '',
        component: _components_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"]
      }];

      var BookRoutingModule = function BookRoutingModule() {
        _classCallCheck(this, BookRoutingModule);
      };

      BookRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BookRoutingModule
      });
      BookRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BookRoutingModule_Factory(t) {
          return new (t || BookRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BookRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/book/book.module.ts":
    /*!*************************************!*\
      !*** ./src/app/book/book.module.ts ***!
      \*************************************/

    /*! exports provided: BookModule */

    /***/
    function srcAppBookBookModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookModule", function () {
        return BookModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
      /* harmony import */


      var _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../libs/comma/comma.module */
      "./src/app/libs/comma/comma.module.ts");
      /* harmony import */


      var _book_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./book-routing.module */
      "./src/app/book/book-routing.module.ts");
      /* harmony import */


      var _components_book_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/book/book.component */
      "./src/app/book/components/book/book.component.ts");

      var BookModule = function BookModule() {
        _classCallCheck(this, BookModule);
      };

      BookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BookModule
      });
      BookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BookModule_Factory(t) {
          return new (t || BookModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _book_routing_module__WEBPACK_IMPORTED_MODULE_7__["BookRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BookModule, {
          declarations: [_components_book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _book_routing_module__WEBPACK_IMPORTED_MODULE_7__["BookRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _book_routing_module__WEBPACK_IMPORTED_MODULE_7__["BookRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/book/components/book/book.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/book/components/book/book.component.ts ***!
      \********************************************************/

    /*! exports provided: BookComponent */

    /***/
    function srcAppBookComponentsBookBookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookComponent", function () {
        return BookComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _books_services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../books/services/books.service */
      "./src/app/books/services/books.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
      /* harmony import */


      var _libs_comma_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../libs/comma/pipes/comma.pipe */
      "./src/app/libs/comma/pipes/comma.pipe.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var BookComponent = /*#__PURE__*/function () {
        function BookComponent(booksService, route) {
          _classCallCheck(this, BookComponent);

          this.booksService = booksService;
          this.route = route;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        }

        _createClass(BookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (params) {
              _this.bookId = params.id;
            });
            this.booksService.getBookById(this.bookId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              _this.book = data;
              console.log(_this.book);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(null);
            this.destroy$.complete();
          }
        }]);

        return BookComponent;
      }();

      BookComponent.ɵfac = function BookComponent_Factory(t) {
        return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_books_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookComponent,
        selectors: [["ng-component"]],
        decls: 18,
        vars: 19,
        consts: [["cols", "2", "rowHeight", "25%"], [3, "colspan"], [3, "rowspan"], ["src", "../../../../assets//book.png", "alt", "Book image not found"], ["col", "2"]],
        template: function BookComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "comma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-grid-tile", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book == null ? null : ctx.book.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("            Author: ", ctx.book == null ? null : ctx.book.author.first_name, " ", ctx.book == null ? null : ctx.book.author.last_name, "\n\n            Genres: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.book == null ? null : ctx.book.genres), "\n\n            Writing date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 13, ctx.book == null ? null : ctx.book.writing_date, "dd MMMM yyyy"), " \n\n            Release date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 16, ctx.book == null ? null : ctx.book.release_date, "dd MMMM yyyy"), " \n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", ctx.book == null ? null : ctx.book.price, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book == null ? null : ctx.book.description, " ");
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"]],
        pipes: [_libs_comma_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_6__["CommaPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  color: white;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9jb21wb25lbnRzL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9ib29rL2NvbXBvbmVudHMvYm9vay9ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsIGgyLCBwLCBwcmV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxucHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './book.component.html',
            styleUrls: ['./book.component.scss']
          }]
        }], function () {
          return [{
            type: _books_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/books/books-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/books/books-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: BooksRoutingModule */

    /***/
    function srcAppBooksBooksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function () {
        return BooksRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_books_books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/books/books.component */
      "./src/app/books/components/books/books.component.ts");

      var routes = [{
        path: ':number',
        component: _components_books_books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"]
      }, {
        path: '**',
        redirectTo: '1'
      }];

      var BooksRoutingModule = function BooksRoutingModule() {
        _classCallCheck(this, BooksRoutingModule);
      };

      BooksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BooksRoutingModule
      });
      BooksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BooksRoutingModule_Factory(t) {
          return new (t || BooksRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BooksRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/books/books.module.ts":
    /*!***************************************!*\
      !*** ./src/app/books/books.module.ts ***!
      \***************************************/

    /*! exports provided: BooksModule */

    /***/
    function srcAppBooksBooksModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksModule", function () {
        return BooksModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../libs/comma/comma.module */
      "./src/app/libs/comma/comma.module.ts");
      /* harmony import */


      var _books_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./books-routing.module */
      "./src/app/books/books-routing.module.ts");
      /* harmony import */


      var _components_books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/books/books.component */
      "./src/app/books/components/books/books.component.ts");

      var BooksModule = function BooksModule() {
        _classCallCheck(this, BooksModule);
      };

      BooksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BooksModule
      });
      BooksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BooksModule_Factory(t) {
          return new (t || BooksModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _books_routing_module__WEBPACK_IMPORTED_MODULE_7__["BooksRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BooksModule, {
          declarations: [_components_books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _books_routing_module__WEBPACK_IMPORTED_MODULE_7__["BooksRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _books_routing_module__WEBPACK_IMPORTED_MODULE_7__["BooksRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _libs_comma_comma_module__WEBPACK_IMPORTED_MODULE_6__["CommaModule"]],
            bootstrap: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/books/components/books/books.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/books/components/books/books.component.ts ***!
      \***********************************************************/

    /*! exports provided: BooksComponent */

    /***/
    function srcAppBooksComponentsBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
        return BooksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/books.service */
      "./src/app/books/services/books.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

      var _c0 = function _c0(a1) {
        return ["/book", a1];
      };

      function BooksComponent_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, book_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1 == null ? null : book_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", book_r1 == null ? null : book_r1.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r1 == null ? null : book_r1.description, " ");
        }
      }

      var BooksComponent = /*#__PURE__*/function () {
        function BooksComponent(booksService, route) {
          _classCallCheck(this, BooksComponent);

          this.booksService = booksService;
          this.route = route;
          this.title = 'My books (1/10 pages)';
          this.bookPageQuantity = 0;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        }

        _createClass(BooksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (params) {
              _this2.books$ = _this2.booksService.getBooksInPage(params.number);
            });
            this.books$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              _this2.books = data.books;
              _this2.bookPageQuantity = data.meta.pages;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(null);
            this.destroy$.complete();
          }
        }]);

        return BooksComponent;
      }();

      BooksComponent.ɵfac = function BooksComponent_Factory(t) {
        return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      BooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BooksComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 1,
        consts: [["id", "books"], ["class", "example-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "example-card", 3, "routerLink"], ["mat-card-image", "", "src", "../../../../assets//book.png", "alt", "Book image not found", 1, "book-img"]],
        template: function BooksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BooksComponent_mat_card_1_Template, 10, 6, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"]],
        styles: ["#books[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  margin: 15px;\n}\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 25%;\n  margin: 15px 0;\n}\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100px;\n}\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#books[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .book-img[_ngcontent-%COMP%] {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFUjtBQURRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7QUFHWjtBQURRO0VBQ0ksV0FBQTtBQUdaIiwiZmlsZSI6InNyYy9hcHAvYm9va3MvY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib29rc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1hdC1jYXJke1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICBtYXQtY2FyZC1oZWFkZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICBtYXQtY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5ib29rLWltZ3tcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './books.component.html',
            styleUrls: ['./books.component.scss']
          }]
        }], function () {
          return [{
            type: _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/books/services/books.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/books/services/books.service.ts ***!
      \*************************************************/

    /*! exports provided: BooksService */

    /***/
    function srcAppBooksServicesBooksServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksService", function () {
        return BooksService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var BooksService = /*#__PURE__*/function () {
        function BooksService(http) {
          _classCallCheck(this, BooksService);

          this.http = http;
          this.apiUrl = 'http://muzhikov.kubesh.ru/api/';
          this.booksEndpoint = 'books';
          this.authorsEndpoint = 'authors';
        }

        _createClass(BooksService, [{
          key: "getBooksInPage",
          value: function getBooksInPage(page) {
            return this.http.get("".concat(this.apiUrl).concat(this.booksEndpoint, "?page=").concat(page));
          }
        }, {
          key: "getBookById",
          value: function getBookById(bookId) {
            return this.http.get("".concat(this.apiUrl).concat(this.booksEndpoint, "/").concat(bookId));
          }
        }, {
          key: "getBookByAuthor",
          value: function getBookByAuthor(authorId) {
            return this.http.get("".concat(this.apiUrl).concat(this.authorsEndpoint, "/").concat(authorId, "/").concat(this.booksEndpoint));
          }
        }, {
          key: "createBook",
          value: function createBook(book) {
            var url = "".concat(this.apiUrl).concat(this.authorsEndpoint, "/").concat(book.author_id, "/").concat(this.booksEndpoint);
            return this.http.post(url, book);
          }
        }, {
          key: "updateBook",
          value: function updateBook(book) {
            var url = "".concat(this.apiUrl).concat(this.booksEndpoint, "/").concat(book.id);
            return this.http.put(url, book);
          }
        }, {
          key: "deleteBook",
          value: function deleteBook(bookId) {
            return this.http["delete"]("".concat(this.apiUrl).concat(this.booksEndpoint, "/").concat(bookId));
          }
        }]);

        return BooksService;
      }();

      BooksService.ɵfac = function BooksService_Factory(t) {
        return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      BooksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BooksService,
        factory: BooksService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/header/header.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/layout/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.burgerClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showSideBar",
          value: function showSideBar() {
            this.burgerClicked.emit();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        outputs: {
          burgerClicked: "burgerClicked"
        },
        decls: 6,
        vars: 0,
        consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_1_listener() {
              return ctx.showSideBar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Books");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: 1px 8px 20px black;\n  height: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLDhCQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtdG9vbGJhcntcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggYmxhY2s7XG4gICAgaGVpZ2h0OiA1NnB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [];
        }, {
          burgerClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/layout/layout.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/layout/layout.module.ts ***!
      \*****************************************/

    /*! exports provided: LayoutModule */

    /***/
    function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/layout/header/header.component.ts");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "./src/app/layout/sidebar/sidebar.component.ts");

      var LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LayoutModule
      });
      LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LayoutModule_Factory(t) {
          return new (t || LayoutModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/services/sidebar.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/layout/services/sidebar.service.ts ***!
      \****************************************************/

    /*! exports provided: SidebarService */

    /***/
    function srcAppLayoutServicesSidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
        return SidebarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var SidebarService = /*#__PURE__*/function () {
        function SidebarService() {
          _classCallCheck(this, SidebarService);

          this.sbOpened$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        }

        _createClass(SidebarService, [{
          key: "change",
          value: function change(bol) {
            this.sbOpened$.next(bol);
          }
        }, {
          key: "sbOpen$",
          get: function get() {
            return this.sbOpened$;
          }
        }]);

        return SidebarService;
      }();

      SidebarService.ɵfac = function SidebarService_Factory(t) {
        return new (t || SidebarService)();
      };

      SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SidebarService,
        factory: SidebarService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/sidebar/sidebar.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppLayoutSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/sidebar.service */
      "./src/app/layout/services/sidebar.service.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var _c0 = function _c0() {
        return ["/books", "page", "1"];
      };

      var _c1 = function _c1() {
        return ["/authors", "page", "1"];
      };

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(sidebar) {
          _classCallCheck(this, SidebarComponent);

          this.sidebar = sidebar;
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            this.sidebar.sbOpen$.subscribe(function (data) {
              if (data) {
                _this3.drawer.open();
              } else {
                _this3.drawer.close();
              }
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        viewQuery: function SidebarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
          }
        },
        decls: 8,
        vars: 4,
        consts: [[1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["mat-icon-button", "", 1, "example-icon", 3, "routerLink"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "library_books");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "supervisor_account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["button[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 75px;\n  min-height: 92vh;\n  height: 100%;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLCBoMntcbiAgICBtYXJnaW46IDMwcHggMDsgICBcbn1cbm1hdC1kcmF3ZXItY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzVweDtcbiAgICBtaW4taGVpZ2h0OiA5MnZoO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
          }]
        }], function () {
          return [{
            type: _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]
          }];
        }, {
          drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/libs/comma/comma.module.ts":
    /*!********************************************!*\
      !*** ./src/app/libs/comma/comma.module.ts ***!
      \********************************************/

    /*! exports provided: CommaModule */

    /***/
    function srcAppLibsCommaCommaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommaModule", function () {
        return CommaModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pipes/comma.pipe */
      "./src/app/libs/comma/pipes/comma.pipe.ts");

      var CommaModule = function CommaModule() {
        _classCallCheck(this, CommaModule);
      };

      CommaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CommaModule
      });
      CommaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CommaModule_Factory(t) {
          return new (t || CommaModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommaModule, {
          declarations: [_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__["CommaPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__["CommaPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__["CommaPipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_pipes_comma_pipe__WEBPACK_IMPORTED_MODULE_2__["CommaPipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/libs/comma/pipes/comma.pipe.ts":
    /*!************************************************!*\
      !*** ./src/app/libs/comma/pipes/comma.pipe.ts ***!
      \************************************************/

    /*! exports provided: CommaPipe */

    /***/
    function srcAppLibsCommaPipesCommaPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommaPipe", function () {
        return CommaPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CommaPipe = /*#__PURE__*/function () {
        function CommaPipe() {
          _classCallCheck(this, CommaPipe);
        }

        _createClass(CommaPipe, [{
          key: "transform",
          value: function transform(arr) {
            var strWithComma = '';

            for (var i = 0; i < (arr === null || arr === void 0 ? void 0 : arr.length); i++) {
              if (i === arr.length - 1) {
                strWithComma += arr[i].name;
              } else {
                strWithComma += arr[i].name + ', ';
              }
            }

            return strWithComma;
          }
        }]);

        return CommaPipe;
      }();

      CommaPipe.ɵfac = function CommaPipe_Factory(t) {
        return new (t || CommaPipe)();
      };

      CommaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "comma",
        type: CommaPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommaPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'comma'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/max/wisBooks/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map