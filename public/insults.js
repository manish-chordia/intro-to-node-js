document
    .querySelector(".request-insult")
    .addEventListener("click", function() {
        fetch("/insult")
            .then(res => res.json())
            .then(processedResponse => {
                document.querySelector(".insult").innerHTML = processedResponse.insult;
            })
            .catch(error => console.log(error))
    })