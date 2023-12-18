chrome.app.runtime.onLaunched.addListener(function(launchData) {
    var displayDimensions = calcNaClAppResolution();
    chrome.app.window.create('index.html', {
        id: getSenetWindowId(),
        bounds: {
            width: displayDimensions.width,
            height: displayDimensions.height
        },
        resizable: false
    });
});

chrome.runtime.onInstalled.addListener(function() {
        console.log('installed');
        });

chrome.runtime.onSuspend.addListener(function() { 
        // Do some simple clean-up tasks.
        });
