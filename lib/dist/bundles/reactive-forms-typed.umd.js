(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('reactive-forms-typed', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['reactive-forms-typed'] = {}, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, forms, rxjs, operators, common) { 'use strict';

    var FormControlOnErrorItemDirective = /** @class */ (function () {
        function FormControlOnErrorItemDirective(formGroupService, element) {
            this.formGroupService = formGroupService;
            this.element = element;
            this.errors = null;
            this.showOnFormTouched = false;
            this.hidden = true;
            this._errors = {
                required: "Required",
                minlength: "Minimum length not valid",
                maxlength: "Exceeds the maximum length",
                isValidEmailAddress: "Invalid email address",
                isValidSelection: "Invalid selection",
                isStringValidByRegEx: "Invalid character",
                isStringInRange: "Invalid string length",
                isInRange: "Number is outside specified range",
                isGreaterThanMin: "Exceeds allowed value",
                doControlValuesMatch: "Values do not match",
                email: "Invalid email address"
            };
        }
        FormControlOnErrorItemDirective.prototype.ngOnInit = function () {
            var fgroup = this.formGroupService.form;
            if (!!this.errors) {
                this._errors = Object.assign(Object.assign({}, this._errors), this.errors);
            }
            if (!!fgroup.__errors) {
                this._errors = Object.assign(Object.assign({}, this._errors), fgroup.__errors);
            }
            if (!!fgroup.__contractErrors && !!fgroup.__contractErrors[this.formControlItem]) {
                this._errors = Object.assign(Object.assign({}, this._errors), fgroup.__contractErrors[this.formControlItem]);
            }
            this.changeTracker();
        };
        FormControlOnErrorItemDirective.prototype.changeTracker = function () {
            var _this = this;
            var onHappen = function (x) {
                _this.hidden = !x;
                var msg = _this.hidden ? '' : _this.errorMessage;
                if (!!msg) {
                    _this.element.nativeElement.innerText = msg;
                }
            };
            this.tracker = rxjs.interval(250).pipe(operators.map(function (ev) { return _this.errorMessage && _this.ControlTouched; })).subscribe(onHappen);
        };
        Object.defineProperty(FormControlOnErrorItemDirective.prototype, "errorMessage", {
            get: function () {
                var formControl = this.formGroupService.form.get(this.formControlItem);
                if (!!formControl && !!formControl.errors) {
                    var fgroup = this.formGroupService.form;
                    var keys = Object.keys(formControl.errors);
                    return (this._errors[keys[0]] || null);
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormControlOnErrorItemDirective.prototype, "ControlTouched", {
            get: function () {
                var formControl = this.formGroupService.form.get(this.formControlItem);
                if (this.showOnFormTouched) {
                    if (formControl) {
                        return formControl.parent.touched;
                    }
                }
                else {
                    if (formControl) {
                        return formControl.touched || this.formGroupService.submitted || (!!formControl.parent.__submitted);
                    }
                }
                return true;
            },
            enumerable: false,
            configurable: true
        });
        FormControlOnErrorItemDirective.prototype.ngOnDestroy = function () {
            this.tracker.unsubscribe();
        };
        return FormControlOnErrorItemDirective;
    }());
    FormControlOnErrorItemDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[formControlOnErrorItem]',
                },] }
    ];
    FormControlOnErrorItemDirective.ctorParameters = function () { return [
        { type: forms.FormGroupDirective, decorators: [{ type: core.Inject, args: [forms.FormGroupDirective,] }] },
        { type: core.ElementRef }
    ]; };
    FormControlOnErrorItemDirective.propDecorators = {
        formControlItem: [{ type: core.Input, args: ['formControlOnErrorItem',] }],
        errors: [{ type: core.Input }],
        showOnFormTouched: [{ type: core.Input }],
        hidden: [{ type: core.HostBinding, args: ['hidden',] }]
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    // @dynamic
    var FormExtendedMethods = /** @class */ (function () {
        function FormExtendedMethods() {
        }
        return FormExtendedMethods;
    }());
    FormExtendedMethods.onInit = function () {
        this.__submitted = false;
        this.__subscriptions = [];
    };
    FormExtendedMethods.setErrors = function (config) {
        this.__errors = Object.assign({}, config);
    };
    FormExtendedMethods.setFormErrors = function (config) {
        this.__contractErrors = Object.assign({}, config);
    };
    FormExtendedMethods.setFormControlErrors = function (key, config) {
        if (!!this.__contractErrors) {
            this.__contractErrors = Object.assign({}, this.__contractErrors);
            this.__contractErrors[key] = config;
        }
        else {
            this.__contractErrors = {};
            this.__contractErrors[key] = config;
        }
    };
    FormExtendedMethods.markAsSubmitted = function () {
        this.__submitted = true;
    };
    FormExtendedMethods.isSubmitted = function () {
        return this.__submitted;
    };
    FormExtendedMethods.addFormControlValidityTracker = function (from, to) {
        var form = this;
        var sub$ = form.controls[from].valueChanges.pipe(operators.delay(1), operators.tap(function (_) { return form.controls[to].updateValueAndValidity(); }));
        this.__subscriptions = __spread(this.__subscriptions, [sub$.subscribe()]);
    };
    FormExtendedMethods.unsubscribeValidityTackers = function () {
        if (this.__subscriptions) {
            this.__subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        }
    };

    var FormTypeBuilder = /** @class */ (function () {
        function FormTypeBuilder() {
            this.ngFormBuilder = new forms.FormBuilder();
        }
        FormTypeBuilder.create = function () {
            return new FormTypeBuilder();
        };
        FormTypeBuilder.prototype.group = function (controlsConfig, options) {
            var formGroup = this.ngFormBuilder.group(controlsConfig, options);
            formGroup.onInit = FormExtendedMethods.onInit.bind(formGroup);
            formGroup.setFormErrors = FormExtendedMethods.setFormErrors.bind(formGroup);
            formGroup.setFormErrors = FormExtendedMethods.setFormErrors.bind(formGroup);
            formGroup.setFormControlErrors = FormExtendedMethods.setFormControlErrors.bind(formGroup);
            formGroup.markAsSubmitted = FormExtendedMethods.markAsSubmitted.bind(formGroup);
            formGroup.isSubmitted = FormExtendedMethods.isSubmitted.bind(formGroup);
            formGroup.addFormControlValidityTracker = FormExtendedMethods.addFormControlValidityTracker.bind(formGroup);
            formGroup.onInit();
            return formGroup;
        };
        FormTypeBuilder.prototype.control = function (formState, validator, asyncValidator) {
            return this.ngFormBuilder.control(formState, validator, asyncValidator);
        };
        FormTypeBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
            return this.ngFormBuilder.array(controlsConfig, validator, asyncValidator);
        };
        return FormTypeBuilder;
    }());
    FormTypeBuilder.decorators = [
        { type: core.Injectable }
    ];
    FormTypeBuilder.ctorParameters = function () { return []; };

    var ReactiveFormsTyped = /** @class */ (function () {
        function ReactiveFormsTyped() {
        }
        return ReactiveFormsTyped;
    }());
    ReactiveFormsTyped.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule
                    ],
                    declarations: [
                        FormControlOnErrorItemDirective
                    ],
                    exports: [
                        FormControlOnErrorItemDirective
                    ],
                    providers: [FormTypeBuilder],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormControlOnErrorItemDirective = FormControlOnErrorItemDirective;
    exports.FormTypeBuilder = FormTypeBuilder;
    exports.ReactiveFormsTyped = ReactiveFormsTyped;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=reactive-forms-typed.umd.js.map
