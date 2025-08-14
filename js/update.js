function updates(jsonFile, targetDivId) {
  fetch(jsonFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load JSON file: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const targetDiv = document.getElementById(targetDivId);
      if (!targetDiv) {
        throw new Error(`Div with ID "${targetDivId}" not found`);
      }

      const list = document.createElement("first-ul");

      data.reverse().forEach((point) => {
        const listItem = document.createElement("li"); // Create a <li> element
        listItem.innerHTML = `<mark>${point.date}</mark>: ${point.text}`; // Set the content
        list.appendChild(listItem); // Append <li> to <ul>
      });

      targetDiv.appendChild(list);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}