window.onload = function() {
    fetch('output.html')
        .then(response => response.text())
        .then(ascii => {
            const asciiContainer = document.getElementById('asciiContainer');
            asciiContainer.textContent = ascii;
    	    processUserInput(); // Process user input initially
        })
        .catch(error => {
            console.log('Error loading ASCII art:', error);
        });

};

function processUserInput() {
    const userInput = document.getElementById('userInput').value.trim();
    const asciiContainer = document.getElementById('asciiContainer');

    if (userInput === '07') {
        // Load the ASCII art again from ascii.html
        fetch('ascii.html')
            .then(response => response.text())
            .then(ascii => {
                asciiContainer.textContent = ascii;
            })
            .catch(error => {
                console.log('Error loading ASCII art:', error);
            });
    } else {
        // Replace spaces and newlines with empty string
        let asciiText = asciiContainer.textContent.replace(/[\s\n]/g, '');

        // Add a newline before each "-"
        asciiText = asciiText.replace(/-/g, '\n-');

        // Update the ASCII art container with modified text
        asciiContainer.textContent = asciiText;
    }
}

