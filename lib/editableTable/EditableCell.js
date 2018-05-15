'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableCell = function (_Component) {
  _inherits(EditableCell, _Component);

  _createClass(EditableCell, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var changed = false;
      var newState = {};
      if (nextProps.value !== prevState.value) {
        newState.value = nextProps.value;
        changed = true;
      }

      if (nextProps.editable !== prevState.editable) {
        newState.editable = nextProps.editable;
        changed = true;
      }

      return changed ? newState : null;
    }
  }]);

  function EditableCell(props) {
    _classCallCheck(this, EditableCell);

    var _this = _possibleConstructorReturn(this, (EditableCell.__proto__ || Object.getPrototypeOf(EditableCell)).call(this, props));

    _this.handleChange = function (e) {
      var value = e.target.value;
      _this.setState({ value: value });
    };

    _this.check = function () {
      _this.setState({ editable: false });
      if (_this.props.onChange) {
        _this.props.onChange(_this.state.value);
      }
    };

    _this.edit = function () {
      _this.setState({ editable: true });
    };

    _this.state = {
      value: props.value,
      editable: props.editable
    };
    return _this;
  }

  _createClass(EditableCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.value !== this.state.value || nextState.editable !== this.state.editable;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          editable = _state.editable;

      return _react2.default.createElement(
        'div',
        { className: 'editable-cell' },
        editable ? _react2.default.createElement(
          'div',
          { className: 'editable-cell-input-wrapper' },
          _react2.default.createElement(_antd.Input, {
            value: value,
            onChange: this.handleChange,
            onPressEnter: this.check
          }),
          _react2.default.createElement(_antd.Icon, {
            type: 'check',
            className: 'editable-cell-icon-check',
            onClick: this.check
          })
        ) : _react2.default.createElement(
          'div',
          { className: 'editable-cell-text-wrapper' },
          value || ' ',
          _react2.default.createElement(_antd.Icon, {
            type: 'edit',
            className: 'editable-cell-icon',
            onClick: this.edit
          })
        )
      );
    }
  }]);

  return EditableCell;
}(_react.Component);

EditableCell.propTypes = {
  value: _propTypes2.default.string,
  editable: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};

EditableCell.defaultProps = {
  value: '',
  editable: false
};

exports.default = EditableCell;