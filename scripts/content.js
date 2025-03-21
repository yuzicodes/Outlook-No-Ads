function removeAds() {
  const targetDiv = document.querySelector(".GssDD");
  if (targetDiv) {
    targetDiv.remove();
    console.log("Removed a banner ad from Outlook.");
  }
  
  const owaContainer = document.getElementById("OwaContainer");
  if (owaContainer) {
    owaContainer.remove();
    console.log("Removed a message ad from Outlook.");
  }
}

// Ensure document body exists before observing mutations
document.addEventListener("DOMContentLoaded", () => {
  removeAds();
  
  const observer = new MutationObserver(removeAds);
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }
});