'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dot = function Dot(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'success' : _ref$type;
  return _react2.default.createElement('span', { className: 'lo-status-dot lo-status-dot-' + type });
};
Dot.propTypes = {
  type: _propTypes2.default.string.isRequired
};

exports.default = Dot;