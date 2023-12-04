/**
 * Adds a click event listener to the 'convert' element and sends a message to the active tab to perform a conversion.
 * @param {Event} event - The click event object.
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convertBtn").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "convert" });
    });
  });
});
