const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(msg, receiver) {
        this.chatroom.send(msg, this, receiver)
    },
    receive: function(msg, from) {
        console.log(`${from.name} to ${this.name}: ${msg}`)
    }
}

const Chatroom = function(){
    let users = {}

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(msg, from, receiver){
            if(receiver) {
                receiver.receive(msg,from)
            } else {
                for(key in users) {
                    if(users[key] !== from){
                        users[key].receive(msg, from)
                    }
                }
            }
        }
    }
}

const minka = new User('minka')
const minka1 = new User('minka1')
const minka2 = new User('minka2')
const minka3 = new User('minka3')

const chatroom = new Chatroom();

chatroom.register(minka)
chatroom.register(minka1)
chatroom.register(minka2)
chatroom.register(minka3)

minka1.send('Hell idiot', minka2);
minka3.send('Hell idiot', minka1);