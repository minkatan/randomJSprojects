const http = new EasyHTTP

http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.log(error))

// create Data
// const data = {
//     userId: '999',
//     title: 'custom',
//     body: 'this is custom'
// };


// ********POST REQUEST**************///

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,res){
//     if(err){
//         console.log(err)
//     }else {
//         console.log(res)
//     }
// })


// ********UPDATE REQUEST**************///

// http.put('https://jsonplaceholder.typicode.com/posts/1',
// data,function(err,res){
//     if(err){
//         console.log(err)
//     }else {
//         console.log(res)
//     }
// })

// ********UPDATE REQUEST**************///

// http.delete('https://jsonplaceholder.typicode.com/posts/1', 
// function(err,res){
//     if(err){
//         console.log(err)
//     }else {
//         console.log(res)
//     }
// });