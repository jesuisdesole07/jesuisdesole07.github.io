function processUserInput() {
	const userInput = document.getElementById('userInput').value.trim();
	const asciiContainer = document.getElementById('asciiContainer');

	if (userInput === '07') {
		// Load the ASCII art again from ascii.html
		fetch('output.html')
			.then(response => response.text())
			.then(ascii => {
				asciiContainer.textContent = ascii;
			})
			.catch(error => {
				console.log('Error loading ASCII art:', error);
			});
	} else {
		// Load the ASCII art again from ascii.html
		fetch('output.html')
			.then(response => response.text())
			.then(ascii => {
				// Replace spaces and newlines with empty string
				ascii = ascii.textContent.replace(/[\s\n]/g, '');

				// Add a newline before each "-"
				ascii = ascii.replace(/-/g, '\n-');

				// Update the ASCII art container with modified text
				asciiContainer.textContent = ascii;

			})
			.catch(error => {
				console.log('Error loading ASCII art:', error);
			});
	}
}

