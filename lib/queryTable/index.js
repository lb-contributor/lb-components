'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FieldsWrapper = require('./FieldsWrapper');

var _FieldsWrapper2 = _interopRequireDefault(_FieldsWrapper);

var _TableWrapper = require('../table/TableWrapper');

var _TableWrapper2 = _interopRequireDefault(_TableWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QueryTable = function (_Component) {
  _inherits(QueryTable, _Component);

  function QueryTable(props) {
    _classCallCheck(this, QueryTable);

    var _this = _possibleConstructorReturn(this, (QueryTable.__proto__ || Object.getPrototypeOf(QueryTable)).call(this, props));

    _this.fieldsQueryRegister = _this.fieldsQueryRegister.bind(_this);
    _this.query = _this.query.bind(_this);
    _this.refresh = _this.refresh.bind(_this);
    return _this;
  }

  _createClass(QueryTable, [{
    key: 'refresh',
    value: function refresh() {
      this.query({});
    }
  }, {
    key: 'query',
    value: function query(dataToBeSent) {
      return this.props.query(dataToBeSent);
    }
  }, {
    key: 'fieldsQueryRegister',
    value: function fieldsQueryRegister(func) {
      this.queryCallback = func;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          fields = _props.fields,
          query = _props.query,
          loadOnMount = _props.loadOnMount,
          props = _objectWithoutProperties(_props, ['fields', 'query', 'loadOnMount']);

      return _react2.default.createElement(
        'div',
        null,
        !fields || fields.length === 0 ? null : _react2.default.createElement(_FieldsWrapper2.default, { fields: fields, query: this.query, queryRegister: this.fieldsQueryRegister, loadOnMount: loadOnMount }),
        _react2.default.createElement(_TableWrapper2.default, props)
      );
    }
  }]);

  return QueryTable;
}(_react.Component);

QueryTable.propTypes = {
  query: _propTypes2.default.func,
  loadOnMount: _propTypes2.default.bool
};

QueryTable.defaultProps = {
  rowSelection: 'checkbox',
  loadOnMount: true
};

exports.default = QueryTable;