// fetch('https://randomuser.me/api/')  // using fetch
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// async function getdata() {

//     const response = await fetch('https://randomuser.me/api/') // using async await
//     const data = await response.json()
//     console.log(data)
// }
// getdata()

// fetch('https://randome/api/')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error) // throw error
//     });

// fetch('https://randomuser.me/api/')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

//    async function getData(){
//         const response =await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data)
//     }
//     getData()

// fetch('https://randomuser.me/api/')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

async function getdata() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data.results)

}
getdata()
