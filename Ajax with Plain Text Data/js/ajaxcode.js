let btn = document.getElementById("btn");
let data = document.getElementById("data");

btn.addEventListener("click", makeRequest);

// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.open("GET", "data.txt", true);

    xhr.onreadystatechange = () => {
        // When fetching of data is done
        if(xhr.readyState === XMLHttpRequest.DONE){
            // If the data is fetched successfully
            if(xhr.status === 200){
                // console.log(xhr);
                // console.log(xhr.responseText);

                data.innerText = xhr.responseText;
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