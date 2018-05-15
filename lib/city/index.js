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

var _cascader = require('lbc-wrapper/lib/cascader');

var _cascader2 = _interopRequireDefault(_cascader);

var _compare = require('../utils/compare');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var City = function (_Component) {
  _inherits(City, _Component);

  function City(props) {
    _classCallCheck(this, City);

    var _this = _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).call(this, props));

    _this.state = {
      options: []
    };

    _this.loadOptions = _this.loadOptions.bind(_this);
    return _this;
  }

  _createClass(City, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadOptions();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _compare.formBaseCompare)(this.props, nextProps) || this.state.options !== nextState.options;
    }
  }, {
    key: 'loadOptions',
    value: function loadOptions() {
      var _this2 = this;

      var loader = this.props.loader || this.loader;

      loader.call(this).then(function (options) {
        _this2.setState({
          options: options
        });
      });
    }
  }, {
    key: 'loader',
    value: function loader() {
      return import('./cities.json');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          props = _props.props;

      return _react2.default.createElement(_cascader2.default, _extends({
        options: this.state.options,
        style: { width: '95%' }
      }, props, {
        placeholder: '\u8BF7\u9009\u62E9\u5730\u533A'
      }));
    }
  }]);

  return City;
}(_react.Component);

City.propTypes = {
  loader: _propTypes2.default.func,
  value: _propTypes2.default.arrayOf(_propTypes2.default.string),
  disabled: _propTypes2.default.bool
};

exports.default = City;