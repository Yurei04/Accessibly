document.addEventListener('DOMContentLoaded', function () {
    // Contrast switch
    document.getElementById('contrast-switch').addEventListener('change', function () {
        const isChecked = this.checked;
        console.log('Contrast switch toggled:', isChecked);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleContrast', state: isChecked });
            });
        });
    });

    // Font size switch
    document.getElementById('font-size-switch').addEventListener('change', function () {
        const isChecked = this.checked;
        console.log('Font size switch toggled:', isChecked);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'increaseFontSize', state: isChecked });
            });
        });
    });

    // Dyslexic font switch
    document.getElementById('dyslexic-font-switch').addEventListener('change', function () {
        const isChecked = this.checked;
        console.log('Dyslexic font switch toggled:', isChecked);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleDyslexicFont', state: isChecked });
            });
        });
    });
});
