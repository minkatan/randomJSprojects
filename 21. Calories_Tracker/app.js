// Storage Controller
const StorageController = (function(){
    // public method
    return {
        storeItem: function(item){
            let items;
            
            if (localStorage.getItem('Items') === null) {
                items = [];
                // push and store in LS
                items.push(item);
                localStorage.setItem('Items', JSON.stringify(items))
            } else {
                // if there's item in the array, parse into array.
                items = JSON.parse(localStorage.getItem('Items'))
                // push and store in LS
                items.push(item);
                localStorage.setItem('Items', JSON.stringify(items))
            }   
        },
        getItemFromLocalStorage: function(){
            let items;
            if(localStorage.getItem('Items') === null){
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('Items'));
            }
            return items;
        },
        deleteItemFromLocalStorage: function(id){
            let items = JSON.parse(localStorage.getItem('Items'));

            items.forEach(function(item,index){
                if(id === item.id){
                    items.splice(index, 1);
                }
            })
            localStorage.setItem('Items', JSON.stringify(items))
        },
        updateItemLocalStorage: function(updatedItem){
            let items = JSON.parse(localStorage.getItem('Items'));

            items.forEach(function(item,index){
                if(updatedItem.id === item.id){
                    items.splice(index, 1, updatedItem);
                }
            })
            localStorage.setItem('Items', JSON.stringify(items))
        },
        clearLocalStorage: function(){
            localStorage.removeItem('Items');
        }
    }
})();


// Item Controller
const ItemController = (function(){
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure
    const data = { 
        items: StorageController.getItemFromLocalStorage(),
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

        updateItem: function(name, calories){
            calories = parseInt(calories);

            let found = null;
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item
                }
            });
            return found;
        },

        deleteItem: function(id){
            // get id
            ids = data.items.map(function(item){
                return item.id
            })

            // get index
            const index = ids.indexOf(id);

            // remove item
            data.items.splice(index, 1);
        },

        clearAllItems: function(){
            data.items = []
        },
        
        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getCurrentItem: function(){
            return data.currentItem;
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

// UI Controller
const UIController = (function(){
    const uiSelector = {
        itemList: 'item-list',
        ListItems: '#item-list li',
        addMeal: 'add-meal',
        update: 'update-meal',
        delete: 'delete-meal',
        back: 'back-btn',
        itemMeal: 'item-meal',
        itemCalories: 'item-calories',
        totalCalories: 'total-calories',
        clearAll: 'clear-all'
    }
    
    // Public Methods
    return {
        populateItemList: function(items){
            let html ='';
            
            items.forEach(function(item) {
                html += `
                <li class="flex flex-row justify-between mx-8 mb-2 pb-2 border-b-2" id="item-${item.id}">
                    <p>
                        <strong>${item.name} : </strong>${item.calories} Calories
                    </p>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 edit-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </a>
                </li>
                `
            });
            const list = document.getElementById(uiSelector.itemList)
            list.innerHTML = html;
        },

        getItemsInput: function(){
            return {
                name: document.getElementById(uiSelector.itemMeal).value,
                calories: document.getElementById(uiSelector.itemCalories).value,
            }
        },
        
        addItemToList: function(item){
            // show list
            document.getElementById(uiSelector.itemList).className = 'bg-slate-100 p-4 rounded'
            // create li element
            const li = document.createElement('li');
            li.className = 'flex flex-row justify-between mx-8 mb-2 pb-2 border-b-2'
            li.id = `item-${item.id}`
            li.innerHTML = `                   
                <p>
                    <strong>${item.name} : </strong>${item.calories} Calories
                </p>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 edit-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </a>
            `;
            document.getElementById(uiSelector.itemList).insertAdjacentElement('beforeend', li)
        },

        updateItemToList: function(item){
            let listItems = document.querySelectorAll(uiSelector.ListItems);

            listItems = Array.from(listItems)
            listItems.forEach(function(listitem){
                const itemId = listitem.getAttribute('id');

                if(itemId === `item-${item.id}`){
                    document.getElementById(itemId).innerHTML = `
                    <p>
                        <strong>${item.name} : </strong>${item.calories} Calories
                    </p>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 edit-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    </a>
                    `
                }
            });
        },

        deleteItemFromList: function(id){
            const itemId = `item-${id}`;
            const item = document.getElementById(itemId);
            item.remove();
        },

        clearItemFromList: function(){
            let listItems = document.querySelectorAll(uiSelector.ListItems);

            listItems = Array.from(listItems);

            listItems.forEach(function(item){
                item.remove();
            })
        },

        addItemToForm: function(){
            document.getElementById(uiSelector.itemMeal).value = ItemController.getEditItem().name;
            document.getElementById(uiSelector.itemCalories).value = ItemController.getEditItem().calories;
            UIController.showEditState();
        },

        showTotalCalories: function(total){
            document.getElementById(uiSelector.totalCalories).innerHTML = `
            Total Calories : ${total}
            `;
        },

        clearInput: function(){
            document.getElementById(uiSelector.itemMeal).value = '';
            document.getElementById(uiSelector.itemCalories).value = '';
        },

        clearEditState: function() {
            UIController.clearInput();
            document.getElementById(uiSelector.update).className = 'hidden';
            document.getElementById(uiSelector.delete).className = 'hidden';
            document.getElementById(uiSelector.back).className = 'hidden';
            document.getElementById(uiSelector.addMeal).className = 'bg-cyan-500 text-blue-900 p-2 text-center rounded shadow shadow-cyan-900 lg:w-1/4 flex flex-row';
        },

        showEditState: function() {
            document.getElementById(uiSelector.update).className = 'bg-green-200 text-blue-900 p-2 text-center rounded shadow shadow-green-900 lg:w-1/4 flex flex-row';
            document.getElementById(uiSelector.delete).className = 'bg-red-800 text-white p-2 text-center rounded shadow shadow-amber-300 lg:w-1/4 flex flex-row';
            document.getElementById(uiSelector.back).className = 'bg-gray-600 text-white p-2 text-center rounded shadow shadow-cyan-900 lg:w-1/4 flex flex-row';
            document.getElementById(uiSelector.addMeal).className = 'hidden';
        },

        getSelector: function(){
            return uiSelector;
        },

        hideList: function(){
            document.getElementById(uiSelector.itemList).className = 'hidden'
        },
    }
})();


// App Controller
const App = (function(ItemController, UIController, StorageController){
    // load event listeners
    const loadEventListener = function() {
        // get ui selector
        const uiSelector = UIController.getSelector();
        // add item event
        document.getElementById(uiSelector.addMeal).addEventListener('click', itemAddSubmit);
        // edit icon click event. access using parent
        document.getElementById(uiSelector.itemList).addEventListener('click', itemEdit)
        // update icon click event
        document.getElementById(uiSelector.update).addEventListener('click', itemUpdate)
        // delete icon click event
        document.getElementById(uiSelector.delete).addEventListener('click', itemDelete)
        // delete icon click event
        document.getElementById(uiSelector.clearAll).addEventListener('click', clearAllItemsBtn)
        // back button event
        document.getElementById(uiSelector.back).addEventListener('click', function(e){
            e.preventDefault();
            UIController.clearEditState();
        })
        // disable enter key on submit
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13 ){
                e.preventDefault()
                return false
            }
        });
        
    }

    // add item
    const itemAddSubmit = function(e){
        e.preventDefault()

        const input = UIController.getItemsInput()

        // validation
        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemController.addItem(input.name, input.calories) 
            
            UIController.addItemToList(newItem);
            // add total calories
            const totalCalories = ItemController.getTotalCalories();
            UIController.showTotalCalories(totalCalories);
            // store to SL
            StorageController.storeItem(newItem);
            // reset input
            UIController.clearInput();
        }  
    }

    // edit item
    const itemEdit = function(e) {
        e.preventDefault()

        if(e.target.classList.contains('edit-btn')){
            const listId = e.target.parentNode.parentNode.id;
            // split into array for id, get the actual id
            const idArray = listId.split('-');
            const id = parseInt(idArray[1]);
            // get item
            const itemToEdit = ItemController.getItemById(id)
            // set current item
            ItemController.setCurrentItem(itemToEdit);
            // add item to form
            UIController.addItemToForm();
        }
    }

    // update item
    const itemUpdate = function(e){
        e.preventDefault();

        const input = UIController.getItemsInput()
        const updatedItem = ItemController.updateItem(input.name, input.calories)

        // update ui
        UIController.updateItemToList(updatedItem);

        // update calories
        const totalCalories = ItemController.getTotalCalories();
        UIController.showTotalCalories(totalCalories);
        // update local storage
        StorageController.updateItemLocalStorage(updatedItem);
        // reset
        UIController.clearEditState();
    }

    const clearAllItemsBtn = function() {
        ItemController.clearAllItems();

        // update calories
        const totalCalories = ItemController.getTotalCalories();
        UIController.showTotalCalories(totalCalories);
        // clear in UI and Local Storage
        UIController.clearItemFromList();
        StorageController.clearLocalStorage();
        UIController.hideList();
    }

    // delete item
    const itemDelete = function(e){
        e.preventDefault()

        const currentItem = ItemController.getCurrentItem()

        // delete from data structure
        ItemController.deleteItem(currentItem.id);

        UIController.deleteItemFromList(currentItem.id)

        const totalCalories = ItemController.getTotalCalories();
        UIController.showTotalCalories(totalCalories);
        // delete from local storage
        StorageController.deleteItemFromLocalStorage(currentItem.id);
        // reset
        UIController.clearEditState();
    }
    
    // Public method
    return {
        init: function(){
            // set initial state
            UIController.clearEditState();

            const items = ItemController.getItems();

            //hide list background
            if(items.length === 0){
                UIController.hideList();
            }else {
                // update list
                UIController.populateItemList(items);
            }

            // add total calories
            const totalCalories = ItemController.getTotalCalories();
            UIController.showTotalCalories(totalCalories);

            // load event listener
            loadEventListener();
        }
    }
    
})(ItemController,UIController,StorageController);


App.init();
