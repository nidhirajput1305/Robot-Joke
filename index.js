const chat = document.getElementById("_chat");
const jokeBtn = document.getElementById("jokebtn");
generateJoke();
jokeBtn.addEventListener("click", generateJoke);
async function generateJoke() {
    jokeBtn.disable = true;
    const message = createMessageElement("Hey Robot tell me joke?");
    appendMessage(message);
    const joke = createMessageElement();
    setElementContent(joke, '<i class="fa-solid fa-ellipsis></i>');
    appendMessage(joke);
    const res = await fetch(" https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    if (res.ok) {
        const data = await res.json();
        console.log(data);
        setElementContent(joke, data.joke);
        jokeBtn.disable = false;
    }
}

function createMessageElement(content) {
    const element = document.createElement("div");
    element.classList.add("message");
    if (content) {
        setElementContent(element, content);
    } else {
        element.classList.add("joke");
    }
    return element;
}

function setElementContent(element, content) {
    element.innerHTML = content;
}

function appendMessage(element) {
    chat.appendChild(element);
}