// UI Controller
const UIController = (function(){
    const uiSelector = {
        itemList: 'item-list',
        addMeal: 'add-meal',
        update: 'update-meal',
        delete: 'delete-meal',
        back: 'back-btn',
        itemMeal: 'item-meal',
        itemCalories: 'item-calories',
        totalCalories: 'total-calories'
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
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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

