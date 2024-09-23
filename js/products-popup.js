document.addEventListener("DOMContentLoaded", function () {
  // Create the pop-up container
  const popupContainer = document.createElement("div");
  popupContainer.style.position = "fixed";
  popupContainer.style.bottom = "20px";
  popupContainer.style.right = "20px";
  popupContainer.style.width = "200px";
  popupContainer.style.padding = "20px";
  popupContainer.style.backgroundColor = "orange"; // Orange background
  popupContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  popupContainer.style.borderRadius = "5px";
  popupContainer.style.zIndex = "1000";
  popupContainer.style.display = "none"; // Initially hidden

  // Create the close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "✖";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.border = "none";
  closeButton.style.background = "none";
  closeButton.style.fontSize = "16px";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });

  // Create the message text
  const message = document.createElement("p");
  message.innerHTML =
    "Our team is available and happy to help. How can we help you today? 🙌";
  message.style.margin = "40px 0 10px 0"; // Adjust for the close button
  message.style.fontSize = "16px";
  message.style.color = "#fff";
  message.style.textAlign = "center";

  // Create the input container
  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";
  inputContainer.style.marginTop = "10px";

  // Create the input field
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Type your message";
  inputField.style.flex = "1";
  inputField.style.padding = "10px";
  inputField.style.border = "none";
  inputField.style.borderRadius = "5px 0 0 5px";

  // Create the send button
  const sendButton = document.createElement("button");
  sendButton.innerHTML = "&#9654;"; // Unicode for right arrow
  sendButton.style.padding = "10px";
  sendButton.style.border = "none";
  sendButton.style.backgroundColor = "#fff";
  sendButton.style.color = "orange";
  sendButton.style.cursor = "pointer";
  sendButton.style.borderRadius = "0 5px 5px 0";

  // Append input and send button to input container
  inputContainer.appendChild(inputField);
  inputContainer.appendChild(sendButton);

  // Append close button, message, and input container to the popup container
  popupContainer.appendChild(closeButton);
  popupContainer.appendChild(message);
  popupContainer.appendChild(inputContainer);

  // Append the container to the body
  document.body.appendChild(popupContainer);

  // Show the pop-up after a delay (e.g., 5 seconds)
  setTimeout(function () {
    popupContainer.style.display = "block";
  }, 5000);
});
