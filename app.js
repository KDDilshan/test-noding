const _ =require('lodash')
const items=[1,[2,[3,[4]]]]
const newItms=_.flattenDeep(items)
console.log(newItms)