const PageState = function() {
    let currentState = new homeState(this);

    this.start = function() {
        this.change(new homeState)
    }

    this.change = function(state) {
        currentState = state;
    }
};

// home state

const homeState = function(page) {
    document.getElementById('heading').textContent = null
    document.getElementById('content').innerHTML = `
        <p>Home page</p>
    
    `;
}

// about state
const aboutState = function(page) {
    document.getElementById('heading').textContent = 'About US';
    document.getElementById('content').innerHTML = `
    <p>This is the about page</p>
    `;
};

// contact state
const contactState = function(page) {
    document.getElementById('heading').textContent = 'Contact US';
    document.getElementById('content').innerHTML = `
    <p>Create a Form</p>
    `;
};

const page = new PageState();

// initialized first state
page.start();

// UI variables

const home = document.getElementById('home')
const about = document.getElementById('about')
const contact = document.getElementById('contact')

home.addEventListener('click',(e) => {
    e.preventDefault()
    
    page.change(new homeState)
})

about.addEventListener('click',(e) => {
    e.preventDefault()
    
    page.change(new aboutState)
})
contact.addEventListener('click',(e) => {
    e.preventDefault()
    
    page.change(new contactState)
})