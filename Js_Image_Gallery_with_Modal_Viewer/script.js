document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-img");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const title = img.getAttribute("data-title");
      modalImage.src = src;
      modalTitle.textContent = title;
    });
  });
});
