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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var button_1 = require("lbc-wrapper/lib/button");
var popconfirm_1 = require("lbc-wrapper/lib/popconfirm");
var ActionButton = /** @class */ (function (_super) {
    __extends(ActionButton, _super);
    function ActionButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionButton.prototype.render = function () {
        var _a = this.props, label = _a.label, icon = _a.icon, action = _a.action, _b = _a.minSelect, minSelect = _b === void 0 ? 0 : _b, _c = _a.maxSelect, maxSelect = _c === void 0 ? 0 : _c, _d = _a.selectedRowKeys, selectedRowKeys = _d === void 0 ? [] : _d, _e = _a.selectedRows, selectedRows = _e === void 0 ? [] : _e, disableFunc = _a.disableFunc, confirm = _a.confirm, message = _a.message, selectedRowChange = _a.selectedRowChange, type = _a.type;
        var disabled = false;
        if (disableFunc) {
            disabled = disableFunc(selectedRowKeys, selectedRows, selectedRowChange);
        }
        else {
            disabled = minSelect !== 0 && selectedRowKeys.length < minSelect;
            disabled = disabled || (maxSelect !== 0 && selectedRowKeys.length > maxSelect);
        }
        var act = function () { return action && action(selectedRowKeys, selectedRows); };
        return confirm ? (React.createElement(popconfirm_1.default, { title: message, onConfirm: act, okText: "\u786E\u5B9A", cancelText: "\u53D6\u6D88" },
            React.createElement(button_1.default, { type: type, disabled: disabled, icon: icon }, label))) : (React.createElement(button_1.default, { type: type, onClick: act, disabled: disabled, icon: icon }, label));
    };
    // shouldComponentUpdate(nextProps) {
    //   return this.props.label !== nextProps.label ||
    //     this.props.butKey !== nextProps.butKey ||
    //     // if minSelect and maxSelect is 0, that means this button does not care what row is selected.
    //     (nextProps.minSelect === 0 && nextProps.maxSelect === 0 ? false : this.props.selectedRowKeys !== nextProps.selectedRowKeys)
    // }
    ActionButton.propTypes = {
        label: PropTypes.string.isRequired,
        butKey: PropTypes.string.isRequired,
        icon: PropTypes.string,
        type: PropTypes.string,
        action: PropTypes.func,
        minSelect: PropTypes.number,
        maxSelect: PropTypes.number,
        confirm: PropTypes.bool,
        selectedRowChange: PropTypes.func,
    };
    ActionButton.defaultProps = {
        minSelect: 0,
        maxSelect: 0,
        confirm: false,
    };
    return ActionButton;
}(React.Component));
exports.default = ActionButton;
