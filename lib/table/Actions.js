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

var _compare = require('../utils/compare');

require('./style');

var _ActionButton = require('./ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actions = function (_Component) {
  _inherits(Actions, _Component);

  function Actions() {
    _classCallCheck(this, Actions);

    return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
  }

  _createClass(Actions, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _compare.shallowCompareArr)(this.props.actions, nextProps.actions) || this.props.selectedRowKeys !== nextProps.selectedRowKeys;
    }
  }, {
    key: 'renderButton',
    value: function renderButton(butt) {
      var _props = this.props,
          selectedRowKeys = _props.selectedRowKeys,
          selectedRows = _props.selectedRows;
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('----render Actions----');
      var _props2 = this.props,
          actions = _props2.actions,
          position = _props2.position,
          selectedRowKeys = _props2.selectedRowKeys,
          selectedRows = _props2.selectedRows,
          selectedRowChange = _props2.selectedRowChange;

      if (!actions || actions.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'lb-query-table-actions' },
        _react2.default.createElement(
          'span',
          { className: position },
          actions.map(function (b, i) {
            return _react2.default.createElement(_ActionButton2.default, _extends({
              isPrimary: i === 0
            }, b, {
              key: b.key,
              selectedRows: selectedRows,
              selectedRowKeys: selectedRowKeys,
              selectedRowChange: selectedRowChange
            }));
          })
        )
      );
    }
  }]);

  return Actions;
}(_react.Component);

Actions.propTypes = {
  actions: _propTypes2.default.array.isRequired,
  position: _propTypes2.default.oneOf(['left', 'right']),
  selectedRowChange: _propTypes2.default.func
};

Actions.defaultProps = {
  position: 'left'
};

exports.default = Actions;