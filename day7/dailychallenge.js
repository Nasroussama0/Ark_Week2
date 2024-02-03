//import fetch from "node-fetch";
//const fetch = require("node-fetch");
async function fetchUserData(){
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        
        console.log("Processed Users:");
        const process = await processUserData(data);
        process.forEach((x) => console.log(x));
        
        const sum = await summarizeAge(data);
        
        console.log(`Total Age of Active Users: ${sum}`);

    }catch(error){
        console.log(error);
    }
}

const processUserData = (result) => result.users
        .filter(x => x.gender == "male")
        .map(y => `Name : ${y.firstName}, Age : ${y.age}`);

const summarizeAge = (a) => a.users
    .filter(x => x.gender == "male")
    .reduce((accumulator,currentValue) => accumulator + currentValue.age,0);

fetchUserData();