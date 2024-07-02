chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url.includes('youtube.com/watch')) {
      chrome.scripting.executeScript({
        target: {tabId: activeInfo.tabId},
        files: ['content.js'],
      });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' && 
    tab.url.includes('youtube.com/watch')
  ) {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['content.js'],
    });
  }
});
