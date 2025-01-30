document.addEventListener('DOMContentLoaded', function () {
    function executeScriptAndSendMessage(action, state) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(tabs[0].id, { action, state });
            });
        });
    }

    // Contrast switch
    document.getElementById('contrast-switch').addEventListener('change', function () {
        const isChecked = this.checked;
        console.log('Contrast switch toggled:', isChecked);
        executeScriptAndSendMessage('toggleContrast', isChecked);
    });

    // Font size switch
    document.getElementById('font-size-switch').addEventListener('change', function () {
        const isChecked = this.checked;
        console.log('Font size switch toggled:', isChecked);
        executeScriptAndSendMessage('increaseFontSize', isChecked);
    });

    // Dyslexic font switch
    document.getElementById('dyslexic-font-switch').addEventListener('change', function () {
        const isChecked = this.checked;
        console.log('Dyslexic font switch toggled:', isChecked);
        executeScriptAndSendMessage('toggleDyslexicFont', isChecked);
    });

    // Text spacing switch
    document.getElementById('text-spacing-switch').addEventListener('change', function () {
        const isChecked = this.checked;
        console.log('Text spacing switch toggled:', isChecked);
        executeScriptAndSendMessage('increaseTextSpacing', isChecked);
    });

    // All effects reset button
    document.getElementById('reset-button').addEventListener('click', function () {
        console.log("Reverted");
        document.getElementById('contrast-switch').checked = false;
        document.getElementById('font-size-switch').checked = false;
        document.getElementById('dyslexic-font-switch').checked = false;
        document.getElementById('text-spacing-switch').checked = false;
        executeScriptAndSendMessage('resetAllEffects');
    })
});
