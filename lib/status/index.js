'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dot = require('../dot');

var _dot2 = _interopRequireDefault(_dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SUCCESS = ['started', 'normal', 'suc', 'success'];
var PROCESSING = ['send'];
var ERROR = ['failed'];

var Status = function Status(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === undefined ? '' : _ref$status;

  var type = '';
  if (SUCCESS.some(function (s) {
    return s === status.toLowerCase();
  })) {
    type = 'success';
  } else if (PROCESSING.some(function (p) {
    return p === status.toLowerCase();
  })) {
    type = 'processing';
  } else if (ERROR.some(function (e) {
    return e === status.toLowerCase();
  })) {
    type = 'error';
  }

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_dot2.default, { type: type }),
    _react2.default.createElement(
      'span',
      { style: { display: 'inline-block', marginLeft: '8px' } },
      status
    )
  );
};

Status.propTypes = {
  status: _propTypes2.default.string.isRequired
};

exports.default = Status;