'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('lbc-wrapper/lib/button');

var _button2 = _interopRequireDefault(_button);

var _popconfirm = require('lbc-wrapper/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _lbDebug = require('lb-debug');

var _lbDebug2 = _interopRequireDefault(_lbDebug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _lbDebug2.default)('lb-components:ActionButton');

var ActionButton = function (_Component) {
  _inherits(ActionButton, _Component);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    return _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).apply(this, arguments));
  }

  _createClass(ActionButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.label !== nextProps.label || this.props.butKey !== nextProps.butKey || (
      // if minSelect and maxSelect is 0, that means this button does not care what row is selected.
      nextProps.minSelect === 0 && nextProps.maxSelect === 0 ? false : this.props.selectedRowKeys !== nextProps.selectedRowKeys);
    }
  }, {
    key: 'render',
    value: function render() {
      debug('render');
      var _props = this.props,
          label = _props.label,
          icon = _props.icon,
          isPrimary = _props.isPrimary,
          action = _props.action,
          minSelect = _props.minSelect,
          maxSelect = _props.maxSelect,
          selectedRowKeys = _props.selectedRowKeys,
          selectedRows = _props.selectedRows,
          disableFunc = _props.disableFunc,
          confirm = _props.confirm,
          message = _props.message,
          selectedRowChange = _props.selectedRowChange;

      var disabled = false;
      if (disableFunc) {
        disabled = disableFunc(selectedRowKeys, selectedRows, selectedRowChange);
      } else {
        disabled = minSelect !== 0 && selectedRowKeys.length < minSelect;
        disabled = disabled || maxSelect !== 0 && selectedRowKeys.length > maxSelect;
      }

      var act = function act() {
        return action(selectedRowKeys, selectedRows);
      };
      return confirm ? _react2.default.createElement(
        _popconfirm2.default,
        { title: message, onConfirm: act },
        _react2.default.createElement(
          _button2.default,
          {
            type: isPrimary ? 'primary' : '',
            disabled: disabled,
            icon: icon
          },
          label
        )
      ) : _react2.default.createElement(
        _button2.default,
        {
          type: isPrimary ? 'primary' : '',
          onClick: act,
          disabled: disabled,
          icon: icon
        },
        label
      );
    }
  }]);

  return ActionButton;
}(_react.Component);

ActionButton.propTypes = {
  label: _propTypes2.default.string.isRequired,
  butKey: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string,
  isPrimary: _propTypes2.default.bool,
  action: _propTypes2.default.func,
  minSelect: _propTypes2.default.number,
  maxSelect: _propTypes2.default.number,
  confirm: _propTypes2.default.bool,
  selectedRowChange: _propTypes2.default.func
};

ActionButton.defaultProps = {
  minSelect: 0,
  maxSelect: 0,
  confirm: false
};

exports.default = ActionButton;