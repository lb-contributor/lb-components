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
var prop_types_1 = require("prop-types");
var form_1 = require("lbc-wrapper/lib/form");
var row_1 = require("lbc-wrapper/lib/row");
var col_1 = require("lbc-wrapper/lib/col");
var icon_1 = require("lbc-wrapper/lib/icon");
var button_1 = require("lbc-wrapper/lib/button");
var input_1 = require("lbc-wrapper/lib/input");
var select_1 = require("lbc-wrapper/lib/select");
require("./style");
var COLUMNS = 3;
var colSpan = {
    sm: { span: 24 },
    md: { span: 24 / COLUMNS },
};
var formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
var Fields = /** @class */ (function (_super) {
    __extends(Fields, _super);
    function Fields(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapsed: true,
            loading: false,
        };
        _this.renderButtons = _this.renderButtons.bind(_this);
        _this.renderFormItems = _this.renderFormItems.bind(_this);
        _this.renderFormItem = _this.renderFormItem.bind(_this);
        _this.renderFormItemByType = _this.renderFormItemByType.bind(_this);
        _this.renderFormItemSelect = _this.renderFormItemSelect.bind(_this);
        _this.renderFormItemInput = _this.renderFormItemInput.bind(_this);
        _this.query = _this.query.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.toggleForm = _this.toggleForm.bind(_this);
        return _this;
    }
    Fields.prototype.componentDidMount = function () {
        this.props.queryRegister(this.query);
        if (this.props.loadOnMount) {
            this.query();
        }
    };
    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log(nextProps.form)
    //   console.log(this.props.form)
    //   return !is(this.state.data, nextState.data) ||
    //     nextProps.fields !== this.props.fields //||
    //     // this.props.form !== nextProps.form
    // }
    Fields.prototype.query = function () {
        var _this = this;
        var _a = this.props, query = _a.query, form = _a.form, fields = _a.fields;
        var collapsed = this.state.collapsed;
        var fieldIDs = (collapsed ? fields[0] : this.props.fields[0].concat(this.props.fields[1])).map(function (f) { return f.id; });
        form.validateFields(fieldIDs, {}, function (errors, values) {
            if (errors) {
                return;
            }
            _this.setState({
                loading: true,
            });
            var toBeSent = {};
            fieldIDs.forEach(function (f) {
                toBeSent[f] = values[f];
            });
            var retPromise = query(toBeSent);
            if (!retPromise) {
                _this.setState({
                    loading: false,
                });
                return;
            }
            retPromise.then(function () {
                _this.setState({
                    loading: false,
                });
            }).catch(function () {
                _this.setState({
                    loading: false,
                });
            });
        });
    };
    Fields.prototype.reset = function () {
        this.props.form.resetFields();
    };
    Fields.prototype.toggleForm = function () {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    Fields.prototype.renderButtons = function () {
        var fields = this.props.fields;
        var collapsed = this.state.collapsed;
        var noCollapse = fields.length === 1 || fields[1].length === 1;
        var fieldsNum = collapsed ? fields[0].length : (fields[0].length + (fields[1] ? fields[1].length : 0));
        var allLine = fieldsNum % COLUMNS === 0; // 独占一行
        var collapseButton = (React.createElement("a", { style: { marginLeft: 8 }, onClick: this.toggleForm }, collapsed ? (React.createElement("span", null,
            "\u5C55\u5F00 ",
            React.createElement(icon_1.default, { type: "down" }))) : (React.createElement("span", null,
            "\u6536\u8D77 ",
            React.createElement(icon_1.default, { type: "up" })))));
        var buttons = (React.createElement("div", { className: "lb-query-table-buttons" },
            React.createElement("span", { style: allLine ? { display: 'block', float: 'right' } : {} },
                React.createElement(button_1.default, { type: "primary", htmlType: "submit", onClick: this.query, loading: this.state.loading }, "\u67E5\u8BE2"),
                React.createElement(button_1.default, { style: { marginLeft: 8 }, onClick: this.reset }, "\u91CD\u7F6E"),
                noCollapse ? null : collapseButton)));
        return (React.createElement(col_1.default, __assign({}, colSpan, { offset: allLine ? (24 - (24 / COLUMNS)) : 0 }), buttons));
    };
    Fields.prototype.renderFormItems = function () {
        var _this = this;
        var fields = this.state.collapsed ? this.props.fields[0] : this.props.fields[0].concat(this.props.fields[1]);
        return fields.map(function (f) { return (React.createElement(col_1.default, __assign({}, (f.colSpan || colSpan), { key: f.id }), _this.renderFormItem(f))); });
    };
    Fields.prototype.renderFormItem = function (field) {
        var form = this.props.form;
        var getFieldDecorator = form.getFieldDecorator;
        var item = this.renderFormItemByType(field);
        return (React.createElement(form_1.SimpleFormItem, { label: field.label, required: field.required }, getFieldDecorator(field.id, {
            initialValue: field.defaultValue,
            onChange: field.onChange,
            rules: [
                { required: field.required, message: "\u8BF7\u9009\u62E9" + field.label },
            ],
        })(item)));
    };
    Fields.prototype.renderFormItemByType = function (field) {
        if (field.render) {
            return field.render();
        }
        if (field.type === 'Select') {
            return this.renderFormItemSelect(field);
        }
        return this.renderFormItemInput(field);
    };
    Fields.prototype.renderFormItemSelect = function (field) {
        var select = (React.createElement(select_1.default, { allowClear: !field.required, dropdownMatchSelectWidth: false, style: { width: '100%' }, options: field.options }));
        return select;
    };
    Fields.prototype.renderFormItemInput = function (field) {
        return (React.createElement(input_1.default, { placeholder: field.placeholder, type: field.type }));
    };
    Fields.prototype.render = function () {
        var fields = this.props.fields;
        if (!fields || fields.length === 0) {
            return null;
        }
        return (React.createElement("div", { className: "lb-query-table-fields" },
            React.createElement(form_1.default, { layout: "inline" },
                React.createElement(row_1.default, { gutter: { md: 8, lg: 24, xl: 48 } },
                    this.renderFormItems(),
                    this.renderButtons()))));
    };
    Fields.propTypes = {
        fields: prop_types_1.default.arrayOf(prop_types_1.default.array),
        form: prop_types_1.default.object.isRequired,
        query: prop_types_1.default.func.isRequired,
        loadOnMount: prop_types_1.default.bool,
        queryRegister: prop_types_1.default.func.isRequired,
    };
    Fields.defaultProps = {
        fields: [],
        loadOnMount: true,
    };
    return Fields;
}(React.Component));
exports.default = form_1.default.create()(Fields);
