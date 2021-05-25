let btn = document.getElementById("btn");
let table = document.getElementById("table");

btn.addEventListener("click", makeRequest);

// 1st Way - More Preferred
// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    
    // This will parse JSON
    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
        // When fetching of data is done
        if(xhr.readyState === XMLHttpRequest.DONE){
            // If the data is fetched successfully
            if(xhr.status === 200){
                let data = xhr.response;

                for (let i = 0; i < data.length; i++) {
                    console.log(data[i].userId);
                    console.log(data[i].id);
                    console.log(data[i].title);
                    console.log(data[i].body);

                    table.innerHTML += "<tr><td>"+ data[i].userId +"</td><td>"+ data[i].id +"</td><td>"+ data[i].title +"</td><td>"+ data[i].body +"</td></tr>"
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