// Collapsible FAQ
document.querySelectorAll("[data-faq]").forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// Popup Notification Banner
const popup = document.getElementById("popupBanner");
const closePopup = document.getElementById("closePopup");

// Show popup after 2 seconds
setTimeout(() => {
  popup.style.display = "flex";
}, 2000);

// Close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Image Slider
const images = [
  "https://picsum.photos/id/1015/400/200",
  "https://picsum.photos/id/1025/400/200",
  "https://picsum.photos/id/1035/400/200",
  "https://picsum.photos/id/1045/400/200"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderImage.src = images[currentIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
});

// Theme Switcher (Advanced)
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
