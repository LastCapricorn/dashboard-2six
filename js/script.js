"use strict";

const dashBoard2six = ( () => {

  const dashboard = document.querySelector(".dashboard");
  const menu = document.querySelector(".menu");
  const menuUl = document.querySelectorAll(".menu ul");
  const menuLi = document.querySelectorAll(".menu li a");
  const cards = document.querySelector(".cards");
  const logo = document.querySelector(".logo");
  const asideToggle = document.querySelectorAll("main [role='button']");
  const schemeToggle = document.querySelectorAll(".top [role='button']");
  const trendLi = document.querySelectorAll(".trending a");
  const smallWidth = () => window.innerWidth < 600;
  const smallInner = () => document.querySelector("main").clientWidth <= 615;
  const preferredScheme = () => getComputedStyle(document.documentElement).getPropertyValue("color-scheme");
  const repoAdress = "https://github.com/LastCapricorn/";
  const liveAdress = "https://lastcapricorn.github.io/";
  const cardContents = [
    {
      imgSrc: "images/top-project_library_2026.jpg",
      title: "Project: Library",
      text: "Project no. 3 of TOP's Full Stack JavaScript Path. In the end, I am very proud of my rating stars...",
      repoName: "library-1a",
    },
    {
      imgSrc: "images/top-project_sign-up-form_2026.jpg",
      title: "Project: Sign-up Form",
      text: "Project no. 1 of TOP's Full Stack JavaScript Path. I don't know where the idea came from to turn this into a tribute to Metallica as well.",
      repoName: "sign-up-xx6",
    },
    {
      imgSrc: "images/top-project_calculator_2026.jpg",
      title: "Project: Calculator",
      text: "Project no. 5, the finale of TOP's Foundations Course. It was a major challenge to get that up and running.",
      repoName: "calcoolator20vi",
    },
    {
      imgSrc: "images/top-project_etch-a-sketch_2026.jpg",
      title: "Project: Etch-a-Sketch",
      text: "Project no. 4 of TOP's Foundations Course. Maybe I'll create an SVG version of it that offers real utility.",
      repoName: "etch-a-sketch-2026",
    },
    {
      imgSrc: "images/admin-dashboard-2023.jpg",
      title: "Project: Admin Dashboard (2023)",
      text: "My previous Version from 2023 on this 2nd Full Stack JavaScript Project from TOP.",
      repoName: "admin-dashboard",
    },
  ];

  function createCards() {
      cardContents.forEach(cardElem => {
      const card = document.createElement("div");
      const title = document.createElement("h3");
      const linkImgFrame = document.createElement("a")
      const image = document.createElement("img");
      const cardText = document.createElement("p");
      const iconRow = document.createElement("div");
      const iconNames = ["star", "eye", "git-fork"];

      card.classList.add("card");
      title.textContent = cardElem.title;
      linkImgFrame.setAttribute("href", `${liveAdress}${cardElem.repoName}/`);
      image.setAttribute("src", cardElem.imgSrc);
      image.setAttribute("width", 240);
      cardText.textContent = cardElem.text;

      iconNames.forEach( iconName => {
        const link = document.createElement("a");
        const span = document.createElement("span");
        const adresses = ["#", `${liveAdress}${cardElem.repoName}/`, `${repoAdress}${cardElem.repoName}`];

        link.setAttribute("href", adresses[iconNames.indexOf(iconName)]);
        span.classList.add(`ph--${iconName}-duotone`);
        link.appendChild(span);
        iconRow.appendChild(link);
      });

      linkImgFrame.appendChild(image);
      card.appendChild(title);
      card.appendChild(linkImgFrame);
      card.appendChild(cardText);
      card.appendChild(iconRow);
      cards.appendChild(card);
    });
  }

  const toggleMenu = () =>
    dashboard.classList.toggle(smallWidth() ? "drop" : "slim");

  const removeClassDrop = () =>
    dashboard.classList.remove("drop");

  function toggleTheme() {
    document.documentElement.dataset.theme =
      `${preferredScheme() === "dark" ? "light" : "dark"}`;
    document.documentElement.style.setProperty("color-scheme",
      `${preferredScheme() === "dark" ? "light" : "dark"}`);
  }

  function toggleAside(ev) {
    if (!smallInner()) return;
    document.querySelector(`.${ev.currentTarget.getAttribute("name")}`).classList.toggle("drop");
  }

  function checkDropState() {
    if( dashboard.classList.contains("drop") || !smallWidth() ) return;
    dashboard.classList.add("drop");
  }

  function checkTrendState() {
    if( document.querySelector(".trending").classList.contains("drop") || !smallInner()) return;
    document.querySelector(".trending").classList.add("drop");
  }

  schemeToggle.forEach( btn => btn.addEventListener("click", toggleTheme));
  schemeToggle.forEach( btn => btn.addEventListener("keypress",
    ev => ev.key === "Enter" ? toggleTheme() : ""));

  asideToggle.forEach( btn => btn.addEventListener("click", toggleAside));
  asideToggle.forEach( btn => btn.addEventListener("keypress",
    ev => ev.key === "Enter" ? toggleAside(ev) : ""));

  menuUl.forEach( ul => ul.addEventListener("click", removeClassDrop));
  menuUl.forEach( ul => ul.addEventListener("enter",
    ev => ev.key === "Enter" ? removeClassDrop() : ""));

  menuLi.forEach( li => li.addEventListener("focus", checkDropState));
  trendLi.forEach( li => li.addEventListener("focus", checkTrendState));

  logo.addEventListener("click", toggleMenu);
  logo.addEventListener("keypress",
    ev => ev.key === "Enter" ? toggleMenu() : "");

  window.addEventListener("resize",
    () => smallWidth() ? dashboard.classList.remove("slim") : dashboard.classList.remove("drop"));

  createCards();

} )();
