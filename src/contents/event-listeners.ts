export {};
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "refresh_page") {
    // Refresh the page
    window.location.reload();
  }
});
