'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shallowCompareObj = shallowCompareObj;
exports.shallowCompareArr = shallowCompareArr;
exports.formBaseCompare = formBaseCompare;
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/**
 * return TRUE if curr is EQUAL with next
 */
function shallowCompareObj(curr, next) {
  if (curr === next) {
    return true;
  }

  if (curr != null && next != null) {
    return !shallowDiffers(curr, next);
  }

  return true;
}

function shallowCompareArr(curr, next) {
  if (curr === next) {
    return true;
  }

  if (curr != null && next != null) {
    if (curr.length !== next.length) {
      return false;
    }

    return curr.every(function (c, i) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(next[i]) === 'object') {
        return !shallowDiffers(c, next[i]);
      }

      return c === next[i];
    });
  }

  return curr == next;
}

function formBaseCompare(thisProps, nextProps) {
  return thisProps.disabled === nextProps.disabled && thisProps.checked === nextProps.checked && (Array.isArray(thisProps.value) && Array.isArray(nextProps.value) ? shallowCompareArr(thisProps.value, nextProps.value) : thisProps.value === nextProps.value);
}