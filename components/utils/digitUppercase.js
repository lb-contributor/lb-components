// 向右移位
function shiftRight(number, d) {
  let digit = d
  digit = parseInt(digit, 10)
  const value = number.toString().split('e')
  return +(value[0] + 'e' + ( value[1] ? (+ value[1] + digit) : digit))
}
// 向左移位
function shiftLeft(number, d) {
  let digit = d
  digit = parseInt(digit, 10)
  const value = number.toString().split('e')
  return +(value[0] + 'e' + (value[1] ? (+ value[1] - digit) : -digit))
}

function digitUppercase(_n) {
  let n = _n
  const fraction = ['角', '分']
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ]
  const head = n < 0 ? '欠' : ''
  n = Math.abs(n)
  let s = ''
  for (let i = 0; i < fraction.length; i += 1) {
    s += (digit[Math.floor(shiftRight(n, 1 + i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (let i = 0; i < unit[0].length && n > 0; i += 1) {
    let p = ''
    for (let j = 0; j < unit[1].length && n > 0; j += 1) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(shiftLeft(n, 1))
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
}

export default digitUppercase
