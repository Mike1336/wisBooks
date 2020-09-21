(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authors-authors-module"], {
    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SortJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
        return MAT_SORT_HEADER_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
        return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSort", function () {
        return MatSort;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
        return MatSortHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
        return MatSortHeaderIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
        return MatSortModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
        return matSortAnimations;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var _c0 = ["mat-sort-header", ""];

      function MatSortHeader_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._disableViewStateAnimation = true;
          })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3._disableViewStateAnimation = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
        }
      }

      var _c1 = ["*"];

      function getSortDuplicateSortableIdError(id) {
        return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
      }
      /** @docs-private */


      function getSortHeaderNotContainedWithinSortError() {
        return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
      }
      /** @docs-private */


      function getSortHeaderMissingIdError() {
        return Error("MatSortHeader must be provided with a unique id.");
      }
      /** @docs-private */


      function getSortInvalidDirectionError(direction) {
        return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatSort.

      /** @docs-private */


      var MatSortBase = function MatSortBase() {
        _classCallCheck(this, MatSortBase);
      };

      var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
      /** Container for MatSortables to manage the sort state and provide default sort parameters. */


      var MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
        _inherits(MatSort, _MatSortMixinBase2);

        var _super = _createSuper(MatSort);

        function MatSort() {
          var _this;

          _classCallCheck(this, MatSort);

          _this = _super.apply(this, arguments);
          /** Collection of all registered sortables that this directive manages. */

          _this.sortables = new Map();
          /** Used to notify any child components listening to state changes. */

          _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * The direction to set when an MatSortable is initially sorted.
           * May be overriden by the MatSortable's sort start.
           */

          _this.start = 'asc';
          _this._direction = '';
          /** Event emitted when the user changes either the active sort or sort direction. */

          _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this;
        }
        /** The sort direction of the currently active MatSortable. */


        _createClass(MatSort, [{
          key: "register",

          /**
           * Register function to be used by the contained MatSortables. Adds the MatSortable to the
           * collection of MatSortables.
           */
          value: function register(sortable) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!sortable.id) {
                throw getSortHeaderMissingIdError();
              }

              if (this.sortables.has(sortable.id)) {
                throw getSortDuplicateSortableIdError(sortable.id);
              }
            }

            this.sortables.set(sortable.id, sortable);
          }
          /**
           * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
           * collection of contained MatSortables.
           */

        }, {
          key: "deregister",
          value: function deregister(sortable) {
            this.sortables["delete"](sortable.id);
          }
          /** Sets the active sort id and determines the new sort direction. */

        }, {
          key: "sort",
          value: function sort(sortable) {
            if (this.active != sortable.id) {
              this.active = sortable.id;
              this.direction = sortable.start ? sortable.start : this.start;
            } else {
              this.direction = this.getNextSortDirection(sortable);
            }

            this.sortChange.emit({
              active: this.active,
              direction: this.direction
            });
          }
          /** Returns the next sort direction of the active sortable, checking for potential overrides. */

        }, {
          key: "getNextSortDirection",
          value: function getNextSortDirection(sortable) {
            if (!sortable) {
              return '';
            } // Get the sort direction cycle with the potential sortable overrides.


            var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
            var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

            var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

            if (nextDirectionIndex >= sortDirectionCycle.length) {
              nextDirectionIndex = 0;
            }

            return sortDirectionCycle[nextDirectionIndex];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._markInitialized();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(direction) {
            if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getSortInvalidDirectionError(direction);
            }

            this._direction = direction;
          }
          /**
           * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
           * May be overriden by the MatSortable's disable clear input.
           */

        }, {
          key: "disableClear",
          get: function get() {
            return this._disableClear;
          },
          set: function set(v) {
            this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          }
        }]);

        return MatSort;
      }(_MatSortMixinBase);

      MatSort.ɵfac = function MatSort_Factory(t) {
        return ɵMatSort_BaseFactory(t || MatSort);
      };

      MatSort.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSort,
        selectors: [["", "matSort", ""]],
        hostAttrs: [1, "mat-sort"],
        inputs: {
          disabled: ["matSortDisabled", "disabled"],
          start: ["matSortStart", "start"],
          direction: ["matSortDirection", "direction"],
          disableClear: ["matSortDisableClear", "disableClear"],
          active: ["matSortActive", "active"]
        },
        outputs: {
          sortChange: "matSortChange"
        },
        exportAs: ["matSort"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MatSort.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortActive']
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortStart']
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortDirection']
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortDisableClear']
        }],
        sortChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['matSortChange']
        }]
      };

      var ɵMatSort_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSort);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matSort]',
            exportAs: 'matSort',
            host: {
              'class': 'mat-sort'
            },
            inputs: ['disabled: matSortDisabled']
          }]
        }], null, {
          start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortStart']
          }],
          sortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['matSortChange']
          }],
          direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDirection']
          }],
          disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDisableClear']
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortActive']
          }]
        });
      })();
      /** Returns the sort direction cycle to use given the provided parameters of order and clear. */


      function getSortDirectionCycle(start, disableClear) {
        var sortOrder = ['asc', 'desc'];

        if (start == 'desc') {
          sortOrder.reverse();
        }

        if (!disableClear) {
          sortOrder.push('');
        }

        return sortOrder;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
      /**
       * Animations used by MatSort.
       * @docs-private
       */

      var matSortAnimations = {
        /** Animation that moves the sort indicator. */
        indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0px)'
        })), // 10px is the height of the sort indicator, minus the width of the pointers
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(10px)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
        leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(-45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
        rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(-45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that controls the arrow opacity. */
        arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: .54
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        })), // Transition between all states except for immediate transitions
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /**
         * Animation for the translation of the arrow as a whole. States are separated into two
         * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
         * peek, and active. The other states define a specific animation (source-to-destination)
         * and are determined as a function of their prev user-perceived state and what the next state
         * should be.
         */
        arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Below
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        })]))), // Hidden Below => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Above
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        }))]),

        /** Necessary trigger that calls animate on children animations. */
        allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animateChild"])(), {
          optional: true
        })])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
       * include it in a custom provider.
       */

      var MatSortHeaderIntl = function MatSortHeaderIntl() {
        _classCallCheck(this, MatSortHeaderIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * ARIA label for the sorting button.
         * @deprecated Not used anymore. To be removed.
         * @breaking-change 8.0.0
         */

        this.sortButtonLabel = function (id) {
          return "Change sorting for ".concat(id);
        };
      };

      MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
        return new (t || MatSortHeaderIntl)();
      };

      MatSortHeaderIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MatSortHeaderIntl_Factory() {
          return new MatSortHeaderIntl();
        },
        token: MatSortHeaderIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatSortHeaderIntl();
      }
      /** @docs-private */


      var MAT_SORT_HEADER_INTL_PROVIDER = {
        // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
        provide: MatSortHeaderIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatSortHeaderIntl]],
        useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to the sort header.

      /** @docs-private */

      var MatSortHeaderBase = function MatSortHeaderBase() {
        _classCallCheck(this, MatSortHeaderBase);
      };

      var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
      /**
       * Applies sorting behavior (click to change sort) and styles to an element, including an
       * arrow to display the current sort direction.
       *
       * Must be provided with an id and contained within a parent MatSort directive.
       *
       * If used on header cells in a CdkTable, it will automatically default its id from its containing
       * column definition.
       */


      var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
        _inherits(MatSortHeader, _MatSortHeaderMixinBa);

        var _super2 = _createSuper(MatSortHeader);

        function MatSortHeader(_intl, changeDetectorRef, // `MatSort` is not optionally injected, but just asserted manually w/ better error.
        // tslint:disable-next-line: lightweight-tokens
        _sort, _columnDef, _focusMonitor, _elementRef) {
          var _this2;

          _classCallCheck(this, MatSortHeader);

          // Note that we use a string token for the `_columnDef`, because the value is provided both by
          // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
          // and we want to avoid having the sort header depending on the CDK table because
          // of this single reference.
          _this2 = _super2.call(this);
          _this2._intl = _intl;
          _this2._sort = _sort;
          _this2._columnDef = _columnDef;
          _this2._focusMonitor = _focusMonitor;
          _this2._elementRef = _elementRef;
          /**
           * Flag set to true when the indicator should be displayed while the sort is not active. Used to
           * provide an affordance that the header is sortable by showing on focus and hover.
           */

          _this2._showIndicatorHint = false;
          /** The direction the arrow should be facing according to the current state. */

          _this2._arrowDirection = '';
          /**
           * Whether the view state animation should show the transition between the `from` and `to` states.
           */

          _this2._disableViewStateAnimation = false;
          /** Sets the position of the arrow that displays when sorted. */

          _this2.arrowPosition = 'after';

          if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getSortHeaderNotContainedWithinSortError();
          }

          _this2._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(function () {
            if (_this2._isSorted()) {
              _this2._updateArrowDirection();
            } // If this header was recently active and now no longer sorted, animate away the arrow.


            if (!_this2._isSorted() && _this2._viewState && _this2._viewState.toState === 'active') {
              _this2._disableViewStateAnimation = false;

              _this2._setAnimationTransitionState({
                fromState: 'active',
                toState: _this2._arrowDirection
              });
            }

            changeDetectorRef.markForCheck();
          });
          return _this2;
        }
        /** Overrides the disable clear value of the containing MatSort for this MatSortable. */


        _createClass(MatSortHeader, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.id && this._columnDef) {
              this.id = this._columnDef.name;
            } // Initialize the direction of the arrow and set the view state to be immediately that state.


            this._updateArrowDirection();

            this._setAnimationTransitionState({
              toState: this._isSorted() ? 'active' : this._arrowDirection
            });

            this._sort.register(this);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            // We use the focus monitor because we also want to style
            // things differently based on the focus origin.
            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
              return _this3._setIndicatorHintVisible(!!origin);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            this._sort.deregister(this);

            this._rerenderSubscription.unsubscribe();
          }
          /**
           * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
           * user showing what the active sort will become. If set to false, the arrow will fade away.
           */

        }, {
          key: "_setIndicatorHintVisible",
          value: function _setIndicatorHintVisible(visible) {
            // No-op if the sort header is disabled - should not make the hint visible.
            if (this._isDisabled() && visible) {
              return;
            }

            this._showIndicatorHint = visible;

            if (!this._isSorted()) {
              this._updateArrowDirection();

              if (this._showIndicatorHint) {
                this._setAnimationTransitionState({
                  fromState: this._arrowDirection,
                  toState: 'hint'
                });
              } else {
                this._setAnimationTransitionState({
                  fromState: 'hint',
                  toState: this._arrowDirection
                });
              }
            }
          }
          /**
           * Sets the animation transition view state for the arrow's position and opacity. If the
           * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
           * no animation appears.
           */

        }, {
          key: "_setAnimationTransitionState",
          value: function _setAnimationTransitionState(viewState) {
            this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
            // remove the fromState so that it jumps right to the toState.

            if (this._disableViewStateAnimation) {
              this._viewState = {
                toState: viewState.toState
              };
            }
          }
          /** Triggers the sort on this sort header and removes the indicator hint. */

        }, {
          key: "_toggleOnInteraction",
          value: function _toggleOnInteraction() {
            this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


            if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
              this._disableViewStateAnimation = true;
            } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
            // the direction it is facing.


            var viewState = this._isSorted() ? {
              fromState: this._arrowDirection,
              toState: 'active'
            } : {
              fromState: 'active',
              toState: this._arrowDirection
            };

            this._setAnimationTransitionState(viewState);

            this._showIndicatorHint = false;
          }
        }, {
          key: "_handleClick",
          value: function _handleClick() {
            if (!this._isDisabled()) {
              this._toggleOnInteraction();
            }
          }
        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
              event.preventDefault();

              this._toggleOnInteraction();
            }
          }
          /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */

        }, {
          key: "_isSorted",
          value: function _isSorted() {
            return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
          }
          /** Returns the animation state for the arrow direction (indicator and pointers). */

        }, {
          key: "_getArrowDirectionState",
          value: function _getArrowDirectionState() {
            return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
          }
          /** Returns the arrow position state (opacity, translation). */

        }, {
          key: "_getArrowViewState",
          value: function _getArrowViewState() {
            var fromState = this._viewState.fromState;
            return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
          }
          /**
           * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
           * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
           * active sorted direction. The reason this is updated through a function is because the direction
           * should only be changed at specific times - when deactivated but the hint is displayed and when
           * the sort is active and the direction changes. Otherwise the arrow's direction should linger
           * in cases such as the sort becoming deactivated but we want to animate the arrow away while
           * preserving its direction, even though the next sort direction is actually different and should
           * only be changed once the arrow displays again (hint or activation).
           */

        }, {
          key: "_updateArrowDirection",
          value: function _updateArrowDirection() {
            this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
          }
        }, {
          key: "_isDisabled",
          value: function _isDisabled() {
            return this._sort.disabled || this.disabled;
          }
          /**
           * Gets the aria-sort attribute that should be applied to this sort header. If this header
           * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
           * says that the aria-sort property should only be present on one header at a time, so removing
           * ensures this is true.
           */

        }, {
          key: "_getAriaSortAttribute",
          value: function _getAriaSortAttribute() {
            if (!this._isSorted()) {
              return 'none';
            }

            return this._sort.direction == 'asc' ? 'ascending' : 'descending';
          }
          /** Whether the arrow inside the sort header should be rendered. */

        }, {
          key: "_renderArrow",
          value: function _renderArrow() {
            return !this._isDisabled() || this._isSorted();
          }
        }, {
          key: "disableClear",
          get: function get() {
            return this._disableClear;
          },
          set: function set(v) {
            this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          }
        }]);

        return MatSortHeader;
      }(_MatSortHeaderMixinBase);

      MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
        return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatSortHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSortHeader,
        selectors: [["", "mat-sort-header", ""]],
        hostAttrs: [1, "mat-sort-header"],
        hostVars: 3,
        hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
              return ctx._handleClick();
            })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(true);
            })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(false);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
          }
        },
        inputs: {
          disabled: "disabled",
          arrowPosition: "arrowPosition",
          disableClear: "disableClear",
          id: ["mat-sort-header", "id"],
          start: "start"
        },
        exportAs: ["matSortHeader"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 6,
        consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
        template: function MatSortHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
        encapsulation: 2,
        data: {
          animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
        },
        changeDetection: 0
      });

      MatSortHeader.ctorParameters = function () {
        return [{
          type: MatSortHeaderIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: MatSort,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['MAT_SORT_HEADER_COLUMN_DEF']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      MatSortHeader.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['mat-sort-header']
        }],
        arrowPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[mat-sort-header]',
            exportAs: 'matSortHeader',
            template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     role=\"button\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
            host: {
              'class': 'mat-sort-header',
              '(click)': '_handleClick()',
              '(keydown)': '_handleKeydown($event)',
              '(mouseenter)': '_setIndicatorHintVisible(true)',
              '(mouseleave)': '_setIndicatorHintVisible(false)',
              '[attr.aria-sort]': '_getAriaSortAttribute()',
              '[class.mat-sort-header-disabled]': '_isDisabled()'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled'],
            animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
            styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
          }]
        }], function () {
          return [{
            type: MatSortHeaderIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: MatSort,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['MAT_SORT_HEADER_COLUMN_DEF']
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          arrowPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mat-sort-header']
          }],
          start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSortModule = function MatSortModule() {
        _classCallCheck(this, MatSortModule);
      };

      MatSortModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatSortModule
      });
      MatSortModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatSortModule_Factory(t) {
          return new (t || MatSortModule)();
        },
        providers: [MAT_SORT_HEADER_INTL_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSortModule, {
          declarations: function declarations() {
            return [MatSort, MatSortHeader];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]];
          },
          exports: function exports() {
            return [MatSort, MatSortHeader];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
            exports: [MatSort, MatSortHeader],
            declarations: [MatSort, MatSortHeader],
            providers: [MAT_SORT_HEADER_INTL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=sort.js.map

      /***/

    },

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


      var _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./containers/authors/authors.container */
      "./src/app/authors/containers/authors/authors.container.ts");

      var routes = [{
        path: '',
        component: _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_2__["AuthorsContainer"]
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


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../layout/layout.module */
      "./src/app/layout/layout.module.ts");
      /* harmony import */


      var _authors_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./authors-routing.module */
      "./src/app/authors/authors-routing.module.ts");
      /* harmony import */


      var _components_authors_authors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/authors/authors.component */
      "./src/app/authors/components/authors/authors.component.ts");
      /* harmony import */


      var _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./containers/authors/authors.container */
      "./src/app/authors/containers/authors/authors.container.ts");

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _authors_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthorsRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthorsModule, {
          declarations: [_components_authors_authors_component__WEBPACK_IMPORTED_MODULE_11__["AuthorsComponent"], _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_12__["AuthorsContainer"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _authors_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthorsRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_authors_authors_component__WEBPACK_IMPORTED_MODULE_11__["AuthorsComponent"], _containers_authors_authors_container__WEBPACK_IMPORTED_MODULE_12__["AuthorsContainer"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _authors_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthorsRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"]]
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


      var _layout_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../layout/paginator/paginator.component */
      "./src/app/layout/paginator/paginator.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
        function AuthorsComponent() {
          _classCallCheck(this, AuthorsComponent);

          this.displayedColumns = ['id', 'first_name', 'last_name'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        }

        _createClass(AuthorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        return new (t || AuthorsComponent)();
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
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _layout_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__["PaginatorComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: ["#authors[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 100%;\n}\n#authors[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  align-self: center;\n}\n#authors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 85vw;\n}\n#authors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#authors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]  {\n  font-size: 16px;\n  font-style: bold;\n  z-index: 0;\n}\n#authors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]  .mat-sort-header-container {\n  justify-content: center;\n}\n#authors[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%] {\n  width: 85vw;\n  margin-top: 75px;\n}\n#tableContent[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  height: 592px;\n  overflow: auto;\n  margin-top: 75px;\n}\n.show[_ngcontent-%COMP%] {\n  position: none !important;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9ycy9jb21wb25lbnRzL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0FBR1o7QUFGWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFJaEI7QUFIZ0I7RUFDSSx1QkFBQTtBQUtwQjtBQUNJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9ycy9jb21wb25lbnRzL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdXRob3Jze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF0LXNwaW5uZXJ7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gICAgdGFibGV7XG4gICAgICAgIHdpZHRoOiA4NXZ3O1xuICAgICAgICB0cntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRoOjpuZy1kZWVwe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXQtcGFnaW5hdG9ye1xuICAgICAgICB3aWR0aDogODV2dztcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICB9XG59XG4jdGFibGVDb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBoZWlnaHQ6IDU5MnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDc1cHg7XG59XG4uc2hvd3tcbiAgICBwb3NpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6MSAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'authors-component',
            templateUrl: './authors.component.html',
            styleUrls: ['./authors.component.scss']
          }]
        }], function () {
          return [];
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      var AuthorsContainer = /*#__PURE__*/function () {
        function AuthorsContainer(authorsService) {
          _classCallCheck(this, AuthorsContainer);

          this.authorsService = authorsService;
        }

        _createClass(AuthorsContainer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            this.getAuthors();
          }
          /**
          * Returns Observable with authors list
          */

        }, {
          key: "getAuthors",
          value: function getAuthors() {
            var _this4 = this;

            this.authors$ = this.authorsService.getAuthorsInQuantity(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return data.meta.records;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (quantity) {
              _this4.authorsQuantity = quantity;
              _this4.loading = false;
              return _this4.authorsService.getAuthorsInQuantity(quantity);
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
        selectors: [["app-authors"]],
        decls: 4,
        vars: 4,
        consts: [[3, "authors", 4, "ngIf", "ngIfElse"], ["loadingBlock", ""], [3, "authors"]],
        template: function AuthorsContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthorsContainer_authors_component_0_Template, 1, 1, "authors-component", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthorsContainer_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.authors$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_authors_authors_component__WEBPACK_IMPORTED_MODULE_4__["AuthorsComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcnMvY29udGFpbmVycy9hdXRob3JzL2F1dGhvcnMuY29udGFpbmVyLnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-authors',
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
    "./src/app/authors/services/authors.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/authors/services/authors.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthorsService */

    /***/
    function srcAppAuthorsServicesAuthorsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorsService", function () {
        return AuthorsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AuthorsService = /*#__PURE__*/function () {
        function AuthorsService(http) {
          _classCallCheck(this, AuthorsService);

          this.http = http;
          this.apiUrl = 'http://muzhikov.kubesh.ru/api/';
          this.authorsEndpoint = 'authors';
        }
        /**
         * Takes in an quantity and returns an authors list
         *
         * @param quantity A quantity of authors for getting list
         */


        _createClass(AuthorsService, [{
          key: "getAuthorsInQuantity",
          value: function getAuthorsInQuantity(quantity) {
            return this.http.get("".concat(this.apiUrl).concat(this.authorsEndpoint, "?limit=").concat(quantity));
          }
          /**
           * Takes in an id and returns an authors list
           *
           * @param authorId An author's id for getting list
           */

        }, {
          key: "getAuthorById",
          value: function getAuthorById(authorId) {
            return this.http.get("".concat(this.apiUrl).concat(this.authorsEndpoint, "/").concat(authorId));
          }
          /**
           * Takes in an author's object and returns an authors list
           *
           * @param author An author for create him in list
           */

        }, {
          key: "createAuthor",
          value: function createAuthor(author) {
            var url = "".concat(this.apiUrl).concat(this.authorsEndpoint);
            return this.http.post(url, author);
          }
          /**
           * Takes in an author's object and returns an authors list
           *
           * @param author An author for editing him in list
           */

        }, {
          key: "updateAuthor",
          value: function updateAuthor(author) {
            var url = "".concat(this.apiUrl).concat(this.authorsEndpoint, "/").concat(author.id);
            return this.http.put(url, author);
          }
          /**
           * Takes in an anuthor's id and returns a list without the author
           *
           * @param authorId An author's id for delete him from list
           */

        }, {
          key: "deleteAuthor",
          value: function deleteAuthor(authorId) {
            return this.http["delete"]("".concat(this.apiUrl).concat(this.authorsEndpoint, "/").concat(authorId));
          }
        }]);

        return AuthorsService;
      }();

      AuthorsService.ɵfac = function AuthorsService_Factory(t) {
        return new (t || AuthorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthorsService,
        factory: AuthorsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsService, [{
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

    }
  }]);
})();
//# sourceMappingURL=authors-authors-module-es5.js.map