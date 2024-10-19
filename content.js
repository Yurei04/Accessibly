chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received in content script:', request);

    if (request.action === 'toggleContrast') {
        console.log('Toggling contrast mode:', request.state);
        document.body.style.backgroundColor = request.state ? 'black' : '';
        document.body.style.color = request.state ? 'white' : '';
        sendResponse({ status: 'Contrast mode toggled' });
    }

    if (request.action === 'increaseFontSize') {
        console.log('Toggling font size:', request.state);
        if (request.state) {
            document.body.style.fontSize = '2em';  
        } else {
            document.body.style.fontSize = '';  
        }
        sendResponse({ status: 'Font size toggled' });
    }

    if (request.action === 'toggleDyslexicFont') {
        console.log('Toggling dyslexic-friendly font:', request.state);
        document.body.style.fontFamily = request.state ? "'OpenDyslexic', sans-serif" : '';
        sendResponse({ status: 'Dyslexic font toggled' });
    }
});
