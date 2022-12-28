const projects = [
  {
    id: "1",
    title: "Splitter",
    description:
      "Responsive tip-calculator app built with React.js.<br><br>Users are able to calculate the correct tip and total cost of the bill per person.",
    images: [
      "/images/splitter/splitter-empty.png",
      "/images/splitter/splitter-failed.png",
      "/images/splitter/splitter-phone.png",
    ],
    githubLink: 'https://github.com/oleole912/splitter-app',
    liveLink: 'https://splitter-app.oleole912.repl.co'
  },
  {
    id: "2",
    title: "Pizzeria",
    description:
      "A simulation of client side e-commerce website with 'add to cart' and 'book a table' features.",
    images: [
      "/images/pizzeria/pizzeria-pizza.png",
      "/images/pizzeria/pizzeria-book-a-table.png",
      "/images/pizzeria/pizzeria-cart.png",
    ],
    githubLink: 'https://github.com/oleole912/project-pizzeria',
    liveLink: 'https://project-pizzeria.oleole912.repl.co'
  },
  {
    id: "3",
    title: "Waiter-app",
    description:
      "Realtime table-managing system for waiters.<br><br>It allows waiter to check the status of restaurant's tables, update that status and also add a new table or remove existing one.",
    images: [
      "/images/waiter-app/waiter-status.png",
      "/images/waiter-app/waiter-add-table.png",
      "/images/waiter-app/waiter-phone.png",
    ],
    githubLink: 'https://github.com/oleole912/waiter-app',
    liveLink: 'https://waiter-app.oleole912.repl.co'
  },
  {
    id: "4",
    title: "Landing Page",
    description:
      "This is a simple fully responsive landing page created from a design, built with HTML and CSS.<br><br> Avocode app used to get as close to a design as possible.",
    images: [
      "/images/landing-page/landing-page-pricing.png",
      "/images/landing-page/landing-page-team.png",
      "/images/landing-page/landing-page-services.png",
    ],
    githubLink: 'https://github.com/oleole912/Design-to-code-Alecto',
    liveLink: '#'
  },
  {
    id: "5",
    title: "Todo-app",
    description: "Responsive ToDo App build with React.js and Redux.<br><br>It allows user to create and delete lists, as well as add and delete new categories and single cards.",
    images: [
      "/images/todo-app/todo-main.png",
      "/images/todo-app/todo-lists.png",
      "/images/todo-app/todo-favourite.png",
    ],
    githubLink: 'https://github.com/oleole912/react-todo-app',
    liveLink: 'https://react-todo-app.oleole912.repl.co'
  },
  {
    id: "6",
    title: "About me Page",
    description: "Fully responsive single page personal website.<br><br>Tells a little bit about myself and my work.",
    images: [
      "/images/about-me-page/about-page-about.png",
      "/images/about-me-page/about-page-portfolio.png",
      "/images/about-me-page/about-page-mobile-vertical.png",
    ],
    githubLink: '#',
    liveLink: '#'
  },
];

// get toggle button
const toggleButton = document.querySelector('.toggle-btn');
// get nav__menu element
const navMenu = document.querySelector('.nav__menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active')
})

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

// get modal links
const liveLink = document.querySelector('.live-link');
const githubLink = document.querySelector('.github-link');

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

      const hrefLiveLink = document.createAttribute("href");
      hrefLiveLink.value = project.liveLink;
      liveLink.setAttributeNode(hrefLiveLink);

      const hrefGithubLink = document.createAttribute("href");
      hrefGithubLink.value = project.githubLink;
      githubLink.setAttributeNode(hrefGithubLink);

      const src1 = document.createAttribute("src");
      src1.value = project.images[0];
      modalImage1.setAttributeNode(src1);

      const src2 = document.createAttribute("src");
      src2.value = project.images[1];
      modalImage2.setAttributeNode(src2);

      const src3 = document.createAttribute("src");
      src3.value = project.images[2];
      modalImage3.setAttributeNode(src3);
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
