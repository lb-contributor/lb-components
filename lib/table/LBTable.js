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

var _lbDebug = require('lb-debug');

var _lbDebug2 = _interopRequireDefault(_lbDebug);

var _table = require('lbc-wrapper/lib/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _lbDebug2.default)('lb-components:LBTable');

var LBTable = function (_Component) {
  _inherits(LBTable, _Component);

  function LBTable(props) {
    _classCallCheck(this, LBTable);

    var _this = _possibleConstructorReturn(this, (LBTable.__proto__ || Object.getPrototypeOf(LBTable)).call(this, props));

    _this.rowSelection = props.rowSelection ? { type: props.rowSelection, onChange: _this.props.selectedRowChange } : null;
    return _this;
  }

  _createClass(LBTable, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      // if forceRender, will not compare props
      return nextProps.forceRender || this.props.data !== nextProps.data || this.props.selectedRowKeys !== nextProps.selectedRowKeys;
    }
  }, {
    key: 'render',
    value: function render() {
      debug('render');

      var _props = this.props,
          columns = _props.columns,
          data = _props.data,
          rowSelection = _props.rowSelection,
          selectedRowKeys = _props.selectedRowKeys,
          props = _objectWithoutProperties(_props, ['columns', 'data', 'rowSelection', 'selectedRowKeys']);

      return _react2.default.createElement(_table2.default, _extends({
        bordered: true,
        size: 'small',
        rowSelection: this.rowSelection ? Object.assign({}, this.rowSelection, { selectedRowKeys: selectedRowKeys }) : this.rowSelection,
        columns: columns,
        dataSource: data
      }, props));
    }
  }]);

  return LBTable;
}(_react.Component);

LBTable.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  data: _propTypes2.default.array,
  rowSelection: _propTypes2.default.oneOf([null, 'checkbox', 'radio']),
  selectedRowChange: _propTypes2.default.func,
  selectedRowKeys: _propTypes2.default.array
};

LBTable.defaultProps = {
  rowSelection: null,
  data: []
};

exports.default = LBTable;