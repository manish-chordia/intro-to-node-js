document
    .querySelector(".request-complement")
    .addEventListener("click", function() {
        fetch("/complement")
            .then(function(res) {
                return res.json();
            })
            .then(function(processedResponse) {
                document.querySelector(".complement").innerHTML = processedResponse.complement;
            })
            .catch(function(error) {
                console.log(error);
            });
	});