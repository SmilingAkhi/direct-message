"use script";
const messagesDisplayContainer = document.querySelector("#messages");
const getMessage = document.querySelector("#getMessage");
const sendMessage = document.querySelector("#send");

//storing messages
const messages = [
  {
    Sender: "khadija",
    Timestamp: "1:00am",
    Text: "okay, this is a test and i am worried if it works but oh well, lets see what happens if it gets too long would it wrap or overflow ",
  },
  { Sender: "Aisha", Timestamp: "1:30am", Text: "koji <3" },
];

//rending element
function renderElement() {
  //looping through array
  for (message of messages) {
    //create dom element
    messageContainer = document.createElement("div");
    messageContainer.classList.add("messageContainer");
    messageContainer.innerHTML = `${message.Sender}:  ${message.Text}`;
    console.log(messageContainer);
    messagesDisplayContainer.appendChild(messageContainer);
  }
}
renderElement();
