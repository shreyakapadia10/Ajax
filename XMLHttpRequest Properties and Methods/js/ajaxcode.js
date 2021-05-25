let btn = document.getElementById("btn");

btn.addEventListener("click", makeRequest);

// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.withCredentials = true;
    xhr.open("GET", "data.txt", true);
    
    xhr.responseType = "" // here text is by default type, if we don't specify anything

    xhr.setRequestHeader("Content-Type", "application/json");

    // onload method
    xhr.onload = () => {
        // If the data is fetched successfully
        if (xhr.status === 200) {
            console.log("XMLHttpResponse Object:" , xhr);
            console.log("Response Text:" , xhr.responseText);
            console.log("Response:" , xhr.response);
            console.log("Response URL:" , xhr.responseURL);
            console.log("Response Type:" , xhr.responseType);
            console.log("withCredentials:" , xhr.withCredentials);
            console.log("Status Text:" , xhr.statusText);
            console.log("getResponseHeader('Last-Modified'):" , xhr.getResponseHeader("Last-Modified"));
            console.log("getAllResponseHeaders():" , xhr.getAllResponseHeaders());
        }
        // If there is an error in fetching data
        else {
            console.log("Error Occurred!");
        }
    }


    // Sending request
    xhr.send();
}