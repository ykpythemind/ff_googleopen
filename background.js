function handleMessage(request, sender, sendResponse) {
  if (sender.tab && request.message !== undefined) {
    const url = `https://www.google.co.jp/search?q=${encodeURIComponent(
      request.message
    )}`;
    browser.tabs.create({ url: url }, tab => {});
  }
}

browser.runtime.onMessage.addListener(handleMessage);
