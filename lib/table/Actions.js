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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
require("./style");
var ActionButton_1 = require("./ActionButton");
var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions() {
        // shouldComponentUpdate(nextProps) {
        //   return !shallowCompareArr(this.props.actions, nextProps.actions) ||
        //     this.props.selectedRowKeys !== nextProps.selectedRowKeys
        // }
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultProps = {
            position: 'left',
        };
        return _this;
    }
    Actions.prototype.render = function () {
        var _a = this.props, actions = _a.actions, position = _a.position, selectedRowKeys = _a.selectedRowKeys, selectedRows = _a.selectedRows, selectedRowChange = _a.selectedRowChange;
        if (!actions || actions.length === 0) {
            return null;
        }
        return (React.createElement("div", { className: "lb-query-table-actions" },
            React.createElement("span", { className: position }, actions.map(function (b) { return (React.createElement(ActionButton_1.default, __assign({ type: b.type }, b, { key: b.key, butKey: b.key, selectedRows: selectedRows, selectedRowKeys: selectedRowKeys, selectedRowChange: selectedRowChange }))); }))));
    };
    Actions.propTypes = {
        actions: PropTypes.array.isRequired,
        position: PropTypes.oneOf(['left', 'right']),
        selectedRowChange: PropTypes.func,
    };
    return Actions;
}(React.Component));
exports.default = Actions;
