// Iterator

function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ? {value: names[nextIndex++], done: false}:
            {done:true}
        }
    }
}

const namesArray = ['Jack', 'Jill', 'John'];

const names = nameIterator(namesArray);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);



// Generator
function* sayNames(){
    yield 'Jack'
    yield 'Jill'
    yield 'John'
}

const name = sayNames();
// console.log(name.next())
// console.log(name.next())
// console.log(name.next())
// console.log(name.next())

// generate ID
function* createIDs() {
    let index = 4433;

    while(true) {
        yield index++
    }
}

const generate = createIDs();

console.log(generate.next());
console.log(generate.next());
console.log(generate.next());