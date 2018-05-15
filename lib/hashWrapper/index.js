'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popover = require('lbc-wrapper/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _icon = require('lbc-wrapper/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message = require('lbc-wrapper/lib/message');

var _message2 = _interopRequireDefault(_message);

var _clipboard = require('clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HashWrapper = function (_PureComponent) {
  _inherits(HashWrapper, _PureComponent);

  function HashWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HashWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HashWrapper.__proto__ || Object.getPrototypeOf(HashWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.registerClipboard = function () {
      _message2.default.config({
        duration: 1
      });

      _this.clipboard = new _clipboard2.default(_this.button, {
        text: function text() {
          return _this.props.value;
        }
      });

      _this.clipboard.on('success', function (e) {
        _message2.default.success('copied');
        e.clearSelection();
      });

      _this.clipboard.on('error', function (e) {
        console.error(e);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HashWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          showCopy = _props.showCopy,
          value = _props.value;

      if (!value || !showCopy) {
        return;
      }

      this.registerClipboard();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.value && this.props.showCopy && this.button && !this.clipboard) {
        this.registerClipboard();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.clipboard) {
        this.clipboard.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          value = _props2.value,
          prefix = _props2.prefix,
          surfix = _props2.surfix,
          showAll = _props2.showAll,
          showCopy = _props2.showCopy,
          showPropover = _props2.showPropover;


      if (!value) {
        return _react2.default.createElement('div', null);
      }

      var all = value.length <= prefix + surfix || showAll;
      return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block' } },
        all ? _react2.default.createElement(
          'span',
          null,
          value
        ) : !showPropover ? _react2.default.createElement(
          'span',
          null,
          value.substr(0, prefix) + '...' + value.substr(0 - surfix)
        ) : _react2.default.createElement(
          _popover2.default,
          { content: value },
          _react2.default.createElement(
            'span',
            null,
            value.substr(0, prefix) + '...' + value.substr(0 - surfix)
          )
        ),
        !showCopy ? null : _react2.default.createElement(
          'span',
          { style: { cursor: 'pointer' }, ref: function ref(t) {
              _this2.button = t;
            } },
          _react2.default.createElement(_icon2.default, { type: 'copy' })
        )
      );
    }
  }]);

  return HashWrapper;
}(_react.PureComponent);

HashWrapper.propTypes = {
  value: _propTypes2.default.string,
  prefix: _propTypes2.default.number,
  surfix: _propTypes2.default.number,
  showAll: _propTypes2.default.bool,
  showCopy: _propTypes2.default.bool,
  showPropover: _propTypes2.default.bool
};

HashWrapper.defaultProps = {
  prefix: 20,
  surfix: 20,
  showAll: false,
  showCopy: true,
  showPropover: true,
  value: ''
};

exports.default = HashWrapper;