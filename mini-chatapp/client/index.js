const profileContainer = document.getElementById("profile-container");
const chatContainer = document.getElementById("chat-container");
const profileSubmitButton = document.getElementById("profile-send");
const chatSendButton = document.getElementById("chat-send");
const chatInput = document.getElementById("chat-input");

let client;
let currentName = "";

function handleProfileSubmit() {
    const name = document.getElementById("profile-input").value;
    if (!name) return;

    currentName = name;
    try {
        client = new WebSocket("ws://localhost:8080");
    } catch (error) {
        window.alert("WebSocket connection failed");
        return;
    }


    client.onopen = () => {
        client.send(JSON.stringify({ type: "profile", name }));
        profileContainer.style.display = "none";
        chatContainer.style.display = "flex";
    };

    client.onmessage = (event) => {
        const message = JSON.parse(event.data);
        switch (message.type) {
            case "profile":
                addGreetingElement(message.name);
                break;
            case "chat":
                addMessageElement(message.body, message.name === currentName);
                break;
        }
    };

    client.onerror = (error) => {
        console.error("WebSocket Error:", error);
    };
}

function handleChatSend() {
    const content = chatInput.value;
    if (!content || !client) return;

    addMessageElement(content, true);
    client.send(JSON.stringify({ type: "chat", body: content, name: currentName }));
    chatInput.value = "";
}

profileSubmitButton.addEventListener("click", handleProfileSubmit);
chatSendButton.addEventListener("click", handleChatSend);

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleChatSend();
});

function addMessageElement(message, isSelf) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(isSelf ? "message-sent" : "message-received");
    messageElement.textContent = message;
    console.log(messageElement);
    document.getElementById("chat-messages").appendChild(messageElement);

    // Auto-scroll to bottom
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addGreetingElement(name) {
    const greetingElement = document.createElement("div");
    greetingElement.classList.add("greeting");
    greetingElement.textContent = `Hello ${name}`;
    console.log(greetingElement);
    document.getElementById("chat-messages").appendChild(greetingElement);
}
