// Placeholder for potential background functionality
chrome.runtime.onInstalled.addListener(() => {
    console.log('Accessibly extension installed.');
    
    // Set default settings if necessary
    chrome.storage.sync.set({ contrastMode: false, fontSize: 'normal' }, () => {
        console.log('Default settings initialized.');
    });
});

// Listener for messages from the popup (if needed)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleContrast') {
        chrome.storage.sync.get('contrastMode', (data) => {
            const newContrastMode = !data.contrastMode;
            chrome.storage.sync.set({ contrastMode: newContrastMode }, () => {
                sendResponse({ success: true, contrastMode: newContrastMode });
            });
        });
        return true; // Indicates that the response will be sent asynchronously
    }
});
