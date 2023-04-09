import { createRoot } from 'react-dom/client';

const sendMessage = () => {
    console.log("send message")
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { message: "Hello from popup!" },
            (resp) => {
                console.log("get message", resp.message)
            }
        );
    });
}

const PopUp = () => {
    return <div>
        <button onClick={sendMessage}>push</button>
    </div>
}

const root = createRoot(document.getElementById("App"))
root.render(<PopUp></PopUp>)
