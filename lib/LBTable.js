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
var PropTypes = require("prop-types");
var table_1 = require("lbc-wrapper/lib/table");
var LBTable = /** @class */ (function (_super) {
    __extends(LBTable, _super);
    function LBTable(props) {
        var _this = _super.call(this, props) || this;
        _this.rowSelection = props.rowSelectionType ? { type: props.rowSelectionType, onChange: _this.props.selectedRowChange } : undefined;
        return _this;
    }
    LBTable.prototype.shouldComponentUpdate = function (nextProps) {
        // if forceRender, will not compare props
        return nextProps.forceRender || this.props.data !== nextProps.data ||
            this.props.selectedRowKeys !== nextProps.selectedRowKeys;
    };
    LBTable.prototype.render = function () {
        var _a = this.props, columns = _a.columns, data = _a.data, rowSelection = _a.rowSelection, selectedRowKeys = _a.selectedRowKeys, props = __rest(_a, ["columns", "data", "rowSelection", "selectedRowKeys"]);
        return (React.createElement(table_1.default, __assign({ bordered: true, size: "small", rowSelection: this.rowSelection ? Object.assign({}, this.rowSelection, { selectedRowKeys: selectedRowKeys }) : this.rowSelection, columns: columns, dataSource: data }, props)));
    };
    LBTable.propTypes = {
        columns: PropTypes.array.isRequired,
        data: PropTypes.array,
        rowSelectionType: PropTypes.oneOf([undefined, 'checkbox', 'radio']),
        selectedRowChange: PropTypes.func,
        selectedRowKeys: PropTypes.array,
    };
    LBTable.defaultProps = {
        rowSelectionType: undefined,
        data: [],
    };
    return LBTable;
}(React.Component));
exports.default = LBTable;
