'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LBTable = require('./LBTable');

var _LBTable2 = _interopRequireDefault(_LBTable);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableWrapper = function (_Component) {
  _inherits(TableWrapper, _Component);

  function TableWrapper(props) {
    _classCallCheck(this, TableWrapper);

    var _this = _possibleConstructorReturn(this, (TableWrapper.__proto__ || Object.getPrototypeOf(TableWrapper)).call(this, props));

    _this.selectedRowChange = _this.selectedRowChange.bind(_this);

    _this.state = {
      selectedRowKeys: [],
      selectedRows: []
    };
    return _this;
  }

  _createClass(TableWrapper, [{
    key: 'selectedRowChange',
    value: function selectedRowChange(selectedRowKeys, selectedRows) {
      this.setState({
        selectedRowKeys: [].concat(_toConsumableArray(selectedRowKeys)),
        selectedRows: [].concat(_toConsumableArray(selectedRows))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('----render TableWrapper----');

      var _props = this.props,
          actions = _props.actions,
          props = _objectWithoutProperties(_props, ['actions']);

      var _state = this.state,
          selectedRowKeys = _state.selectedRowKeys,
          selectedRows = _state.selectedRows;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Actions2.default, { actions: actions, selectedRowKeys: selectedRowKeys, selectedRows: selectedRows, selectedRowChange: this.selectedRowChange }),
        _react2.default.createElement(_LBTable2.default, _extends({}, props, { selectedRowKeys: selectedRowKeys, selectedRowChange: this.selectedRowChange }))
      );
    }
  }]);

  return TableWrapper;
}(_react.Component);

exports.default = TableWrapper;