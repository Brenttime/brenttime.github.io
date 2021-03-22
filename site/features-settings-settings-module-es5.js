(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-settings-settings-module"], {
    /***/
    "1jwB":
    /*!*****************************************************************************************************!*\
      !*** ./projects/angular-ngrx-material-starter/src/app/features/settings/settings-routing.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: SettingsRoutingModule */

    /***/
    function jwB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function () {
        return SettingsRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings/settings-container.component */
      "pYd/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_1__["SettingsContainerComponent"],
        data: {
          title: 'anms.menu.settings'
        }
      }];

      var SettingsRoutingModule = function SettingsRoutingModule() {
        _classCallCheck(this, SettingsRoutingModule);
      };

      SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: SettingsRoutingModule
      });
      SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function SettingsRoutingModule_Factory(t) {
          return new (t || SettingsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "JvX6":
    /*!*********************************************************************************************!*\
      !*** ./projects/angular-ngrx-material-starter/src/app/features/settings/settings.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: SettingsModule */

    /***/
    function JvX6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
        return SettingsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "Gm7q");
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings-routing.module */
      "1jwB");
      /* harmony import */


      var _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings/settings-container.component */
      "pYd/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SettingsModule = function SettingsModule() {
        _classCallCheck(this, SettingsModule);
      };

      SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: SettingsModule
      });
      SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function SettingsModule_Factory(t) {
          return new (t || SettingsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsModule, {
          declarations: [_settings_settings_container_component__WEBPACK_IMPORTED_MODULE_3__["SettingsContainerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=features-settings-settings-module-es5.js.map