const Immutable = require('immutable')

const { Map, is, fromJS } = Immutable

function func() {
  console.log('hello')
}

const a = Map({
  foo: 'bar',
  obj: {
    foo: 'boo',
  },
})

const aa = a

a.get('obj').foo = 'eee'

const b = Map({
  foo: 'bar',
  obj: {
    foo: 'boo',
  },
})

const c = fromJS({
  foo: 'bar',
  obj: {
    foo: 'boo',
  },
  func,
})
const d = fromJS({
  foo: 'bar',
  obj: {
    foo: 'boo',
  },
  func,
})

const arr = fromJS([
  {
    a: 'a'
  },
  {
    b: 'b'
  }
])



console.log(a.get('foo'))
console.log(aa.get('obj').foo)
console.log(is(a, b))
console.log(a.equals(b))
console.log(is(c, d))
