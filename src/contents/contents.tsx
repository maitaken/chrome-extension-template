chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.message);
    sendResponse({ message: "Hello from content script!" })
});
