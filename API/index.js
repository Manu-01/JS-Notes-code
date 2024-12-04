//testing api
async function xyz(){
 let api= await fetch('https://jsonplaceholder.typicode.com/posts/1')
 let output = await api.json()
 console.log(output)
}
xyz();

