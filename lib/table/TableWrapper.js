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
var React = require("react");
var LBTable_1 = require("./LBTable");
var Actions_1 = require("./Actions");
var TableWrapper = /** @class */ (function (_super) {
    __extends(TableWrapper, _super);
    function TableWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedRowChange1 = _this.selectedRowChange1.bind(_this);
        _this.clearSelections = _this.clearSelections.bind(_this);
        _this.state = {
            selectedRowKeys: [],
            selectedRows: [],
        };
        return _this;
    }
    TableWrapper.prototype.selectedRowChange1 = function (selectedRowKeys, selectedRows) {
        this.setState({
            selectedRowKeys: selectedRowKeys.slice(),
            selectedRows: selectedRows,
        });
    };
    TableWrapper.prototype.clearSelections = function () {
        this.setState({
            selectedRowKeys: [],
            selectedRows: [],
        });
    };
    TableWrapper.prototype.render = function () {
        var _a = this.props, actions = _a.actions, position = _a.position, props = __rest(_a, ["actions", "position"]);
        var _b = this.state, selectedRowKeys = _b.selectedRowKeys, selectedRows = _b.selectedRows;
        return (React.createElement("div", null,
            React.createElement(Actions_1.default, { actions: actions, selectedRowKeys: selectedRowKeys, selectedRows: selectedRows, selectedRowChange: this.selectedRowChange1, position: position }),
            React.createElement(LBTable_1.default, __assign({}, props, { selectedRowKeys2: selectedRowKeys, selectedRowChange2: this.selectedRowChange1 }))));
    };
    return TableWrapper;
}(React.Component));
exports.default = TableWrapper;
