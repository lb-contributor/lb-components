'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _menu = require('lbc-wrapper/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _dropdown = require('lbc-wrapper/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('lbc-wrapper/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _popconfirm = require('lbc-wrapper/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Operation = function (_PureComponent) {
  _inherits(Operation, _PureComponent);

  function Operation(props) {
    _classCallCheck(this, Operation);

    var _this = _possibleConstructorReturn(this, (Operation.__proto__ || Object.getPrototypeOf(Operation)).call(this, props));

    _this.renderLink = _this.renderLink.bind(_this);
    _this.renderList = _this.renderList.bind(_this);
    _this.renderMenu = _this.renderMenu.bind(_this);
    return _this;
  }

  _createClass(Operation, [{
    key: 'renderLink',
    value: function renderLink(item, key) {
      var _this2 = this;

      var disabled = item.disabled;

      if (disabled !== undefined && typeof disabled === 'function') {
        disabled = disabled(this.props.cellData, this.props.rowData);
      }

      var handler = function handler() {
        item.handler(_this2.props.cellData, _this2.props.rowData);
      };

      if (item.confirm) {
        return _react2.default.createElement(
          _popconfirm2.default,
          { title: item.message, onConfirm: handler, key: key },
          _react2.default.createElement(
            'a',
            { key: key, href: 'javascript:;' },
            item.label
          )
        );
      }

      return _react2.default.createElement(
        'a',
        { key: key, href: 'javascript:;', onClick: handler },
        item.label
      );
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      var _this3 = this;

      var result = this.list.map(function (op, index) {
        return _this3.renderLink(op, index);
      });
      return result;
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this4 = this;

      if (this.props.list.length === 0) {
        return null;
      }

      var first = this.renderLink(this.props.list[0], 0);
      if (this.props.list.length === 1) {
        return [first];
      }

      var otherOps = this.props.list.slice(1);

      var menu = _react2.default.createElement(
        _menu2.default,
        null,
        otherOps.map(function (op, index) {
          return _react2.default.createElement(
            _menu2.default.Item,
            { key: 'item' + index },
            _this4.renderLink(op, index)
          );
        })
      );
      var second = _react2.default.createElement(
        _dropdown2.default,
        { overlay: menu, trigger: ['click'], key: 'dropdown' },
        _react2.default.createElement(
          'a',
          { className: 'ant-dropdown-link', href: 'javascript:;', key: 'more' },
          '\u66F4\u591A ',
          _react2.default.createElement(_icon2.default, { type: 'down' })
        )
      );

      return [first, second];
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.props.type === 'list' ? this.renderList() : this.renderMenu();
      items = items.reduce(function (newop, item, index) {
        if (item) {
          if (index > 0) {
            newop.push(_react2.default.createElement(
              'span',
              { key: 'divisor' + index },
              ' | '
            ));
          }
          newop.push(item);
        }
        return newop;
      }, []);

      return _react2.default.createElement(
        'span',
        null,
        items
      );
    }
  }]);

  return Operation;
}(_react.PureComponent);

Operation.propTypes = {
  list: _propTypes2.default.array.isRequired,
  type: _propTypes2.default.string.isRequired,
  rowData: _propTypes2.default.object,
  cellData: _propTypes2.default.any
};

Operation.defaultProps = {
  rowData: {},
  cellData: ''
};

exports.default = Operation;