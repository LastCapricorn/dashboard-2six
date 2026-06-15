"use strict";

const dashBoard2six = ( () => {

  const dashboard = document.querySelector(".dashboard");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu ul");
  const cards = document.querySelector(".cards");
  const logo = document.querySelector(".logo");
  const asideToggle = document.querySelectorAll("main [role='button']");
  const repoAdress = "https://github.com/LastCapricorn/";
  const liveAdress = "https://lastcapricorn.github.io/";
  const cardContents = [
    {
      imgSrc: "../images/admin-dashboard-2023.jpg",
      title: "Project: Admin Dashboard (2023)",
      text: "My previous Version from 2023 on this 2nd Full Stack JavaScript Project from TOP.",
      repoName: "admin-dashboard",
    },
    {
      imgSrc: "../images/top-project_sign-up-form_2026.jpg",
      title: "Project: Sign-up Form",
      text: "Project no. 1 of TOP's Full Stack JavaScript Path. I don't know where the idea came from to turn this into a tribute to Metallica as well.",
      repoName: "sign-up-xx6",
    },
    {
      imgSrc: "../images/top-project_calculator_2026.jpg",
      title: "Project: Calculator",
      text: "Project no. 5, the finale of TOP's Foundations Course. It was a major challenge to get that up and running.",
      repoName: "calcoolator20vi",
    },
    {
      imgSrc: "../images/top-project_etch-a-sketch_2026.jpg",
      title: "Project: Etch-a-Sketch",
      text: "Project no. 4 of TOP's Foundations Course. Maybe I'll create an SVG version of it that offers real utility.",
      repoName: "etch-a-sketch-2026",
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

  asideToggle.forEach( btn => btn.addEventListener("click", ev => {
    document.querySelector(`.${ev.currentTarget.getAttribute("name")}`).classList.toggle("drop");
  }));
  menuLinks.forEach( ul => ul.addEventListener("click", ev => dashboard.classList.remove("drop")));

  logo.addEventListener("click", () => {
    if (window.innerWidth > 600) {
      dashboard.classList.remove("drop");
      dashboard.classList.toggle("slim");
    } else {
      dashboard.classList.remove("slim");
      dashboard.classList.toggle("drop");
    }

  });

  createCards();
} )();
