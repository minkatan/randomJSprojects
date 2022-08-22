document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault();

    const number = document.getElementById('joke-number').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    
    xhr.onload = function() {
        if(this.status === 200) {
            const res = JSON.parse(this.responseText);
            
            let output ='';

            if(res.type === 'success') {
                res.value.forEach(joke => {
                    output += `<li>${joke.joke}</li><br>`
                });
            }else {
                output += '<li>Something went wrong</li>'
            }

            document.getElementById('jokes-list').innerHTML = output;
        }
    }

    xhr.send()
}