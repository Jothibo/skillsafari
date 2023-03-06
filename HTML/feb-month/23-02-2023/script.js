// Load the event data from a JSON file
fetch("events.json")
  .then((response) => response.json())
  .then((data) => {
    // Display the event data on the website
    const events = document.querySelector("#events");
    data.forEach((event) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${event.title}</h3>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <p>Description: ${event.description}</p>
      `;
      events.appendChild(div);
    });
  });

// Add an
