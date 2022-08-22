const set1 = new Set

set1.add(100);
set1.add('value');
set1.add({name:'John'});
set1.add(true);

// console.log(set1)

// check values //
// console.log(set1.has('value'))
// console.log(set1.has(50 + 50))

// delete from set //
set1.delete(true)
console.log(set1)

for(let item of set1) {
    console.log(item)
}

set1.forEach((value) => {
    console.log(value)
})

const setArray = Array.from(set1)
console.log(setArray)
