function myFunction() {
    let result = document.getElementById('result');
    let input = document.getElementById('text')
    let inputValue = input.value; // Ensure input is not empty

    console.log("Sending:", JSON.stringify({ input_parameter: inputValue }));

    fetch("http://127.0.0.1:5000/register", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "input_parameter": inputValue // Send valid JSON
        }),
        method: "POST",
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        result.innerText = data.message;
    })
    .catch(error => {
        console.error("Error occurred:", error);
        result.innerText = "An error occurred!";
    });
}
