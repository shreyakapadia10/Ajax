let btn = document.getElementById("btn");

btn.addEventListener("click", makeRequest);

// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // To run ontimeout uncomment below code
    // xhr.timeout = 2;

    // Sending GET request to fetch data from data.txt via asynchronous method
    
    xhr.open("GET", "data.txt", true);
    
    // To run onerror uncomment below code
    // xhr.open("GET", "data.txt", true);

    // onload method
    xhr.onload = () => {
        // If the data is fetched successfully
        if (xhr.status === 200) {
            console.log(xhr);
            console.log(xhr.responseText);
        }
        // If there is an error in fetching data
        else {
            console.log("Error Occurred!");
        }
    }

    // Various methods that we can call
       
    // onloadstart
    xhr.onloadstart = ()=>{
        console.log("On Load Started..");
    }
    
    // onloadend
    xhr.onloadend = ()=>{
        console.log("On Load End..");
    }
    
    // onprogress
    xhr.onprogress = (e) =>{
        console.log(e.loaded);
        console.log(e.total);
    }

    // onerror
    xhr.onerror = ()=>{
        console.log("Some error occurred..");
    }

    // onabord
    xhr.onabort = ()=>{
        console.log("Aborted..");
    }

    // ontimeout
    xhr.ontimeout = () =>{
        console.log("Timeout!");
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