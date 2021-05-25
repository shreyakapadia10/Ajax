let btn = document.getElementById("btn");
let userId = document.getElementById("userId");
let id = document.getElementById("id");
let title = document.getElementById("title");
let body = document.getElementById("body");

btn.addEventListener("click", makeRequest);

// 1st Way - More Preferred
// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/10", true);
    
    // This will parse JSON
    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
        // When fetching of data is done
        if(xhr.readyState === XMLHttpRequest.DONE){
            // If the data is fetched successfully
            if(xhr.status === 200){
                console.log(xhr.response);
                console.log(xhr.response.userId);
                console.log(xhr.response.id);
                console.log(xhr.response.title);
                console.log(xhr.response.body);

                userId.innerText = xhr.response.userId;
                id.innerText = xhr.response.id;
                title.innerText = xhr.response.title;
                body.innerText = xhr.response.body;
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