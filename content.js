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
        document.body.style.fontSize = request.state ? '2em' : '';  
        sendResponse({ status: 'Font size toggled' });
    }

    if (request.action === 'toggleDyslexicFont') {
        if (request.state) {
            const style = document.createElement('style');
            style.id = 'dyslexic-font';
            style.textContent = "@font-face { font-family: 'OpenDyslexic'; src: url('path/to/font.woff2') format('woff2'); }";
            document.head.appendChild(style);
            document.body.style.fontFamily = "'OpenDyslexic', sans-serif";
        } else {
            document.getElementById('dyslexic-font')?.remove();
            document.body.style.fontFamily = '';
        }
    }
    

    if (request.action === 'increaseTextSpacing') {
        console.log('Increasing text spacing:', request.state);
        document.body.style.letterSpacing = request.state ? '0.1em' : '';
        document.body.style.lineHeight = request.state ? '1.5' : '';
        sendResponse({ status: 'Text spacing toggled' });
    }
});
