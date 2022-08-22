// Item Controller
export const ItemController = (function(){
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure
    const data = { 
        items: [
            // { id:0, name: 'Steak', calories: 1200 },
            // { id:1, name: 'Salad', calories: 700 },
            // { id:2, name: 'Rice', calories: 250 },
        ],
        currentItem: null,
        totalCalories: 0,
    }
    // Public method
    return {
        getItems: function(){
            return data.items;
        },

        addItem: function(name,calories){
            // create increment id
            let id;
            if (data.items.length > 0) {
                id = data.items[data.items.length - 1].id + 1
            } else {
                id = 1;
            }
            // calories to number
            calories = parseInt(calories)

            newItem = new Item(id, name, calories)

            data.items.push(newItem);

            return newItem;
        },

                getItemById: function (id) {
            let found = null;

            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found
        },

        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getEditItem: function() {
            return data.currentItem;
        },

        getTotalCalories: function(){
            let total = 0

            data.items.forEach(function(item) {
                total += item.calories;
            });
            
            data.totalCalories = total;

            return data.totalCalories;
        },

        logData: function(){
            return data;
        },
    }
})();