function eventObserver() {
    this.observer = [];
}

eventObserver.prototype = {
    subscribe: function(fn) {
        this.observer.push(fn);
        console.log(`you are now subscribe to ${fn.name} `)
    },
    unsubscribe: function(fn) {
        // filter from the list whatwver matches the callback, if there's no matach, callback push onto the list. Filter returne a new list
        this.observer = this.observer.filter(function(item){
            if(item !== fn){
                return item;
            }
        })
        console.log(`You are now unsubscribe from ${fn.name}`)
    },
    start: function() {
        this.observer.forEach(function(item){
            item.call()
        });
    }
}

const click = new eventObserver();

document.getElementById('sub-ms').addEventListener('click', function(){
        click.subscribe(getCurrentMs);
    });

document.getElementById('unsub-ms').addEventListener('click', function(){
        click.unsubscribe(getCurrentMs);
    });

document.getElementById('start').addEventListener('click', function(){
        click.start();
    });

// click handler
const getCurrentMs = function(){
    console.log(`current milliseconds: ${new Date().getMilliseconds()}`);
}