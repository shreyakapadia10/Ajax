let btn = document.getElementById("btn");

btn.addEventListener("click", makeRequest);

// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.open("GET", "data.txt", true);

    xhr.onload = () => {
        // When fetching of data is done
        // No need to write below line
        // if(xhr.readyState === XMLHttpRequest.DONE){

            // If the data is fetched successfully
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
            }
            // If there is an error in fetching data
            else{
                console.log("Error Occurred!");
            }
        // }
    }
    
    // Sending request
    xhr.send();
}

// Using annonymous function
/*function makeRequest() {
    console.log("Button Clicked");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "data.txt", true);

    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
            }
        }
    }

    xhr.send();
}*/