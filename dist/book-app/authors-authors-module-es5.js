(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authors-authors-module"], {
    /***/
    "./src/app/authors/authors-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/authors/authors-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AuthorsRoutingModule */

    /***/
    function srcAppAuthorsAuthorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorsRoutingModule", function () {
        return AuthorsRoutingModule;
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


      var _views_authors_authors_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./views/authors/authors.view */
      "./src/app/authors/views/authors/authors.view.ts");

      var routes = [{
        path: '',
        component: _views_authors_authors_view__WEBPACK_IMPORTED_MODULE_2__["AuthorsView"]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AuthorsRoutingModule = function AuthorsRoutingModule() {
        _classCallCheck(this, AuthorsRoutingModule);
      };

      AuthorsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthorsRoutingModule
      });
      AuthorsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthorsRoutingModule_Factory(t) {
          return new (t || AuthorsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthorsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsRoutingModule, [{
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
    "./src/app/authors/authors.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/authors/authors.module.ts ***!
      \*******************************************/

    /*! exports provided: AuthorsModule */

    /***/
    function srcAppAuthorsAuthorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorsModule", function () {
        return AuthorsModule;
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


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../layout/layout.module */
      "./src/app/layout/layout.module.ts");
      /* harmony import */


      var _authors_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./authors-routing.module */
      "./src/app/authors/authors-routing.module.ts");
      /* harmony import */


      var _components_authors_authors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/authors/authors.component */
      "./src/app/authors/components/authors/authors.component.ts");
      /* harmony import */


      var _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./containers/authors/authors.container */
      "./src/app/authors/containers/authors/authors.container.ts");
      /* harmony import */


      var _views_authors_authors_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/authors/authors.view */
      "./src/app/authors/views/authors/authors.view.ts");

      var AuthorsModule = function AuthorsModule() {
        _classCallCheck(this, AuthorsModule);
      };

      AuthorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthorsModule
      });
      AuthorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthorsModule_Factory(t) {
          return new (t || AuthorsModule)();
        },
        imports: [[// Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // Own
        _authors_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthorsRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthorsModule, {
          declarations: [_components_authors_authors_component__WEBPACK_IMPORTED_MODULE_7__["AuthorsComponent"], _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_8__["AuthorsContainer"], _views_authors_authors_view__WEBPACK_IMPORTED_MODULE_9__["AuthorsView"]],
          imports: [// Angular
          _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // Own
          _authors_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthorsRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_authors_authors_component__WEBPACK_IMPORTED_MODULE_7__["AuthorsComponent"], _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_8__["AuthorsContainer"], _views_authors_authors_view__WEBPACK_IMPORTED_MODULE_9__["AuthorsView"]],
            imports: [// Angular
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // Own
            _authors_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthorsRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/authors/components/authors/authors.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/authors/components/authors/authors.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthorsComponent */

    /***/
    function srcAppAuthorsComponentsAuthorsAuthorsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function () {
        return AuthorsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _layout_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../layout/components/paginator/paginator.component */
      "./src/app/layout/components/paginator/paginator.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function AuthorsComponent_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AuthorsComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var author_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r8.id);
        }
      }

      function AuthorsComponent_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FIRSTNAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AuthorsComponent_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var author_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r9.first_name);
        }
      }

      function AuthorsComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LASTNAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AuthorsComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var author_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r10.last_name);
        }
      }

      function AuthorsComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
        }
      }

      var _c0 = function _c0(a1) {
        return ["/author", a1];
      };

      function AuthorsComponent_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
        }

        if (rf & 2) {
          var author_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, author_r11.id));
        }
      }

      var _c1 = function _c1() {
        return [10, 25, 50];
      };

      var AuthorsComponent = /*#__PURE__*/function () {
        function AuthorsComponent(_title) {
          _classCallCheck(this, AuthorsComponent);

          this._title = _title;
          this.displayedColumns = ['id', 'first_name', 'last_name'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        }

        _createClass(AuthorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._title.setTitle('All authors');

            this.dataSource.data = this.authors;
          }
          /**
           * Takes in a paginator and set to dataSource
           *
           * @param paginator The MatPaginator object from own component
           */

        }, {
          key: "takePaginator",
          value: function takePaginator(paginator) {
            this.dataSource.paginator = paginator;
          }
        }]);

        return AuthorsComponent;
      }();

      AuthorsComponent.ɵfac = function AuthorsComponent_Factory(t) {
        return new (t || AuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]));
      };

      AuthorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthorsComponent,
        selectors: [["authors-component"]],
        viewQuery: function AuthorsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        inputs: {
          authors: "authors"
        },
        decls: 15,
        vars: 7,
        consts: [["id", "authors"], ["id", "tableContent"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "data-table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "first_name"], ["matColumnDef", "last_name"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], [3, "records", "limits", "create"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink"]],
        template: function AuthorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthorsComponent_th_4_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthorsComponent_td_5_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthorsComponent_th_7_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthorsComponent_td_8_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AuthorsComponent_th_10_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AuthorsComponent_td_11_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AuthorsComponent_tr_12_Template, 1, 0, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthorsComponent_tr_13_Template, 1, 3, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-paginator", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("create", function AuthorsComponent_Template_app_paginator_create_14_listener($event) {
              return ctx.takePaginator($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("records", ctx.authors.length)("limits", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _layout_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__["PaginatorComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
        styles: ["#authors[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 100%;\n}\n#authors[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  align-self: center;\n}\n#authors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 85vw;\n}\n#authors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#authors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]  {\n  font-size: 16px;\n  font-style: bold;\n  z-index: 0;\n}\n#authors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]  .mat-sort-header-container {\n  justify-content: center;\n}\n#authors[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%] {\n  width: 85vw;\n  margin-top: 75px;\n}\n#tableContent[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 592px;\n  overflow: auto;\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9ycy9jb21wb25lbnRzL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFFUTtFQUNJLGtCQUFBO0FBQVo7QUFFWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFBaEI7QUFFZ0I7RUFDSSx1QkFBQTtBQUFwQjtBQU9JO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9ycy9jb21wb25lbnRzL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdXRob3JzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgbWF0LXNwaW5uZXIge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogODV2dztcblxuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHRoOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuXG4gICAgICAgICAgICAgICAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hdC1wYWdpbmF0b3Ige1xuICAgICAgICB3aWR0aDogODV2dztcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICB9XG59XG5cbiN0YWJsZUNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDU5MnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDc1cHg7XG59Il19 */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'authors-component',
            templateUrl: './authors.component.html',
            styleUrls: ['./authors.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }];
        }, {
          authors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/authors/containers/authors/authors.container.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/authors/containers/authors/authors.container.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthorsContainer */

    /***/
    function srcAppAuthorsContainersAuthorsAuthorsContainerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorsContainer", function () {
        return AuthorsContainer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_authors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/authors.service */
      "./src/app/authors/services/authors.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_authors_authors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/authors/authors.component */
      "./src/app/authors/components/authors/authors.component.ts");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

      function AuthorsContainer_authors_component_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "authors-component", 2);
        }

        if (rf & 2) {
          var authors_r3 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authors", authors_r3);
        }
      }

      function AuthorsContainer_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AuthorsContainer = /*#__PURE__*/function () {
        function AuthorsContainer(_authorsService) {
          _classCallCheck(this, AuthorsContainer);

          this._authorsService = _authorsService;
        }

        _createClass(AuthorsContainer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAuthors();
          }
          /**
          * Returns Observable with authors list
          */

        }, {
          key: "getAuthors",
          value: function getAuthors() {
            var _this = this;

            this.authors$ = this._authorsService.getAuthorsInQuantity(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return data.meta.records;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (quantity) {
              _this.authorsQuantity = quantity;
              return _this._authorsService.getAuthorsInQuantity(quantity);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('authors'));
          }
        }]);

        return AuthorsContainer;
      }();

      AuthorsContainer.ɵfac = function AuthorsContainer_Factory(t) {
        return new (t || AuthorsContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authors_service__WEBPACK_IMPORTED_MODULE_2__["AuthorsService"]));
      };

      AuthorsContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthorsContainer,
        selectors: [["authors-container"]],
        decls: 4,
        vars: 4,
        consts: [[3, "authors", 4, "ngIf", "ngIfElse"], ["loading", ""], [3, "authors"], ["id", "spinner"]],
        template: function AuthorsContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthorsContainer_authors_component_0_Template, 1, 1, "authors-component", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthorsContainer_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.authors$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_authors_authors_component__WEBPACK_IMPORTED_MODULE_4__["AuthorsComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 102;\n}\n\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n\nmain[_ngcontent-%COMP%]   #sidebar[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n#spinner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRob3JzL2NvbnRhaW5lcnMvYXV0aG9ycy9hdXRob3JzLmNvbnRhaW5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNOSjs7QURRSTtFQUNJLGtCQUFBO0FDTlI7O0FBVkE7RURESSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNlSiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcnMvY29udGFpbmVycy9hdXRob3JzL2F1dGhvcnMuY29udGFpbmVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gc3Bpbm5lci1hbGlnbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAyO1xufVxuXG5tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgI3NpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzcyc7XG5cbiNzcGlubmVyIHtcbiAgICBAaW5jbHVkZSBzcGlubmVyLWFsaWduO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'authors-container',
            templateUrl: './authors.container.html',
            styleUrls: ['./authors.container.scss']
          }]
        }], function () {
          return [{
            type: _services_authors_service__WEBPACK_IMPORTED_MODULE_2__["AuthorsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/authors/views/authors/authors.view.ts":
    /*!*******************************************************!*\
      !*** ./src/app/authors/views/authors/authors.view.ts ***!
      \*******************************************************/

    /*! exports provided: AuthorsView */

    /***/
    function srcAppAuthorsViewsAuthorsAuthorsViewTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorsView", function () {
        return AuthorsView;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../containers/authors/authors.container */
      "./src/app/authors/containers/authors/authors.container.ts");

      var AuthorsView = /*#__PURE__*/function () {
        function AuthorsView() {
          _classCallCheck(this, AuthorsView);
        }

        _createClass(AuthorsView, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthorsView;
      }();

      AuthorsView.ɵfac = function AuthorsView_Factory(t) {
        return new (t || AuthorsView)();
      };

      AuthorsView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthorsView,
        selectors: [["app-authors"]],
        decls: 1,
        vars: 0,
        template: function AuthorsView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "authors-container");
          }
        },
        directives: [_containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_1__["AuthorsContainer"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcnMvdmlld3MvYXV0aG9ycy9hdXRob3JzLnZpZXcuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-authors',
            templateUrl: './authors.view.html',
            styleUrls: ['./authors.view.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=authors-authors-module-es5.js.map