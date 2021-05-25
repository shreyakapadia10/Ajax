let btn = document.getElementById("btn");

btn.addEventListener("click", makeRequest);

// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    if(xhr.readyState === 0){
        console.log("Open method yet not called - 0");
    }

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.open("GET", "data.txt", true);

    if(xhr.readyState === 1){
        console.log("Open method called - 1");
    }

    xhr.onreadystatechange = () => {

        if(xhr.readyState === 2){
            console.log("Header Response - 2");
        }   
    
        if(xhr.readyState === 3){
            console.log("Loading... - 3");
        }   

        if(xhr.readyState === 4){
            console.log("Done - 4");
        }   

        // When fetching of data is done
        if(xhr.readyState === XMLHttpRequest.DONE){
            // If the data is fetched successfully
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
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


// // Using arrow function
// function makeRequest() {
//     console.log("Button Clicked");

//     // Creating an object of XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     console.log("Before open " + xhr.readyState);
//     // Sending GET request to fetch data from data.txt via asynchronous method
//     xhr.open("GET", "data.txt", true);
//     console.log("After open " + xhr.readyState);

//     xhr.onreadystatechange = () => {
//         console.log("readyState " + xhr.readyState);
//         // When fetching of data is done
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             // If the data is fetched successfully
//             if(xhr.status === 200){
//                 console.log(xhr);
//                 console.log(xhr.responseText);
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