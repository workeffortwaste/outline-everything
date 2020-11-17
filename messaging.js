(function createChannel () {
  const port = chrome.extension.connect({
    name: 'Outline Everything'
  })
}())

const sendObjectToInspectedPage = (message) => {
  message.tabId = chrome.devtools.inspectedWindow.tabId
  chrome.extension.sendMessage(message)
}
