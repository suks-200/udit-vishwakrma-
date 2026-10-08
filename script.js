const assets = [
  { src: "photos/brand-identity.jpeg", title: "Brand Identity", category: "Creative Designs", description: "A visual identity concept from the portfolio archive.", ratio: "4 / 5" },
  { src: "photos/packaging-label.jpeg", title: "Packaging Label", category: "Creative Designs", description: "Packaging and label artwork from the portfolio archive.", ratio: "4 / 5" },
  { src: "photos/photo-editing.jpeg", title: "Photo Editing", category: "Photo Editing", description: "Edited photographic work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/print-publication.jpeg", title: "Print Publication", category: "Posters", description: "Print publication design from the portfolio archive.", ratio: "4 / 5" },
  { src: "photos/project-new-01.jpeg", title: "Selected Creative Work 01", category: "Creative Designs", description: "Creative work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/project-new-02.jpeg", title: "Selected Creative Work 02", category: "Creative Designs", description: "Creative work from the portfolio archive.", ratio: "4 / 5" },
  { src: "photos/project-new-03.jpeg", title: "Selected Creative Work 03", category: "Creative Designs", description: "Creative work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/project-new-04.jpeg", title: "Selected Creative Work 04", category: "Creative Designs", description: "Creative work from the portfolio archive.", ratio: "3 / 4" },
  { src: "photos/project-new-05.jpeg", title: "Selected Creative Work 05", category: "Creative Designs", description: "Creative work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/social-media-campaign.jpeg", title: "Social Media Campaign", category: "Social Media", description: "Social media creative from the portfolio archive.", ratio: "4 / 5" },
  { src: "photos/WhatsApp Image 2026-10-04 at 22.34.01.jpeg", title: "Additional Work 01", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.04.59.jpeg", title: "Additional Work 02", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.05.25.jpeg", title: "Additional Work 03", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.05.56.jpeg", title: "Additional Work 04", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.08.16 (1).jpeg", title: "Additional Work 05", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.08.16 (2).jpeg", title: "Additional Work 06", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.08.16.jpeg", title: "Additional Work 07", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.15.40.jpeg", title: "Additional Work 08", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.16.06.jpeg", title: "Additional Work 09", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-04 at 23.17.11.jpeg", title: "Additional Work 10", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-07 at 22.45.17.jpeg", title: "Additional Work 11", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-07 at 22.54.50.jpeg", title: "Additional Work 12", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-07 at 22.57.21.jpeg", title: "Additional Work 13", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-07 at 23.40.10.jpeg", title: "Additional Work 14", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 00.37.54 (1).jpeg", title: "Additional Work 15", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 00.37.54 (2).jpeg", title: "Additional Work 16", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 00.37.54 (3).jpeg", title: "Additional Work 17", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 00.37.54 (4).jpeg", title: "Additional Work 18", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 00.37.54.jpeg", title: "Additional Work 19", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 00.45.15 (1).jpeg", title: "Additional Work 20", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 00.45.15.jpeg", title: "Additional Work 21", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 00.48.27.jpeg", title: "Additional Work 22", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 01.03.22 (1).jpeg", title: "Additional Work 23", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 01.03.22 (2).jpeg", title: "Additional Work 24", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 01.03.22.jpeg", title: "Additional Work 25", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" },
  { src: "photos/WhatsApp Image 2026-10-08 at 01.06.41.jpeg", title: "Additional Work 26", category: "Other", description: "Additional visual work from the portfolio archive.", ratio: "4 / 3" }
];

const categories = ["All", "Photo Editing", "Banners", "Posters", "Social Media", "Creative Designs", "Other"];
const gallery = document.querySelector("#masonry");
const filters = document.querySelector("#filters");
const viewer = document.querySelector(".viewer");
const viewerImage = viewer.querySelector("img");
const viewerTitle = viewer.querySelector("#viewer-title");
const viewerCategory = viewer.querySelector("#viewer-category");
const viewerIndex = viewer.querySelector("#viewer-index");
const viewerDescription = viewer.querySelector("#viewer-description");
let activeFilter = "All";
let activeIndex = 0;
let lastFocusedElement = null;

function makeCard(item, index) {
  const button = document.createElement("button");
  button.className = "gallery-card";
  button.type = "button";
  button.dataset.category = item.category;
  button.dataset.index = index;
  button.style.setProperty("--ratio", item.ratio);
  button.setAttribute("aria-label", `Open ${item.title}`);
  button.innerHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async"><span class="gallery-card-info"><strong>${item.title}</strong><span>${item.category}</span></span>`;
  button.addEventListener("click", () => openViewer(index));
  return button;
}

function renderFilters() {
  filters.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = `filter${category === activeFilter ? " active" : ""}`;
    button.type = "button";
    button.textContent = category;
    button.addEventListener("click", () => {
      activeFilter = category;
      renderFilters();
      renderGallery();
    });
    filters.appendChild(button);
  });
}

function renderGallery() {
  gallery.innerHTML = "";
  const visible = assets.filter(item => activeFilter === "All" || item.category === activeFilter);
  visible.forEach((item, index) => gallery.appendChild(makeCard(item, assets.indexOf(item))));
  document.querySelector("#gallery-empty").hidden = visible.length > 0;
}

function openViewer(index) {
  activeIndex = (index + assets.length) % assets.length;
  const item = assets[activeIndex];
  lastFocusedElement = document.activeElement;
  viewerImage.src = item.src;
  viewerImage.alt = item.title;
  viewerTitle.textContent = item.title;
  viewerCategory.textContent = item.category;
  viewerIndex.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(assets.length).padStart(2, "0")}`;
  viewerDescription.textContent = item.description;
  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("viewer-open");
  viewer.querySelector(".viewer-close").focus();
}

function closeViewer() {
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("viewer-open");
  viewerImage.classList.remove("zoomed");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function showWork(direction) {
  activeIndex = (activeIndex + direction + assets.length) % assets.length;
  openViewer(activeIndex);
}

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const themeToggle = document.querySelector(".theme-toggle");

window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 28), { passive: true });

function setMenu(open) {
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
}
menuToggle.addEventListener("click", () => setMenu(!mobileMenu.classList.contains("open")));
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme === "dark" ? "light" : "dark"} mode`);
});

const accentPicker = document.querySelector(".accent-picker input");
accentPicker.addEventListener("input", event => {
  const color = event.target.value;
  const rgb = hexToRgb(color);
  document.documentElement.style.setProperty("--accent", color);
  document.documentElement.style.setProperty("--accent-soft", color);
  document.documentElement.style.setProperty("--accent-rgb", `${rgb.r}, ${rgb.g}, ${rgb.b}`);
});

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: "0px 0px -40px" });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

document.querySelectorAll(".parallax-image").forEach(element => {
  const image = element.querySelector("img");
  const update = () => {
    const rect = element.getBoundingClientRect();
    const offset = Math.max(-35, Math.min(35, (window.innerHeight / 2 - rect.top) * -.025));
    image.style.transform = `translateY(${offset}px) scale(1.04)`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
});

viewer.querySelector(".viewer-close").addEventListener("click", closeViewer);
viewer.querySelector("#prev-work").addEventListener("click", () => showWork(-1));
viewer.querySelector("#next-work").addEventListener("click", () => showWork(1));
viewerImage.addEventListener("click", () => viewerImage.classList.toggle("zoomed"));
viewer.addEventListener("click", event => { if (event.target === viewer) closeViewer(); });

const contactModal = document.querySelector(".contact-modal");
const contactForm = document.querySelector("#contact-form");
let contactFocus = null;
function openContact() {
  contactFocus = document.activeElement;
  contactModal.classList.add("open");
  contactModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  contactModal.querySelector(".modal-close").focus();
}
function closeContact() {
  contactModal.classList.remove("open");
  contactModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (contactFocus) contactFocus.focus();
}
document.querySelectorAll("[data-open-contact]").forEach(button => button.addEventListener("click", openContact));
contactModal.querySelector(".modal-close").addEventListener("click", closeContact);
contactModal.addEventListener("click", event => { if (event.target === contactModal) closeContact(); });
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const status = contactForm.querySelector(".form-status");
  status.textContent = `Thank you, ${data.get("name")}. Your enquiry has been prepared for review.`;
  contactForm.reset();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (viewer.classList.contains("open")) closeViewer();
    else if (contactModal.classList.contains("open")) closeContact();
    else setMenu(false);
  }
  if (viewer.classList.contains("open") && event.key === "ArrowLeft") showWork(-1);
  if (viewer.classList.contains("open") && event.key === "ArrowRight") showWork(1);
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
let cursorX = -100, cursorY = -100;
window.addEventListener("mousemove", event => {
  cursorX = event.clientX; cursorY = event.clientY;
  cursorDot.style.transform = `translate(${cursorX}px,${cursorY}px) translate(-50%,-50%)`;
  cursorRing.style.transform = `translate(${cursorX}px,${cursorY}px) translate(-50%,-50%)`;
});
document.querySelectorAll("a,button,.gallery-card").forEach(element => {
  element.addEventListener("mouseenter", () => cursorRing.classList.add("hovered"));
  element.addEventListener("mouseleave", () => cursorRing.classList.remove("hovered"));
});

renderFilters();
renderGallery();
