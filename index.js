const projects = [
  {
    id: "1",
    title: "Splitter",
    description: "Some description about splitter",
    images: ['/images/splitter/splitter-empty.png', '/images/splitter/splitter-failed.png', '/images/splitter/splitter-phone.png']
  },
  {
    id: "2",
    title: "Pizzeria",
    description: "Some description about pizzeria",
    images: ['/images/pizzeria/pizzeria-pizza.png', '/images/pizzeria/pizzeria-book-a-table.png', '/images/pizzeria/pizzeria-cart.png']
  },
  {
    id: "3",
    title: "Waiter-app",
    description: "Some description about waiter app",
    images: ['/images/waiter-app/waiter-status', '/images/waiter-app/waiter-add-table', '/images/waiter-app/waiter-phone']
  },
  {
    id: "4",
    title: "Landing Page",
    description: "Some description about landing page",
    images: ['/images/landing-page/landing-page-pricing.png', '/images/landing-page/landing-page-team.png', '/images/landing-page/landing-page-services.png']
  },
  {
    id: "5",
    title: "Nottification Page",
    description: "Some description about notifications",
  },
  {
    id: "6",
    title: "About me Page",
    description: "Some description about about me page",
  },
];

// get modal element
const modal = document.querySelector(".modal");

// get buttons
const learnMoreBtns = document.querySelectorAll(".btn-portfolio");
const closeModalBtn = document.querySelector(".closeBtn");

//get modal title
const modalTitle = document.querySelector(".modal-title");
// get modal description
const modalDescription = document.querySelector(".modal-description");

//get modal image elements
const modalImage1 = document.querySelector(".modal-image-1");
const modalImage2 = document.querySelector(".modal-image-2");
const modalImage3 = document.querySelector(".modal-image-3");

for (const btn of learnMoreBtns) {
  btn.addEventListener("click", (e) => openModal(e));
}

closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", closeModalByClick);

function openModal(e) {
  const attribute = e.target.getAttribute("id");
  console.log("attribute", attribute);
  for (const project of projects) {
    if (project.id === attribute) {
      console.log("project id:", project.id);
      console.log(attribute, project.id);
      modalTitle.innerHTML = project.title;
      modalDescription.innerHTML = project.description;
      const src1 = document.createAttribute("src");
      src1.value = project.images[0];
      modalImage1.setAttributeNode(src1);
    }
  }
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function closeModalByClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
