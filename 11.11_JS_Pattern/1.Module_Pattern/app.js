// (function() {
    
//     return {

//     }
// }) ();

// ///Standard Module///
const UIcontroller = (function(){
    let text = 'Hello World';

    // can't access function inside the controller
    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text
    }

    return {
        // need access here
        callChangeText: function(){
            changeText()
        }
    }
})();

// UIcontroller.callChangeText()

// Revealing Module Pattern
const ItemController = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item added')
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;

        })
    }
    return {
        add: add,
        get: get,
    }
})();

ItemController.add({ id: 1, name: 'John'});
console.log(ItemController.get(1));