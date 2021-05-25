let btn = document.getElementById("btn");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

btn.addEventListener("click", makeRequest);

// 1st Way - More Preferred
// // Using arrow function
// function makeRequest() {
//     console.log("Button Clicked");

//     // Creating an object of XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     // Sending GET request to fetch data from data.txt via asynchronous method
//     xhr.open("GET", "data.json", true);
    
//     // This will parse JSON
//     xhr.responseType = "json";

//     xhr.onreadystatechange = () => {
//         // When fetching of data is done
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             // If the data is fetched successfully
//             if(xhr.status === 200){
//                 // console.log(xhr);
//                 // console.log(xhr.response);
//                 fname.innerText = xhr.response.fname;
//                 lname.innerText = xhr.response.lname;
//             }
//             // If there is an error in fetching data
//             else{
//                 console.log("Error Occurred!");
//             }
//         }
//     }
    
//     // Sending request
//     xhr.send();
// }

// 2nd Way - Using JSON.parse()
// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.open("GET", "data.json", true);
    
    xhr.onreadystatechange = () => {
        // When fetching of data is done
        if(xhr.readyState === XMLHttpRequest.DONE){
            // If the data is fetched successfully
            if(xhr.status === 200){
                console.log(xhr);
                let data = JSON.parse(xhr.response);
                console.log(data);

                fname.innerText = data.fname;
                lname.innerText = data.lname;
            }
            // If there is an error in fetching data
            else{
                console.log("Error Occurred!");
            }
        }
    }
    
    // Sending request
    xhr.send();
}