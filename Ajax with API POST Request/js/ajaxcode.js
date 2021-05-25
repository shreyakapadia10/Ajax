let btn = document.getElementById("btn");
let data = document.getElementById("data");

btn.addEventListener("click", makeRequest);

// 1st Way - More Preferred
// Using arrow function
function makeRequest() {
    console.log("Button Clicked");

    // Creating an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Sending GET request to fetch data from data.txt via asynchronous method
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    
    // This will parse JSON
    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
        // When fetching of data is done
        if(xhr.readyState === XMLHttpRequest.DONE){
            // If the data is fetched successfully
            if(xhr.status === 200){
                console.log(xhr.response);

                data.innerText = xhr.response.message;
            }
            // If there is an error in fetching data
            else{
                console.log("Error Occurred!");
            }
        }
    }
    
    // Setting data to be sent
    let insertData = '{"name":"test","salary":"123","age":"23"}';

    // Sending request
    xhr.send(insertData);
}