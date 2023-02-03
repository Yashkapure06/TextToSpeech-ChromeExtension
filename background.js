chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Read aloud",
        contexts: ["selection"],
        id: 'read-aloud'
    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        if (info.menuItemId === 'read-aloud') {
            chrome.tabs.sendMessage(tab.id, { text: info.selectionText });
        }
    });
});
