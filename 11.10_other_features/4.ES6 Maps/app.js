const map1 = new Map()

const 
key1 = 'some string',
key2 = {},
key3 = function sayHello(){
    console.log('Hello')
}


map1.set(key1, 'value of key1')
map1.set(key2, 'value of key2')
map1.set(key3, 'value of key3')

// console.log(map1.get(key1), map1.get(key2), map1.get(key3))
// console.log(map1.size)

// iterating maps
for(let [key, value] of map1) {
    // console.log(`${key} = ${value}`)
}

// iterating keys only
for(let key of map1.keys()) {
    // console.log(key)
}

// iterating keys only
for(let value of map1.values()) {
    // console.log(value)
}

// for each
map1.forEach(function(value,key){
    // console.log(`${key} = ${value}`)
})

// create an array
const keyArray = Array.from(map1)
// console.log(keyArray)

const valueArray = Array.from(map1.values());
// console.log(valueArray)


// 