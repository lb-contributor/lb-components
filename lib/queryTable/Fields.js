'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _form = require('lbc-wrapper/lib/form');

var _form2 = _interopRequireDefault(_form);

var _row = require('lbc-wrapper/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('lbc-wrapper/lib/col');

var _col2 = _interopRequireDefault(_col);

var _icon = require('lbc-wrapper/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('lbc-wrapper/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('lbc-wrapper/lib/input');

var _input2 = _interopRequireDefault(_input);

var _select = require('lbc-wrapper/lib/select');

var _select2 = _interopRequireDefault(_select);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COLUMNS = 3;

var colSpan = {
  sm: { span: 24 },
  md: { span: 24 / COLUMNS }
};

var formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

var Fields = function (_Component) {
  _inherits(Fields, _Component);

  function Fields(props) {
    _classCallCheck(this, Fields);

    var _this = _possibleConstructorReturn(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).call(this, props));

    _this.state = {
      data: Map({
        collapsed: true,
        loading: false
      })
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

  _createClass(Fields, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.queryRegister(this.query);
      if (this.props.loadOnMount) {
        this.query();
      }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log(nextProps.form)
    //   console.log(this.props.form)
    //   return !is(this.state.data, nextState.data) ||
    //     nextProps.fields !== this.props.fields //||
    //     // this.props.form !== nextProps.form
    // }

  }, {
    key: 'query',
    value: function query() {
      var _this2 = this;

      var _props = this.props,
          query = _props.query,
          form = _props.form,
          fields = _props.fields;

      var collapsed = this.state.data.get('collapsed');

      var fieldIDs = (collapsed ? fields[0] : [].concat(_toConsumableArray(this.props.fields[0]), _toConsumableArray(this.props.fields[1]))).map(function (f) {
        return f.id;
      });
      form.validateFields(fieldIDs, {}, function (errors, values) {
        if (errors) {
          return;
        }

        _this2.setState(function (_ref) {
          var data = _ref.data;
          return {
            data: data.update('loading', function () {
              return true;
            })
          };
        });

        var toBeSent = {};
        fieldIDs.forEach(function (f) {
          toBeSent[f] = values[f];
        });

        var retPromise = query(toBeSent);

        if (!retPromise) {
          _this2.setState(function (_ref2) {
            var data = _ref2.data;
            return {
              data: data.update('loading', function () {
                return false;
              })
            };
          });
          return;
        }

        retPromise.then(function (res) {
          _this2.setState(function (_ref3) {
            var data = _ref3.data;
            return {
              data: data.update('loading', function () {
                return false;
              })
            };
          });
        }).catch(function (e) {
          _this2.setState(function (_ref4) {
            var data = _ref4.data;
            return {
              data: data.update('loading', function () {
                return false;
              })
            };
          });
        });
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.props.form.resetFields();
    }
  }, {
    key: 'toggleForm',
    value: function toggleForm() {
      this.setState(function (_ref5) {
        var data = _ref5.data;
        return {
          data: data.update('collapsed', function (c) {
            return !c;
          })
        };
      });
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var fields = this.props.fields;

      var collapsed = this.state.data.get('collapsed');
      var noCollapse = fields.length === 1 || fields[1].length === 1;
      var fieldsNum = collapsed ? fields[0].length : fields[0].length + (fields[1] ? fields[1].length : 0);
      var allLine = fieldsNum % COLUMNS === 0; // 独占一行

      var collapseButton = _react2.default.createElement(
        'a',
        { style: { marginLeft: 8 }, onClick: this.toggleForm },
        collapsed ? _react2.default.createElement(
          'span',
          null,
          '\u5C55\u5F00 ',
          _react2.default.createElement(_icon2.default, { type: 'down' })
        ) : _react2.default.createElement(
          'span',
          null,
          '\u6536\u8D77 ',
          _react2.default.createElement(_icon2.default, { type: 'up' })
        )
      );

      var buttons = _react2.default.createElement(
        'div',
        { className: 'lb-query-table-buttons' },
        _react2.default.createElement(
          'span',
          { style: allLine ? { display: 'block', float: 'right' } : {} },
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', htmlType: 'submit', onClick: this.query, loading: this.state.data.get('loading') },
            '\u67E5\u8BE2'
          ),
          _react2.default.createElement(
            _button2.default,
            { style: { marginLeft: 8 }, onClick: this.reset },
            '\u91CD\u7F6E'
          ),
          noCollapse ? null : collapseButton
        )
      );

      return _react2.default.createElement(
        _col2.default,
        _extends({}, colSpan, { offset: allLine ? 24 - 24 / COLUMNS : 0 }),
        buttons
      );
    }
  }, {
    key: 'renderFormItems',
    value: function renderFormItems() {
      var _this3 = this;

      var fields = this.state.data.get('collapsed') ? this.props.fields[0] : [].concat(_toConsumableArray(this.props.fields[0]), _toConsumableArray(this.props.fields[1]));

      return fields.map(function (f) {
        return _react2.default.createElement(
          _col2.default,
          _extends({}, f.colSpan || colSpan, { key: f.id }),
          _this3.renderFormItem(f)
        );
      });
    }
  }, {
    key: 'renderFormItem',
    value: function renderFormItem(field) {
      var form = this.props.form;
      var getFieldDecorator = form.getFieldDecorator;


      var item = this.renderFormItemByType(field);

      return _react2.default.createElement(
        _form2.default.Item,
        {
          label: field.label,
          required: field.required

        },
        getFieldDecorator(field.id, {
          initialValue: field.defaultValue,
          onChange: field.onChange,
          rules: [{ required: field.required, message: '\u8BF7\u9009\u62E9' + field.label }]
        })(item)
      );
    }
  }, {
    key: 'renderFormItemByType',
    value: function renderFormItemByType(field) {
      if (field.render) {
        return field.render();
      }

      if (field.type === 'Select') {
        return this.renderFormItemSelect(field);
      }

      return this.renderFormItemInput(field);
    }
  }, {
    key: 'renderFormItemSelect',
    value: function renderFormItemSelect(field) {
      var select = _react2.default.createElement(
        _select2.default,
        { allowClear: !field.required, dropdownMatchSelectWidth: false, style: { width: '100%' } },
        field.options.map(function (op, opKey) {
          return _react2.default.createElement(
            Option,
            { key: opKey, value: op.value },
            op.label
          );
        })
      );

      return select;
    }
  }, {
    key: 'renderFormItemInput',
    value: function renderFormItemInput(field) {
      return _react2.default.createElement(_input2.default, { placeholder: field.placeholder, type: field.type });
    }
  }, {
    key: 'render',
    value: function render() {
      var fields = this.props.fields;

      if (!fields || fields.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'lb-query-table-fields' },
        _react2.default.createElement(
          _form2.default,
          { layout: 'inline' },
          _react2.default.createElement(
            _row2.default,
            { gutter: { md: 8, lg: 24, xl: 48 } },
            this.renderFormItems(),
            this.renderButtons()
          )
        )
      );
    }
  }]);

  return Fields;
}(_react.Component);

Fields.propTypes = {
  fields: _propTypes2.default.arrayOf(_propTypes2.default.array),
  form: _propTypes2.default.object.isRequired,
  query: _propTypes2.default.func.isRequired,
  loadOnMount: _propTypes2.default.bool,
  queryRegister: _propTypes2.default.func.isRequired
};

Fields.defaultProps = {
  fields: [],
  loadOnMount: true
};

exports.default = _form2.default.create()(Fields);