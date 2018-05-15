'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _table = require('lbc-wrapper/lib/table');

var _table2 = _interopRequireDefault(_table);

var _EditableCell = require('./EditableCell');

var _EditableCell2 = _interopRequireDefault(_EditableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableTable = function (_Component) {
  _inherits(EditableTable, _Component);

  function EditableTable(props) {
    _classCallCheck(this, EditableTable);

    var _this = _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, props));

    _this.onCellChange = _this.onCellChange.bind(_this);
    return _this;
  }

  _createClass(EditableTable, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      // return this.props.
    }
  }, {
    key: 'onCellChange',
    value: function onCellChange(key, dataIndex) {
      var _this2 = this;

      return function (value) {
        var dataSource = [].concat(_toConsumableArray(_this2.state.dataSource));
        var target = dataSource.find(function (item) {
          return item.key === key;
        });
        if (target) {
          target[dataIndex] = value;
          _this2.setState({ dataSource: dataSource });
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          columns = _props.columns,
          props = _objectWithoutProperties(_props, ['data', 'columns']);

      return _react2.default.createElement(_table2.default, {
        bordered: true,
        size: 'small',
        columns: columns,
        dataSource: data.toJS()
      });
    }
  }]);

  return EditableTable;
}(_react.Component);

EditableTable.propTypes = {
  data: _propTypes2.default.array
};

exports.default = EditableTable;