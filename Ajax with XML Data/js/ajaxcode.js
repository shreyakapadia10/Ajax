let btn = document.getElementById("btn");
let dataDiv = document.getElementById("data");

btn.addEventListener("click", makeRequest);

// Extracting data way 1 - more convinient
// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.open("GET", "data.xml", true);
    
    xhr.responseType = "document"; // to specify xml as responseType
    
    xhr.onload = () => {
        
        // When fetching of data is done
        if(xhr.readyState === XMLHttpRequest.DONE){
            // If the data is fetched successfully
            if(xhr.status === 200){

                // Extracting data line by line
                console.log(xhr.response);

                let data = xhr.response.getElementsByTagName("student");

                for (let i = 0; i < data.length; i++) {

                    dataDiv.innerHTML += "<p>" + data[i].getElementsByTagName("fname")[0].childNodes[0].nodeValue + "</p>" + "<p>" + data[i].getElementsByTagName("lname")[0].childNodes[0].nodeValue + "</p>" + "<br>";
                }

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


// // Extracting data way 2
// // Using arrow function
// function makeRequest() {
//     console.log("Button Clicked");

//     // Creating an object of XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     // Sending GET request to fetch data from data.txt via asynchronous method
//     xhr.open("GET", "data.xml", true);
    
//     xhr.responseType = "document"; // to specify xml as responseType
    
//     xhr.onload = () => {
        
//         // When fetching of data is done
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             // If the data is fetched successfully
//             if(xhr.status === 200){

//                 // Extracting data line by line
//                 console.log(xhr.response);

//                 console.log(xhr.response.getElementsByTagName("student"));

//                 console.log(xhr.response.getElementsByTagName("student")[0]);

//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("fname")[0]);

//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("fname")[0].childNodes[0]);

                
//                 // Setting fname and lname for student 1 in HTML

//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("fname")[0].childNodes[0].nodeValue);

//                 fname1.innerText = xhr.response.getElementsByTagName("student")[0].getElementsByTagName("fname")[0].childNodes[0].nodeValue;

//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("lname")[0].childNodes[0].nodeValue);

//                 lname1.innerText = xhr.response.getElementsByTagName("student")[0].getElementsByTagName("lname")[0].childNodes[0].nodeValue;

                
//                 // Setting fname and lname for student 2 in HTML
                
//                 console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("fname")[0].childNodes[0].nodeValue);
                
//                 fname2.innerText = xhr.response.getElementsByTagName("student")[1].getElementsByTagName("fname")[0].childNodes[0].nodeValue;

//                 console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("lname")[0].childNodes[0].nodeValue);

//                 lname2.innerText = xhr.response.getElementsByTagName("student")[1].getElementsByTagName("lname")[0].childNodes[0].nodeValue;
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