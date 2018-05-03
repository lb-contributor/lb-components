function shallowDiffers (a, b) {
  for (let i in a) if (!(i in b)) return true
  for (let i in b) if (a[i] !== b[i]) return true
  return false
}

/**
 * return TRUE if curr is EQUAL with next
 */
export function shallowCompareObj(curr, next) {
  if (curr === next) {
    return true
  }

  if (curr != null && next != null) {
    return !shallowDiffers(curr, next)
  }

  return true
}

export function shallowCompareArr(curr, next) {
  if (curr === next) {
    return true
  }

  if (curr != null && next != null) {
    if (curr.length !== next.length) {
      return false
    }

    return curr.every((c, i) => {
      if (typeof c === 'object' && typeof next[i] === 'object') {
        return !shallowDiffers(c, next[i])
      }

      return c === next[i]
    })
  }

  return curr == next
}

export function formBaseCompare(thisProps, nextProps) {
  return (thisProps.disabled === nextProps.disabled) &&
    thisProps.checked === nextProps.checked &&
    (Array.isArray(thisProps.value) && Array.isArray(nextProps.value) ? shallowCompareArr(thisProps.value, nextProps.value) : thisProps.value === nextProps.value)
}
