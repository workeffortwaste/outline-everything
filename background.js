chrome.extension.onConnect.addListener((port) => {
  const extensionListener = (message, sender, sendResponse) => {
    if (message.tabId && message.content) {
      if (message.action === 'code') {
        chrome.tabs.executeScript(message.tabId, { code: message.content })
      }
    } else {
      port.postMessage(message)
    }
    sendResponse(message)
  }
  chrome.extension.onMessage.addListener(extensionListener)

  port.onDisconnect.addListener((port) => {
    chrome.extension.onMessage.removeListener(extensionListener)
  })
})
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  return true
})
