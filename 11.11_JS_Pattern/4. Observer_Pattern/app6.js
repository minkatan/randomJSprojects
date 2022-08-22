class EventObserver {
    constructor() {
        this.observer = [];
    }

    subscribe(fn) {
        this.observer.push(fn);
        console.log(`you are now subscribe to ${fn.name} `)
    }

    unsubscribe(fn) {
        this.observer = this.observer.filter(function(item){
            if(item !== fn){
                return item;
            }
        })
        console.log(`You are now unsubscribe from ${fn.name}`)
    }

    start() {
        this.observer.forEach(function(item){
            item.call()
        });
    }
}

const click = new EventObserver();

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
    console.log(`current milliseconds: ${new Date().getTime()/(1000*60*60*24)}`);
}