"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var FieldsWrapper_1 = require("./FieldsWrapper");
var TableWrapper_1 = require("../table/TableWrapper");
var QueryTable = /** @class */ (function (_super) {
    __extends(QueryTable, _super);
    function QueryTable(props) {
        var _this = _super.call(this, props) || this;
        _this.fieldsQueryRegister = _this.fieldsQueryRegister.bind(_this);
        _this.query = _this.query.bind(_this);
        _this.refresh = _this.refresh.bind(_this);
        return _this;
    }
    QueryTable.prototype.refresh = function () {
        this.query({});
    };
    QueryTable.prototype.query = function (dataToBeSent) {
        return this.props.query(dataToBeSent);
    };
    QueryTable.prototype.fieldsQueryRegister = function (func) {
        this.queryCallback = func;
    };
    QueryTable.prototype.render = function () {
        var _a = this.props, fields = _a.fields, query = _a.query, loadOnMount = _a.loadOnMount, props = __rest(_a, ["fields", "query", "loadOnMount"]);
        return (react_1.default.createElement("div", null,
            !fields || fields.length === 0 ? null : (react_1.default.createElement(FieldsWrapper_1.default, { fields: fields, query: this.query, queryRegister: this.fieldsQueryRegister, loadOnMount: loadOnMount })),
            react_1.default.createElement(TableWrapper_1.default, __assign({}, props))));
    };
    return QueryTable;
}(react_1.Component));
QueryTable.propTypes = {
    query: prop_types_1.default.func,
    loadOnMount: prop_types_1.default.bool,
};
QueryTable.defaultProps = {
    rowSelection: 'checkbox',
    loadOnMount: true,
};
exports.default = QueryTable;
