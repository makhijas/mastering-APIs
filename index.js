//all imports go at the top:
const fetch = require('node-fetch');

// //Request to a website that returns html
// fetch('https://espn.com') //url (aka endpoint)
// // .then is a "promise" that something will happen after fetch
// .then((response) => { //.then means we are waiting for fetch to finish first
//     return response.text(); //an extra step that happens so we an see the text
// })
// .then((html) => { //this  .then waits for the first .then to complete first
//     console.log(html)
// });

// Requests to a third party database that returns a json object
// fetch("https://api.github.com/users/makhijas") //endpoint 
// .then(response => {
//     return response.json(); // .json() changes the original response so we can work with it in js
// })
// .then(data => {
//     console.log(data)
// })

// fetch("https://api.github.com/users/facebook") //endpoint 
// .then(response => {
//     return response.json(); // .json() changes the original response so we can work with it in js
// })
// .then(data => {
//     console.log(data)
// })

fetch("https://api.spacexdata.com/v3/capsules") //endpoint 
.then(response => {
    return response.json(); // .json() changes the original response so we can work with it in js
})
.then(dataArray => {
    //console.log(dataArray) // this is an array
    let c102Object = dataArray[1]; //this returns an object
    let capsuleSerial = c102Object['capsule_serial'] //bracket notation MUST be used for keys with underscores. dot notation will not work
    let capsuleStatus = c102Object.status;

    console.log(c102Object)
    console.log(capsuleSerial)
    console.log(capsuleStatus)
})